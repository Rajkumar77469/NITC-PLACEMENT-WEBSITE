
// import React, { useState, useEffect, useCallback  } from "react";
// import { Form, Input, message, Modal, Select, Table, DatePicker } from "antd";
// import { EditOutlined, DeleteOutlined ,PlusOutlined} from "@ant-design/icons";
// import axios from "axios"; 
// import moment from "moment";
// const { RangePicker } = DatePicker;

// const Companyhome = () => {
//     const [showModal, setShowModal] = useState(false);
//     const [allcompany, setAllcompany] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [frequency, setFrequency] = useState("7");
//     const [selectedDate, setSelectedate] = useState([]);
//     const [editable, setEditable] = useState(null);
  
//     //table data
  
//     const columns = [
//       {
//         title: "Date",
//         dataIndex: "date",
//         key: "date",
//         render: (text) => <span>{moment(text).format("DD-MM-YYYY")}</span>,
//       },
//       {
//         title: "COMPANYNAME",
//         dataIndex: "CompanyName",
//         key: "companyName",
//       },
//       {
//         title: "CTC",
//         dataIndex: "CTC",
//         key: "ctc",
//       },
//       {
//         title: "Description",
//         dataIndex: "Description",
//         key: "Description",
//       },
//       {
//         title: "Actions",
//         key: "actions",
//         render: (text, record) => (
//           <div>
//             <EditOutlined
//               onClick={() => {
//                 setEditable(record);
//                 setShowModal(true);
//               }}
//             />
//             <DeleteOutlined
//               className="mx-2"
//               onClick={() => {
//                 handleDelete(record);
//               }}
//             />
//           </div>
//         ),
//       },
//     ];
    
//     //getall transactions
  
//     //useEffect Hook
//       const getAllcompany = useCallback(async () => {
//         try {
//           const user = JSON.parse(localStorage.getItem("user"));
//           setLoading(true);
//           const res = await axios.post("/company/get-company", {
//             userid: user._id,
//             frequency,
//             selectedDate,
//           });
//           setAllcompany(res.data);
//           setLoading(false);
//         } catch (error) {
//           message.error("Fetch Issue With company");
//         }
//     }, [frequency, selectedDate]);
  
    

//     useEffect(()=>{
//       getAllcompany();
//     },[getAllcompany]);

//     useEffect(()=>{
//       getAllcompany();
//     }, [frequency, selectedDate,getAllcompany]);
//     //delete handler
//     const handleDelete = async (record) => {
//       try {
//         setLoading(true);
//         await axios.post("company/delete-company", {
//           transacationId: record._id,
//         });
//         setLoading(false);
//         message.success("Company Deleted!");
//         getAllcompany();
//       } catch (error) {
//         setLoading(false);
//         console.log(error);
//         message.error("Unable to delete");
//       }
//     };
  


//     // form handling
//     const handleSubmit = async (values) => {
//       try {
//         const user = JSON.parse(localStorage.getItem("user"));
//         setLoading(true);
//         if (editable) {
//           await axios.post("company/edit-company", {
//             payload: {
//               ...values,
//               userId: user._id,
//             },
//             transacationId: editable._id,
//           });
//           setLoading(false);
//           message.success("Company Updated Successfully");
//         } else {
//           await axios.post("company/add-company", {
//             ...values,
//             userid: user._id,
//           });
//           setLoading(false);
//           message.success("Company Added Successfully");
//         }
//         setShowModal(false);
//         setEditable(null);
//         getAllcompany();
//       } catch (error) {
//         setLoading(false);
//         message.error("Please fill all fields");
//       }
//     };
  
//     return (
//       <>
//       <div style={{ textAlign: 'center' }}>
//     <h2 style={{ fontWeight: 'bold', color: 'blue' }}>COMPANY RECORDS</h2>
//       </div>

//       {loading && <div>Loading...</div>}
//       <div className="filters" style={{ display: 'flex', justifyContent: 'space-between' }}>
//       <div>
//         <h6>Sort By Date</h6>
//         <Select value={frequency} onChange={(values) => setFrequency(values)}>
//           <Select.Option value="7">LAST 1 Week</Select.Option>
//           <Select.Option value="30">LAST 1 Month</Select.Option>
//           <Select.Option value="365">LAST 1 year</Select.Option>
//           <Select.Option value="custom">Custom</Select.Option>
//         </Select>
//         {frequency === "custom" && (
//           <RangePicker
//             value={selectedDate}
//             onChange={(values) => setSelectedate(values)}
//           />
//         )}
//       </div>
//       <div>
//         <button
//           className="btn btn-primary"
//           onClick={() => setShowModal(true)}  icon={<PlusOutlined />}
//         >
//           Add New
//         </button>
//       </div>
//     </div>
    
        
//         <div className="content">
//             <Table columns={columns} dataSource={allcompany} />
//         </div>
//         <Modal
//           title={editable ? "Edit Company" : "Add Company"}
//           open={showModal}
//           onCancel={() => setShowModal(false)}
//           footer={null}
//         >
//           <Form
//             layout="vertical"
//             onFinish={handleSubmit}
//             initialValues={editable}
//           >
//             <Form.Item label="Company Name*" name="CompanyName" rules={[{ required: true, message: 'Please input company name' }]}>
//               <Input type="text" />
//             </Form.Item>
//             <Form.Item label="Date" name="date">
//               <DatePicker style={{ width: '100%' }} />
//             </Form.Item>
//             <Form.Item label="CTC" name="CTC" rules={[{ required: true, message: 'Please input CTC' }]}>
//               <Input type="text" />
//             </Form.Item>
//             <Form.Item label="Description" name="Description">
//               <Input type="text" />
//             </Form.Item>
//             <div className="d-flex justify-content-end">
//               <button type="submit" className="btn btn-primary">
//                 {" "}
//                 SAVE
//               </button>
//             </div>
//           </Form>
//         </Modal>
//       </>
//     );
// };
// export default Companyhome;








// UnorderedListOutlined,
import React, { useState, useEffect } from "react";
import { Form, Input, message, Modal, Select, Table, DatePicker } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined ,
} from "@ant-design/icons";
import axios from "axios"; 
import moment from "moment";
const { RangePicker } = DatePicker;

const Companyhome = () => {
    const [showModal, setShowModal] = useState(false);
    const [allcompany, setAllcompany] = useState([]);
      const [loading, setLoading] = useState(false);
    const [frequency, setFrequency] = useState("7");
    const [selectedDate, setSelectedate] = useState([]);
    const [editable, setEditable] = useState(null);
  
    //table data
    // const columns = [
    //   {
    //     title: "Date",
    //     dataIndex: "date",
    //     render: (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>,
    //   },
    //   {
    //     title: "COMPANYNAME",
    //     dataIndex: "CompanyName",
    //   },
    //   {
    //     title: "CTC",
    //     dataIndex: "CTC",
    //   },
    //   {
    //     title: "Description",
    //     dataIndex: "Description",
    //   },
    //   {
    //     title: "Actions",
    //     render: (text, record) => (
    //       <div>
    //         <EditOutlined
    //           onClick={() => {
    //             setEditable(record);
    //             setShowModal(true);
    //           }}
    //         />
    //         <DeleteOutlined
    //           className="mx-2"
    //           onClick={() => {
    //             handleDelete(record);
    //           }}
    //         />
    //       </div>
    //     ),
    //   },
    // ];
  
    const columns = [
      {
        title: "Date",
        dataIndex: "date",
        key: "date",
        render: (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>,
      },
      {
        title: "COMPANYNAME",
        dataIndex: "CompanyName",
        key: "companyName",
      },
      {
        title: "CTC",
        dataIndex: "CTC",
        key: "ctc",
      },
      
      {
        title: "Tenth",
        dataIndex: "Tenth",
        key: "Tenth",
      },
      {
        title: "Twelth",
        dataIndex: "Twelth",
        key: "Twelth",
      },
      {
        title: "Graduation",
        dataIndex: "Graduation",
        key: "Graduation",
      },
      {
        title: "Cgpa",
        dataIndex: "Cgpa",
        key: "Cgpa",
      },
      {
        title: "Description",
        dataIndex: "Description",
        key: "Description",
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
    useEffect(() => {
      const getAllcompany = async () => {
        try {
          const user = JSON.parse(localStorage.getItem("user"));
          setLoading(true);
          const res = await axios.post("/company/get-company", {
            userid: user._id,
            frequency,
            selectedDate,
          });
          setAllcompany(res.data);
          setLoading(false);
        } catch (error) {
          message.error("Ftech Issue With company");
        }
      };
      getAllcompany();
    }, [frequency, selectedDate, setAllcompany]);
  
    //delete handler
    const handleDelete = async (record) => {
      try {
        setLoading(true);
        await axios.post("company/delete-company", {
          transacationId: record._id,
        });
        setLoading(false);
        message.success("company Deleted!");
      } catch (error) {
        setLoading(false);
        console.log(error);
        message.error("unable to delete");
      }
    };
  
    // form handling
    const handleSubmit = async (values) => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        setLoading(true);
        if (editable) {
          await axios.post("company/edit-company", {
            payload: {
              ...values,
              userId: user._id,
            },
            transacationId: editable._id,
          });
          setLoading(false);
          message.success("company Updated Successfully");
        } else {
          await axios.post("company/add-company", {
            ...values,
            userid: user._id,
          });
          setLoading(false);
          message.success("company Added Successfully");
        }
        setShowModal(false);
        setEditable(null);
      } catch (error) {
        setLoading(false);
        message.error("please fill all fields");
      }
    };
  
    return (
      <>
      <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontWeight: 'bold', color: 'blue' }}>COMPANY RECORDS</h2>
      </div>
      {loading}
        <div className="filters" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <h6>Select Frequency</h6>
            <Select value={frequency} onChange={(values) => setFrequency(values)}>
              <Select.Option value="7">LAST 1 Week</Select.Option>
              <Select.Option value="30">LAST 1 Month</Select.Option>
              <Select.Option value="365">LAST 1 year</Select.Option>
              <Select.Option value="custom">custom</Select.Option>
            </Select>
            {frequency === "custom" && (
              <RangePicker
                value={selectedDate}
                onChange={(values) => setSelectedate(values)}
              />
            )}
          </div>
          <div>
            <button
              className="btn btn-primary Buttonstyle"
              onClick={() => setShowModal(true)}
            >
            {<PlusOutlined />}   Add New
            </button>
          </div>
        </div>
        <div className="content">
            <Table columns={columns} dataSource={allcompany} />
        </div>
        <Modal
          title={editable ? "Edit company" : "Add company"}
          open={showModal}
          onCancel={() => setShowModal(false)}
          footer={false}
        >
          <Form
            layout="vertical"
            onFinish={handleSubmit}
            initialValues={editable}
          >
            <Form.Item label="COMPANYNAME" name="CompanyName">
              <Input type="text" required />
            </Form.Item>
            <Form.Item label="Date" name="date">
              <Input type="date" />
            </Form.Item>
            <Form.Item label="CTC" name="CTC">
              <Input type="text" required />
            </Form.Item>
            <Form.Item label="Tenth" name="Tenth">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Twelth" name="Twelth">
          <Input type="text" />
        </Form.Item>
        <Form.Item label="Graduation" name="Graduation">
        <Input type="text"/>
      </Form.Item>
      <Form.Item label="Cgpa" name="Cgpa">
      <Input type="text" required />
    </Form.Item>
            <Form.Item label="Description" name="Description">
              <Input type="text" />
            </Form.Item>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">
                {" "}
                SAVE
              </button>
            </div>
          </Form>
        </Modal>
      </>
    );
};

export default Companyhome;
