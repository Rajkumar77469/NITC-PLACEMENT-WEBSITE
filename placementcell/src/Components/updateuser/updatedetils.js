// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const UpdateDetails = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });
//   const [updateSuccess, setUpdateSuccess] = useState(false);

//   useEffect(() => {
    
//     axios.put("/users/findandupdate")
//       .then(response => {
//         const { Name, Email } = response.data;
//         setFormData({ name: Name, email: Email });
//       })
//       .catch(error => {
//         console.error("Error fetching user details:", error);
//       });
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     axios.put("/users/updateuserdetilas", formData)
//       .then(response => {
//         console.log("User details updated successfully");
//         setUpdateSuccess(true);
//       })
//       .catch(error => {
//         console.error("Error updating user details:", error);
//       });
//   };

//   return (
//     <div>
//       {updateSuccess && <p>User details updated successfully!</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">Update</button>
//       </form>
//     </div>
//   );
// };

// export default UpdateDetails;import React, { useState, useEffect } from "react";import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './../pages/Navbar';
import Layout from './../Layout/Layout';
import { useState,useEffect } from "react";


const UpdateDetails = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: ""
  });
  const [updateSuccess, setUpdateSuccess] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user && user._id; // Assuming user ID is stored in _id field
    if (userId) {
      axios.get(`/students/findandupdate-detials?userId=${userId}`)
        .then(response => {
          const { Name, Email } = response.data;
          setFormData({ Name: Name, Email: Email });
        })
        .catch(error => {
          console.error("Error fetching user details:", error);
        });
    }
  }, []);

  const handleChange = (e) => {
    // Update form data as user types
    const { Name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [Name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId'); // Retrieve user ID from local storage
    axios.put(`/students/updateuserdetilas?userId=${userId}`, formData)
      .then(response => {
        console.log("User details updated successfully");
        toast.success("User details updated successfully");
        setUpdateSuccess(true);
      })
      .catch(error => {
        console.error("Error updating user details:", error);
        toast.error("Error updating user details");
      });
  };

  return (
    <Layout>
      <Navbar/>
      <ToastContainer />
      {updateSuccess && <p>User details updated successfully!</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </Layout>
  );
};

export default UpdateDetails;
