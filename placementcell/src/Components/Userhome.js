
// import Layout from "./Layout/Layout";

// const UserHome = () => {
//   return (
//     <div>
//       <h1>Welcome to User Panel</h1>
//       <Layout /> {/* Rendering the Layout */}
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
//         <button style={{ marginRight: '10px', padding: '10px 20px', fontSize: '16px', borderRadius: '5px', backgroundColor: '#28a745', color: '#fff', border: 'none', cursor: 'pointer' }}>View Profile</button> {/* View Profile Button */}
//         <button style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '5px', backgroundColor: '#28a745', color: '#fff', border: 'none', cursor: 'pointer' }}>Contact</button> {/* Contact Button */}
//       </div>
//     </div>
//   );
// };

// export default UserHome;


//  // <span style={{ fontSize: '24px', marginRight: '10px' }}>🔔</span> {/* Notification sign */}

//  // components/UserHome.js
//  import Layout from "./Layout/Layout";
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const UserHome = () => {
//   const [studentDetails, setStudentDetails] = useState(null);

//   useEffect(() => {
//     const fetchStudentDetails = async () => {
//       try {
//         const user = JSON.parse(localStorage.getItem("user"));
//         const response = await axios.get(`/student-details/${user.Email}`);
//         setStudentDetails(response.data.student);
//       } catch (error) {
//         console.error('Error fetching student details:', error);
//       }
//     };

//     fetchStudentDetails();
//   }, []);

//   return (
//     <div>
// <Layout />
//       {studentDetails && (
//         <div>
//           <h1>Student Details:</h1>
//           <p>Name: {studentDetails.Name}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserHome;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from "./Layout/Layout";

const UserHome = () => {
  const [studentDetails, setStudentDetails] = useState(null);

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const response = await axios.get(`/student-details/${user.Email}`); // Changed to user.email
        setStudentDetails(response.data.student);
      } catch (error) {
        console.error('Error fetching student details:', error);
      }
    };

    fetchStudentDetails();
  }, []);

  return (
    <div>
      <Layout />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
        <button style={{ marginRight: '10px', padding: '10px 20px', fontSize: '16px', borderRadius: '5px', backgroundColor: '#28a745', color: '#fff', border: 'none', cursor: 'pointer' }}>View Profile</button> {/* View Profile Button */}
        <button style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '5px', backgroundColor: '#28a745', color: '#fff', border: 'none', cursor: 'pointer' }}>Contact</button> {/* Contact Button */}
      </div>
      {studentDetails && (
        <div>
          <h1>Student Details:</h1>
          <p>Name: {studentDetails.Name}</p>
          <p>Enrollment: {studentDetails.Enrollment}</p>
          <p>Email: {studentDetails.Email}</p>
          <p>Gender: {studentDetails.Gender}</p>
          <p> Mob: {studentDetails.Mob}</p>
          <p>Branch: {studentDetails.Branch}</p>
          <p> Address: {studentDetails.Address}</p>
          <p>Tenth: {studentDetails.Tenth}</p>
          <p>Twelth: {studentDetails.Twelth}</p>
          <p>Cgpa: {studentDetails.Cgpa}</p>
          <p>date: {studentDetails.date}</p>
          <p>Dob: {studentDetails.Dob}</p>
          <p>Status: {studentDetails.Status}</p>
         

        </div>
      )}
    </div>
  );
};

export default UserHome;
