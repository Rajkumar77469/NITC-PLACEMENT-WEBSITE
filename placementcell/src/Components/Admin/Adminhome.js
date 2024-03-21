

// import React, { useState, useEffect, useCallback } from "react";
// import { Form, Input, message, Modal, Select, Table, DatePicker } from "antd";
// import {
//   UnorderedListOutlined,
//   EditOutlined,
//   DeleteOutlined,
//   PlusOutlined,
// } from "@ant-design/icons";
// import axios from "axios";
// import Spinner from "../Spinner";
// import moment from "moment";
// import Layout from "../Layout/Layout";
// import COMPANYCOMPONENT from "../company/Companyhome";
// import INTERVIEWROUTE from "../interview/interviewhome";
// const { RangePicker } = DatePicker;

// const Adminhome = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [allstudent, setAllstudent] = useState([]);
//   const [frequency, setFrequency] = useState("7");
//   const [selectedDate, setSelectedate] = useState([]);
//   const [Branch, setType] = useState("all");
//   const [Status, setStatus] = useState("all");
//   const [viewData, setViewData] = useState("table");
//   const [editable, setEditable] = useState(null);

//   //table data

//   const columns = [
//     {
//       title: "Date",
//       dataIndex: "date",
//       key: "date",
//       render: (text) => <span>{moment(text).format("DD-MM-YYYY")}</span>,
//     },
//     {
//       title: "NAME",
//       dataIndex: "Name",
//       key: "name",
//     },
//     {
//       title: "ENROLLMENT",
//       dataIndex: "Enrollment",
//       key: "enrollment",
//     },
//     {
//       title: "EMAIL",
//       dataIndex: "Email",
//       key: "email",
//     },
//     {
//       title: "GENDER",
//       dataIndex: "Gender",
//       key: "gender",
//     },
//     {
//       title: "MOBILE",
//       dataIndex: "Mob",
//       key: "mobile",
//     },
//     {
//       title: "BRANCH",
//       dataIndex: "Branch",
//       key: "branch",
//     },
//     {
//       title: "ADDRESS",
//       dataIndex: "Address",
//       key: "address",
//     },
//     {
//       title: "TENTH",
//       dataIndex: "Tenth",
//       key: "tenth",
//     },
//     {
//       title: "TWELTH",
//       dataIndex: "Twelth",
//       key: "twelth",
//     },
//     {
//       title: "GRADUATION",
//       dataIndex: "Graduation",
//       key: "graduation",
//     },
//     {
//       title: "CGPA",
//       dataIndex: "Cgpa",
//       key: "cgpa",
//     },
//     {
//       title: "DOB",
//       dataIndex: "Dob",
//       key: "Dob",
//       render: (text) => <span>{moment(text).format("DD-MM-YYYY")}</span>,
//     },
//     {
//       title: "STATUS",
//       dataIndex: "Status",
//       key: "Status",
//     },
//     {
//       title: "Actions",
//       key: "actions",
//       render: (text, record) => (
//         <div>
//           <EditOutlined
//             onClick={() => {
//               setEditable(record);
//               setShowModal(true);
//             }}
//           />
//           <DeleteOutlined
//             className="mx-2"
//             onClick={() => {
//               handleDelete(record);
//             }}
//           />
//         </div>
//       ),
//     },
//   ];

//   //getall transactions

//   //useEffect Hook
//   const getAllstudent = useCallback(async () => {
//     try {
//       const user = JSON.parse(localStorage.getItem("user"));
//       setLoading(true);
//       const res = await axios.post("/students/get-student", {
//         userid: user._id,
//         frequency,
//         selectedDate,
//         Branch,
//         Status,
//       });
//       setAllstudent(res.data);
//       setLoading(false);
//     } catch (error) {
//       message.error("Fetch Issue With Transaction");
//     }
//   }, [frequency, selectedDate, Branch, Status]);

//   useEffect(() => {
//     getAllstudent();
//   }, [getAllstudent]);

//   useEffect(() => {
//     getAllstudent();
//   }, [frequency, selectedDate, Branch, Status, getAllstudent]);
//   //delete handler
//   const handleDelete = async (record) => {
//     try {
//       setLoading(true);
//       await axios.post("students/delete-student", {
//         transacationId: record._id,
//       });
//       setLoading(false);
//       message.success("student Deleted!");
//       getAllstudent();
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//       message.error("Unable to delete");
//     }
//   };

//   // form handling
//   const handleSubmit = async (values) => {
//     try {
//       const user = JSON.parse(localStorage.getItem("user"));
//       setLoading(true);
//       // Check if email exists
//       const emailExists = allstudent.some((student) => student.Email === values.Email);
//       // Check if enrollment exists
//       const enrollmentExists = allstudent.some((student) => student.Enrollment === values.Enrollment);

//       if (editable) {
//         await axios.post("students/edit-student", {
//           payload: {
//             ...values,
//             userId: user._id,
//           },
//           transacationId: editable._id,
//         });
//         setLoading(false);
//         message.success("student Updated Successfully");
//       } else {
//         if (emailExists) {
//           setLoading(false);
//           message.error("Email already exists");
//           return; // Stop further execution
//         }
//         if (enrollmentExists) {
//           setLoading(false);
//           message.error("Enrollment already exists");
//           return; // Stop further execution
//         }
//         await axios.post("students/add-student", {
//           ...values,
//           userid: user._id,
//         });
//         setLoading(false);
//         message.success("student Added Successfully");
//       }
//       setShowModal(false);
//       setEditable(null);
//       getAllstudent();
//     } catch (error) {
//       setLoading(false);
//       message.error("Please fill all fields");
//     }
//   };

//   const disabledDate = (current) => {
//     // Disable future dates
//     return current && current > moment().endOf("day");
//   };

//   return (
//     <Layout>
//     <div style={{ textAlign: 'center' }}>
//     <h2 style={{ fontWeight: 'bold', color: 'blue' }}>STUDENTS RECORDS</h2>
//     </div>
//       {loading && <Spinner />}
//       <div className="filters" style={{ display: 'flex', justifyContent: 'space-between' }}>
//         <div>
//           <h6>Sort By Enrollment Date</h6>
//           <Select value={frequency} onChange={(values) => setFrequency(values)}>
//             <Select.Option value="7">LAST 1 Week</Select.Option>
//             <Select.Option value="30">LAST 1 Month</Select.Option>
//             <Select.Option value="365">LAST 1 year</Select.Option>
//             <Select.Option value="custom">Custom</Select.Option>
//           </Select>
//           {frequency === "custom" && (
//             <RangePicker
//               value={selectedDate}
//               onChange={(values) => setSelectedate(values)}
//             />
//           )}
//         </div>
//         <div>
//           <h6>Select Branch</h6>
//           <Select value={Branch} onChange={(values) => setType(values)}  style={{ marginRight: '20px' }}>
//             <Select.Option value="all">ALL</Select.Option>
//             <Select.Option value="Btech">Btech</Select.Option>
//             <Select.Option value="Mtech">Mtech</Select.Option>
//             <Select.Option value="Mca">Mca</Select.Option>
//             <Select.Option value="Mba">Mba</Select.Option>
//           </Select>
//         </div>
//         <div>
//           <h6>Select Status</h6>
//           <Select value={Status} onChange={(values) => setStatus(values)}  style={{ marginRight: '20px' }}>
//             <Select.Option value="all">ALL</Select.Option>
//             <Select.Option value="Placed">Placed</Select.Option>
//             <Select.Option value="UnPlaced">UnPlaced</Select.Option>
//           </Select>
//         </div>
//         <div className="switch-icons">
//           <UnorderedListOutlined
//             className={`mx-2 ${viewData === "table" ? "active-icon" : "inactive-icon"
//               }`}
//             onClick={() => setViewData("table")}
//           />
//         </div>
//         <div>
//           <button
//             className="btn btn-primary"
//             onClick={() => setShowModal(true)} icon={<PlusOutlined />}
//           >
//             Add New
//           </button>
//         </div>
//       </div>
//       <div className="content">
//         {viewData === "table" && (
//           <Table columns={columns} dataSource={allstudent} />
//         )}
//       </div>
//       <Modal
//         title={editable ? "Edit Transaction" : "Add student"}
//         open={showModal}
//         onCancel={() => setShowModal(false)}
//         footer={null}
//       >
//         <Form
//           layout="vertical"
//           onFinish={handleSubmit}
//           initialValues={editable}
//         >
//           <Form.Item label="NAME" name="Name" rules={[{ required: true, message: 'Please input student name' }]}>
//             <Input type="text" />
//           </Form.Item>
//           <Form.Item label="ENROLLMENT" name="Enrollment" rules={[{ required: true, len: 9, message: 'Please input a valid enrollment ID of 9 characters' }]}>
//             <Input type="text" />
//           </Form.Item>
//           <Form.Item label="EMAIL" name="Email" rules={[
//             {
//               required: true,
//               type: "email",
//               message: "Please enter a valid email address",
//             },
//             {
//               pattern: /^[^\s@]+@nitc\.ac\.in$/,
//               message: 'Please enter a valid email address ending with @nitc.ac.in'
//             }
//           ]}>
//             <Input type="text" />
//           </Form.Item>
//           <Form.Item label="DOB" name="Dob" rules={[
//             {
//               required: true,
//               message: "Please select Date of Birth",
//             },
//             {
//               validator: (_, value) => {
//                 if (value && value.isAfter(moment(), 'day')) {
//                   return Promise.reject('Date of Birth must be in the past');
//                 }
//                 return Promise.resolve();
//               }
//             }
//           ]}>
//             <DatePicker disabledDate={disabledDate} style={{ width: 475 }} />

//           </Form.Item>
//           <Form.Item label="GENDER" name="Gender" rules={[{ required: true, message: 'Please select student gender' }]}>
//             <Select>
//               <Select.Option value="Male">Male</Select.Option>
//               <Select.Option value="Female">Female</Select.Option>
//             </Select>
//           </Form.Item>
//           <Form.Item label="MOB" name="Mob" rules={[
//             {
//               required: true,
//               len: 10,
//               message: 'Please input a valid 10-digit mobile number'
//             },
//             {
//               pattern: /^[0-9]*$/,
//               message: 'Please input a valid mobile number containing only digits'
//             }
//           ]}>
//             <Input type="Number" />
//           </Form.Item>
//           <Form.Item label="BRANCH" name="Branch" rules={[{ required: true, message: 'Please select student branch' }]}>
//             <Select>
//               <Select.Option value="Btech">Btech</Select.Option>
//               <Select.Option value="Mtech">Mtech</Select.Option>
//               <Select.Option value="Mca">Mca</Select.Option>
//               <Select.Option value="Mba">Mba</Select.Option>
//             </Select>
//           </Form.Item>
//           <Form.Item label="STATUS" name="Status" rules={[{ required: true, message: 'Please select student status' }]}>
//             <Select>
//               <Select.Option value="Placed">Placed</Select.Option>
//               <Select.Option value="UnPlaced">UnPlaced</Select.Option>
//             </Select>
//           </Form.Item>
//           <Form.Item label="Enrollment Date" name="date" rules={[
//             {
//               required: true,
//               message: "Please select Enrollment Date",
//             },
//             {
//               validator: (_, value) => {
//                 if (value && value.isAfter(moment(), 'day')) {
//                   return Promise.reject('Enrollment Date must be in the past');
//                 }
//                 return Promise.resolve();
//               }
//             }
//           ]}
//           >
//             <DatePicker disabledDate={disabledDate} style={{ width: 475 }} />

//           </Form.Item>
//           <Form.Item label="ADDRESS" name="Address" rules={[{ required: true, message: 'Please fill student Address' }]}>
//             <Input type="Text" />
//           </Form.Item>
//           <Form.Item label="TENTH" name="Tenth" rules={[{ required: true, message: 'Please fill student Tenth percentage' }]}>
//             <Input type="Number" required />
//           </Form.Item>
//           <Form.Item label="TWELTH" name="Twelth" rules={[{ required: true, message: 'Please fill student Twelth percentage' }]}>
//             <Input type="Number" required />
//           </Form.Item>
//           <Form.Item label="GRADUATION" name="Graduation">
//             <Input type="Number" />
//           </Form.Item>
//           <Form.Item label="CGPA" name="Cgpa" rules={[{ required: true, message: 'Please fill student  current Cgpa' }]}>
//             <Input type="Number" />
//           </Form.Item>
//           <div className="d-flex justify-content-end">
//             <button type="submit" className="btn btn-primary">
//               SAVE
//             </button>
//           </div>
//         </Form>
//       </Modal>


//       <COMPANYCOMPONENT />

//       <INTERVIEWROUTE />
//     </Layout>
//   );
// };

// export default Adminhome;









import React, { useState, useEffect, useCallback } from "react";
import { Form, Input, message, Modal, Select, Table, DatePicker } from "antd";
import {
  UnorderedListOutlined,
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import axios from "axios";
import Spinner from "../Spinner";
import moment from "moment";
import Layout from "../Layout/Layout";
import COMPANYCOMPONENT from "../company/Companyhome";
import INTERVIEWROUTE from "../interview/interviewhome";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";



const { RangePicker } = DatePicker;

const Adminhome = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allstudent, setAllstudent] = useState([]);
  const [frequency, setFrequency] = useState("7");
  const [selectedDate, setSelectedate] = useState([]);
  const [Branch, setType] = useState("all");
  const [Status, setStatus] = useState("all");
  const [viewData, setViewData] = useState("table");
  const [editable, setEditable] = useState(null);

  //table data

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => <span>{moment(text).format("DD-MM-YYYY")}</span>,
    },
    {
      title: "NAME",
      dataIndex: "Name",
      key: "name",
    },
    {
      title: "ENROLLMENT",
      dataIndex: "Enrollment",
      key: "enrollment",
    },
    {
      title: "EMAIL",
      dataIndex: "Email",
      key: "email",
    },
    {
      title: "GENDER",
      dataIndex: "Gender",
      key: "gender",
    },
    {
      title: "MOBILE",
      dataIndex: "Mob",
      key: "mobile",
    },
    {
      title: "BRANCH",
      dataIndex: "Branch",
      key: "branch",
    },
    {
      title: "ADDRESS",
      dataIndex: "Address",
      key: "address",
    },
    {
      title: "TENTH",
      dataIndex: "Tenth",
      key: "tenth",
    },
    {
      title: "TWELTH",
      dataIndex: "Twelth",
      key: "twelth",
    },
    {
      title: "GRADUATION",
      dataIndex: "Graduation",
      key: "graduation",
    },
    {
      title: "CGPA",
      dataIndex: "Cgpa",
      key: "cgpa",
    },
    {
      title: "DOB",
      dataIndex: "Dob",
      key: "Dob",
      render: (text) => <span>{moment(text).format("DD-MM-YYYY")}</span>,
    },
    {
      title: "STATUS",
      dataIndex: "Status",
      key: "Status",
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

  //getall transactions

  //useEffect Hook
  const getAllstudent = useCallback(async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      setLoading(true);
      const res = await axios.post("/students/get-student", {
        userid: user._id,
        frequency,
        selectedDate,
        Branch,
        Status,
      });
      setAllstudent(res.data);
      setLoading(false);
    } catch (error) {
      message.error("Fetch Issue With Transaction");
    }
  }, [frequency, selectedDate, Branch, Status]);

  useEffect(() => {
    getAllstudent();
  }, [getAllstudent]);

  useEffect(() => {
    getAllstudent();
  }, [frequency, selectedDate, Branch, Status, getAllstudent]);
  //delete handler
  const handleDelete = async (record) => {
    try {
      setLoading(true);
      await axios.post("students/delete-student", {
        transacationId: record._id,
      });
      setLoading(false);
      message.success("student Deleted!");
      getAllstudent();
    } catch (error) {
      setLoading(false);
      console.log(error);
      message.error("Unable to delete");
    }
  };



  //download

  
 ///download 
 const handleDownload = () => {
  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';

  const dataForExport = allstudent.map(item => ({
    "Date": moment(item.date).format("DD-MM-YYYY"),
    "ENROLLMENT": item.Enrollment,
    "Student Name": item.Name,
    "EMAIL":item.Email,
    "GENDER":item.Gender,
    "MOBILE":item.Mob,
    "BRANCH":item.Branch,
    "ADDRESS":item.Address,
    "TENTH":item.Tenth,
    "TWELTH":item.Twelth,
    "GRADUATION":item.Graduation,
    "CGPA":item.Cgpa,
    "DATE OF BIRTH": moment(item.Dob).format("DD-MM-YYYY"),
    "STATUS":item.Status,
  }));

  const ws = XLSX.utils.json_to_sheet(dataForExport);
  const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
  const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  const data = new Blob([excelBuffer], { type: fileType });
  const fileName = 'Student_record' + fileExtension;
  saveAs(data, fileName);
};

  // form handling
  const handleSubmit = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      setLoading(true);
      // Check if email exists
      const emailExists = allstudent.some((student) => student.Email === values.Email);
      // Check if enrollment exists
      const enrollmentExists = allstudent.some((student) => student.Enrollment === values.Enrollment);

      if (editable) {
        await axios.post("students/edit-student", {
          payload: {
            ...values,
            userId: user._id,
          },
          transacationId: editable._id,
        });
        setLoading(false);
        message.success("student Updated Successfully");
      } else {
        if (emailExists) {
          setLoading(false);
          message.error("Email already exists");
          return; // Stop further execution
        }
        if (enrollmentExists) {
          setLoading(false);
          message.error("Enrollment already exists");
          return; // Stop further execution
        }
        await axios.post("students/add-student", {
          ...values,
          userid: user._id,
        });
        setLoading(false);
        message.success("student Added Successfully");
      }
      setShowModal(false);
      setEditable(null);
      getAllstudent();
    } catch (error) {
      setLoading(false);
      message.error("Please fill all fields");
    }
  };

  const disabledDate = (current) => {
    // Disable future dates
    return current && current > moment().endOf("day");
  };

  return (
    <div>
    <Layout>
    
    <div style={{ textAlign: 'center' }}>
    <h2 style={{ fontWeight: 'bold', color: 'blue' }}>STUDENTS RECORDS</h2>
    </div>
      {loading && <Spinner />}
      <div className="filters" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="datefilter">
          <h6>Sort By Enrollment Date</h6>
          <Select value={frequency} onChange={(values) => setFrequency(values)}>
            <Select.Option value="7">LAST 1 Week</Select.Option>
            <Select.Option value="30">LAST 1 Month</Select.Option>
            <Select.Option value="365">LAST 1 year</Select.Option>
            <Select.Option value="custom">Custom</Select.Option>
          </Select>
          {frequency === "custom" && (
            <RangePicker
              value={selectedDate}
              onChange={(values) => setSelectedate(values)}
            />
          )}
        </div>
        <div>
          <h6>Select Branch</h6>
          <Select value={Branch} onChange={(values) => setType(values)}  style={{ marginRight: '20px' }}>
            <Select.Option value="all">ALL Branch</Select.Option>
            <Select.Option value="Btech">Btech</Select.Option>
            <Select.Option value="Mtech">Mtech</Select.Option>
            <Select.Option value="Mca">Mca</Select.Option>
            <Select.Option value="Mba">Mba</Select.Option>
            <Select.Option value="Mba">Other</Select.Option>
          </Select>
        </div>
        <div>
          <h6>Select Status</h6>
          <Select value={Status} onChange={(values) => setStatus(values)}  style={{ marginRight: '20px' }}>
            <Select.Option value="all">Placement Status</Select.Option>
            <Select.Option value="Placed">Placed</Select.Option>
            <Select.Option value="UnPlaced">UnPlaced</Select.Option>
          </Select>
        </div>
        <div className="switch-icons">
          <UnorderedListOutlined
            className={`mx-2 ${viewData === "table" ? "active-icon" : "inactive-icon"
              }`}
            onClick={() => setViewData("table")}
          />
        </div>
        <div>
      <button type="primary apnibutton" onClick={handleDownload} icon={<DownloadOutlined />}>
        Download 
      </button>
    </div>
        <div>
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)} icon={<PlusOutlined />}
          >
            Add New
          </button>
        </div>
      </div>
      <div className="content">
        {viewData === "table" && (
          <Table columns={columns} dataSource={allstudent} />
        )}
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
          <Form.Item label="NAME" name="Name" rules={[{ required: true, message: 'Please input student name' }]}>
            <Input type="text" />
          </Form.Item>
          <Form.Item label="ENROLLMENT" name="Enrollment" rules={[{ required: true, len: 9, message: 'Please input a valid enrollment ID of 9 characters' }]}>
            <Input type="text" />
          </Form.Item>
          <Form.Item label="EMAIL" name="Email" rules={[
            {
              required: true,
              type: "email",
              message: "Please enter a valid email address",
            },
            {
              pattern: /^[^\s@]+@nitc\.ac\.in$/,
              message: 'Please enter a valid email address ending with @nitc.ac.in'
            }
          ]}>
            <Input type="text" />
          </Form.Item>
          <Form.Item label="DOB" name="Dob" rules={[
            {
              required: true,
              message: "Please select Date of Birth",
            },
            {
              validator: (_, value) => {
                if (value && value.isAfter(moment(), 'day')) {
                  return Promise.reject('Date of Birth must be in the past');
                }
                return Promise.resolve();
              }
            }
          ]}>
            <DatePicker disabledDate={disabledDate} style={{ width: 475 }} />

          </Form.Item>
          <Form.Item label="GENDER" name="Gender" rules={[{ required: true, message: 'Please select student gender' }]}>
            <Select>
              <Select.Option value="Male">Male</Select.Option>
              <Select.Option value="Female">Female</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="MOB" name="Mob" rules={[
            {
              required: true,
              len: 10,
              message: 'Please input a valid 10-digit mobile number'
            },
            {
              pattern: /^[0-9]*$/,
              message: 'Please input a valid mobile number containing only digits'
            }
          ]}>
            <Input type="Number" />
          </Form.Item>
          <Form.Item label="BRANCH" name="Branch" rules={[{ required: true, message: 'Please select student branch' }]}>
            <Select>
              <Select.Option value="Btech">Btech</Select.Option>
              <Select.Option value="Mtech">Mtech</Select.Option>
              <Select.Option value="Mca">Mca</Select.Option>
              <Select.Option value="Mba">Mba</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="STATUS" name="Status" rules={[{ required: true, message: 'Please select student status' }]}>
            <Select>
              <Select.Option value="Placed">Placed</Select.Option>
              <Select.Option value="UnPlaced">UnPlaced</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Enrollment Date" name="date" rules={[
            {
              required: true,
              message: "Please select Enrollment Date",
            },
            {
              validator: (_, value) => {
                if (value && value.isAfter(moment(), 'day')) {
                  return Promise.reject('Enrollment Date must be in the past');
                }
                return Promise.resolve();
              }
            }
          ]}
          >
            <DatePicker disabledDate={disabledDate} style={{ width: 475 }} />

          </Form.Item>
          <Form.Item label="ADDRESS" name="Address" rules={[{ required: true, message: 'Please fill student Address' }]}>
            <Input type="Text" />
          </Form.Item>
          <Form.Item label="TENTH" name="Tenth" rules={[{ required: true, message: 'Please fill student Tenth percentage' }]}>
            <Input type="Number" required />
          </Form.Item>
          <Form.Item label="TWELTH" name="Twelth" rules={[{ required: true, message: 'Please fill student Twelth percentage' }]}>
            <Input type="Number" required />
          </Form.Item>
          <Form.Item label="GRADUATION" name="Graduation">
            <Input type="Number" />
          </Form.Item>
          <Form.Item label="CGPA" name="Cgpa" rules={[{ required: true, message: 'Please fill student  current Cgpa' }]}>
            <Input type="Number" />
          </Form.Item>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              SAVE
            </button>
          </div>
        </Form>
      </Modal>


      <COMPANYCOMPONENT />
    <INTERVIEWROUTE />
    </Layout>
    </div>
  );
};

export default Adminhome;

  