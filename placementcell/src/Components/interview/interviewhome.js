


import React, { useState, useEffect, useCallback } from "react";
import { Form, message, Modal, Select, Table, DatePicker, TimePicker, Button } from "antd";
import { EditOutlined, DeleteOutlined, DownloadOutlined, PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import moment from "moment";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

// const { RangePicker } = DatePicker;

const Interviewhome = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allstudent, setAllstudent] = useState([]);
  const [editable, setEditable] = useState(null);
  const [studentNames, setStudentNames] = useState([]);
  const [companyNames, setCompanyNames] = useState([]);

  const fetchStudentNames = async () => {
    try {
      const response = await axios.get('/students/student-names');
      const { studentNames } = response.data;
      setStudentNames(studentNames);
    } catch (error) {
      console.error('Error fetching student names:', error);
    }
  };

  const fetchCompanyNames = async () => {
    try {
      const response = await axios.get('/company/company-names');
      const { companyNames } = response.data;
      setCompanyNames(companyNames);
    } catch (error) {
      console.error('Error fetching company names:', error);
    }
  };

  const getAllStudentData = useCallback(async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      setLoading(true);
      const res = await axios.post("/interviews/get-interview", {
        userid: user._id,
        frequency: "7",
        selectedDate: [],
      });
      setAllstudent(res.data);
      setLoading(false);
    } catch (error) {
      message.error("fetch issue with interviews");
    }
  }, []);

  useEffect(() => {
    fetchStudentNames();
    fetchCompanyNames();
    getAllStudentData();
  }, [getAllStudentData]);

  const handleDelete = async (record) => {
    try {
      setLoading(true);
      await axios.post("interviews/delete-interview", {
        transacationId: record._id,
      });
      setLoading(false);
      message.success("student interview Deleted!");
      getAllStudentData();
    } catch (error) {
      setLoading(false);
      console.log(error);
      message.error("Unable to delete");
    }
  };

  const handleDownload = () => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const dataForExport = allstudent.map(item => ({
      "Company Name": item.CompanyName,
      "Student Name": item.StudentName,
      "Date": moment(item.date).format("DD-MM-YYYY"),
      "Start Time": moment(item.startTime).format("HH:mm"),
      "End Time": moment(item.endTime).format("HH:mm"),
    }));

    const ws = XLSX.utils.json_to_sheet(dataForExport);
    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    const fileName = 'interview_data' + fileExtension;
    saveAs(data, fileName);
  };

  const handleSubmit = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      setLoading(true);
      if (editable) {
        await axios.post("interviews/edit-interview", {
          payload: {
            ...values,
            userId: user._id,
          },
          transacationId: editable._id,
        });
        setLoading(false);
        message.success("student interview Updated Successfully");
      } else {
        await axios.post("interviews/add-interview", {
          ...values,
          userid: user._id,
        });
        setLoading(false);
        message.success("student interview Added Successfully");
      }
      setShowModal(false);
      setEditable(null);
      getAllStudentData();
    } catch (error) {
      setLoading(false);
      message.error("Please fill all fields");
    }
  };

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => <span>{moment(text).format("DD-MM-YYYY")}</span>,
    },
    {
      title: "Company Name",
      dataIndex: "CompanyName",
      key: "CompanyName",
    },
    {
      title: "Student Name",
      dataIndex: "StudentName",
      key: "StudentName",
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
      key: "startTime",
      render: (text, record) => (
        <span>
          {moment(record.startTime).format("HH:mm")}
        </span>
      ),
    },
    {
      title: "End Time",
      dataIndex: "endTime",
      key: "endTime",
      render: (text, record) => (
        <span>
          {moment(record.endTime).format("HH:mm")}
        </span>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <div>
          <EditOutlined
            onClick={() => {
              setEditable(record);
              setShowModal(true);
            }}
          />
          <DeleteOutlined
            className="mx-2"
            onClick={() => {
              handleDelete(record);
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <>
    <div style={{ textAlign: 'center' }}>
    <h2 style={{ fontWeight: 'bold', color: 'blue' }}>INTERVIEW RECORDS</h2>
    </div>
      {loading && <div>Loading...</div>}
      <div className="filters">
      <div style={{ textAlign: 'right' }}>
      <Button type="primary" onClick={handleDownload} icon={<DownloadOutlined />}>
        Download 
      </Button>
    </div>
    
        <div style={{ flexGrow: 1 }}></div>
        <div>
          <Button type="primary" onClick={() => setShowModal(true)} icon={<PlusOutlined />}>
            Add New
          </Button>
        </div>
      </div>
      <div className="content">
        <Table columns={columns} dataSource={allstudent} />
      </div>
      <Modal
        title={editable ? "Edit Transaction" : "Add student"}
        open={showModal}
        onCancel={() => setShowModal(false)}
        footer={null}
      >
        <Form
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={editable}
        >
          <Form.Item label="Company" name="CompanyName" rules={[{ required: true, message: 'Please select a company' }]}>
            <Select style={{ width: 475 }} placeholder="Select a company">
              {companyNames.map((name, index) => (
                <Select.Option key={index} value={name}>{name}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Student" name="StudentName" rules={[{ required: true, message: 'Please select a student' }]}>
            <Select style={{ width: 475 }} placeholder="Select a student">
              {studentNames.map((name, index) => (
                <Select.Option key={index} value={name}>{name}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Date" name="date" rules={[{ required: true, message: 'Please select a date' }]}>
            <DatePicker style={{ width: 475 }} />
          </Form.Item>
          <Form.Item label="Start Time" name="startTime" rules={[{ required: true, message: 'Please select a start time' }]}>
            <TimePicker format="HH:mm" style={{ width: 475 }} />
          </Form.Item>
          <Form.Item label="End Time" name="endTime" rules={[{ required: true, message: 'Please select an end time' }, ({ getFieldValue }) => ({
              validator(_, value) {
                const startTime = getFieldValue('startTime');
                if (!value || !startTime || value.isAfter(startTime)) {
                  return Promise.resolve();
                }
                return Promise.reject('End time must be after start time');
              },
            })]}>
            <TimePicker format="HH:mm" style={{ width: 475 }} />
          </Form.Item>
          <div className="d-flex justify-content-end">
            <Button type="primary" htmlType="submit">
              SAVE
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default Interviewhome;



