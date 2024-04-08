
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


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Layout from "./Layout/Layout";

// const UserHome = () => {
//   const [studentDetails, setStudentDetails] = useState(null);

//   useEffect(() => {
//     const fetchStudentDetails = async () => {
//       try {
//         const user = JSON.parse(localStorage.getItem("user"));
//         const response = await axios.get(`/student-details/${user.Email}`); // Changed to user.email
//         setStudentDetails(response.data.student);
//       } catch (error) {
//         console.error('Error fetching student details:', error);
//       }
//     };

//     fetchStudentDetails();
//   }, []);

//   return (
//     <div>
//       <Layout />
       
//       {studentDetails && (
//         <div>
//         <div>
//         <p className='placementstatusheading'>STATUS</p>
//         <h3 className='placementstatus'>
//         {studentDetails.Status.toUpperCase()}</h3>
//        </div>
//         <div className='detils'>
//           Name: {studentDetails.Name}
//           <br></br>
//           Enrollment: {studentDetails.Enrollment}
//           <br></br>
//           Email: {studentDetails.Email}
//           <br></br>
//           Gender: {studentDetails.Gender}
//           <br></br>
//            Mob: {studentDetails.Mob}
//            <br></br>
//           Branch: {studentDetails.Branch}
//           <br></br>
//            Address: {studentDetails.Address}
//            <br></br>
//           Tenth: {studentDetails.Tenth}
//           <br></br>
//           Twelth: {studentDetails.Twelth}
//           <br></br>
//           Cgpa: {studentDetails.Cgpa}
          
         

//         </div>
//         </div>
//       )}
//       {!studentDetails &&
//       (
//         <div>
//           <h1>You are not registerd for upcomming placement drive please contact Admin</h1>
//             </div>
//       )}

//     </div>
//   );
// };

// export default UserHome;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Layout from "./Layout/Layout";

// const UserHome = () => {
//   const [companyNames, setCompanyNames] = useState([]);


  //company
  // useEffect(() => {
  //   const fetchcompanyDetails = async () => {
  //     try {
  //       const response = await axios.get('/get-companyss'); // Changed to user.email
  //       setcompany(response.data.company);
  //     } catch (error) {
  //       console.error('Error fetching student details:', error);
  //     }
  //   };

  //   fetchcompanyDetails();
  // }, []);
//   const fetchCompanyNames = async () => {
//     try {
//       const response = await axios.get('/company/student-company');
//       const { companyNames } = response.data;
//       setCompanyNames(companyNames);
//     } catch (error) {
//       console.error('Error fetching company names:', error);
//     }
//   };
//   useEffect(() => {
//     fetchCompanyNames();
//   },);

//   // {companyNames.map((name, index) => (
//   //   <h1>{name}</h1>
//   // ))}
//   return (
//     <div>
//       <Layout />
      

//       {companyNames.map((company, index) => (
//         <div key={index}>
//           <h1>{company.CompanyName}</h1>
//           <h1>{company.CTC}</h1>
//           <h1>{company.Description}</h1>
//           {/* Add more fields here as needed */}
//         </div>
//       ))}
      
//       {!companyNames &&
//       (
//         <div>
//           <h1>no company found</h1>
//             </div>
//       )}

//     </div>
//   );
// };

// export default UserHome;

// <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
// <button style={{ marginRight: '10px', padding: '10px 20px', fontSize: '16px', borderRadius: '5px', backgroundColor: '#28a745', color: '#fff', border: 'none', cursor: 'pointer' }}>View Profile</button> {/* View Profile Button */}
// <button style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '5px', backgroundColor: '#28a745', color: '#fff', border: 'none', cursor: 'pointer' }}>Contact</button> {/* Contact Button */}
// </div>import React, { useState, useEffect } from 'react';

//////demo

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Layout from './Layout/Layout';

// const UserHome = () => {
//   const [companyNames, setCompanyNames] = useState([]);

//   useEffect(() => {
//     const fetchCompanyNames = async () => {
//       try {
//         const response = await axios.get('/company/student-company');
//         const { companyNames } = response.data; // Corrected from companyName to companyNames
//         setCompanyNames(companyNames);
//       } catch (error) {
//         console.error('Error fetching company names:', error);
//       }
//     };

//     fetchCompanyNames();
//   }, []);

//   return (
//     <div>
//       <Layout />
//       {companyNames && companyNames.map((name, index) => (
//         <h1 key={index}>{name}</h1>
//       ))}
//     </div>
//   );
// };

// export default UserHome;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Layout from './Layout/Layout';

// const UserHome = () => {
//   const [companyNamespura, setCompanyNamespura] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/company/student-company');
//         const { companys } = response.data;
//         const companyNamespura = companys.map(company => ({
//           CompanyName: company.CompanyName,
//           CTC: company.CTC,
//           Description: company.Description,
//           Date: company.date,
//           Tenth: company.Tenth,
//           Twelth: company.Twelth,
//           Graduation: company.Graduation,
//           Cgpa: company.Cgpa,
//           // Add more fields here as needed
//         }));
//         setCompanyNamespura(companyNamespura);
//       } catch (error) {
//         console.error('Error fetching company details:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <Layout />
//       {companyNamespura.map((company, index) => (
//         <div key={index}>
//           <h1>{company.CompanyName}</h1>
//           <p>CTC: {company.CTC}</p>
//           <p>Description: {company.Description}</p>
//           <p>Date: {company.Date}</p>
//           <p>Tenth: {company.Tenth}</p>
//           <p>Twelth: {company.Twelth}</p>
//           <p>Graduation: {company.Graduation}</p>
//           <p>CGPA: {company.Cgpa}</p>
//           {/* Render more fields here as needed */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default UserHome;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Layout from './Layout/Layout';

// const UserHome = () => {
//   const [companyNamespura, setCompanyNamespura] = useState([]);
//   const [studentDetails, setStudentDetails] = useState(null);

//     useEffect(() => {
//     const fetchStudentDetails = async () => {
//       try {
//         const user = JSON.parse(localStorage.getItem("user"));
//         const response = await axios.get(`/users/student-details/${user.Email}`);
//         setStudentDetails(response.data.student);
//       } catch (error) {
//         console.error('Error fetching student details:', error);
//       }
//     };

//     fetchStudentDetails();
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/company/student-company');
//         const { companys } = response.data;
//         const companyNamespura = companys.map(company => ({
//           CompanyName: company.CompanyName,
//           CTC: company.CTC,
//           Description: company.Description,
//           Date: company.date,
//           Tenth: company.Tenth,
//           Twelth: company.Twelth,
//           Graduation: company.Graduation,
//           Cgpa: company.Cgpa,
//           // Add more fields here as needed
//         }));
//         setCompanyNamespura(companyNamespura);
//       } catch (error) {
//         console.error('Error fetching company details:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//     <Layout />
//       {studentDetails && (
//           <div>
//           <div>
//           <p className='placementstatusheading'>STATUS</p>
//           <h3 className='placementstatus'>
//           {studentDetails.Status.toUpperCase()}</h3>
//          </div>
//           <div className='detils'>
//             Name: {studentDetails.Name}
//             <br></br>
//             Enrollment: {studentDetails.Enrollment}
//             <br></br>
//             Email: {studentDetails.Email}
//             <br></br>
//             Gender: {studentDetails.Gender}
//             <br></br>
//              Mob: {studentDetails.Mob}
//              <br></br>
//             Branch: {studentDetails.Branch}
//             <br></br>
//              Address: {studentDetails.Address}
//              <br></br>
//             Tenth: {studentDetails.Tenth}
//             <br></br>
//             Twelth: {studentDetails.Twelth}
//             <br></br>
//             Cgpa: {studentDetails.Cgpa}
            
           
  
//           </div>
//           </div>
//         )}
//         {!studentDetails &&
//         (
//           <div>
//             <h1>You are not registerd for upcomming placement drive please contact Admin</h1>
//               </div>
//         )}
     
//       {companyNamespura.map((company, index) => (
//         <div key={index}>
//           <h1>{company.CompanyName}</h1>
//           <p>CTC: {company.CTC}</p>
//           <p>Description: {company.Description}</p>
//           <p>Date: {company.Date}</p>
//           <p>Tenth: {company.Tenth}</p>
//           <p>Twelth: {company.Twelth}</p>
//           <p>Graduation: {company.Graduation}</p>
//           <p>CGPA: {company.Cgpa}</p>
//           {/* Render more fields here as needed */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default UserHome;









// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Layout from './Layout/Layout';

// const UserHome = () => {
//   const [studentDetails, setStudentDetails] = useState(null);

//   //company part
//     const [companyNamespura, setCompanyNamespura] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/company/student-company');
//         const { companys } = response.data;
//         const companyNamespura = companys.map(company => ({
//           CompanyName: company.CompanyName,
//           CTC: company.CTC,
//           Description: company.Description,
//           Date: company.date,
//           Tenth: company.Tenth,
//           Twelth: company.Twelth,
//           Graduation: company.Graduation,
//           Cgpa: company.Cgpa,
//           // Add more fields here as needed
//         }));
//         setCompanyNamespura(companyNamespura);
//       } catch (error) {
//         console.error('Error fetching company details:', error);
//       }
//     };

//     fetchData();
//   }, []);


//   useEffect(() => {
//     const fetchStudentDetails = async () => {
//       try {
//         const user = JSON.parse(localStorage.getItem('user'));
//         const response = await axios.get(`/users/student-details/${user.Email}`);
//         console.log(response)
//         setStudentDetails(response.data.student);
//       } catch (error) {
//         console.error('Error fetching student details:', error);
        
//       }
//     };

//     fetchStudentDetails();
//   }, []);

//   return (
//     <div>
//       <Layout />
       
//       {studentDetails && (
//         <div>
//         <div>
//         <p className='placementstatusheading'>STATUS</p>
//         <h3 className='placementstatus'>
//         {studentDetails.Status.toUpperCase()}</h3>
//        </div>
//         <div className='detils'>
//           Name: {studentDetails.Name}
//           <br></br>
//           Enrollment: {studentDetails.Enrollment}
//           <br></br>
//           Email: {studentDetails.Email}
//           <br></br>
//           Gender: {studentDetails.Gender}
//           <br></br>
//            Mob: {studentDetails.Mob}
//            <br></br>
//           Branch: {studentDetails.Branch}
//           <br></br>
//            Address: {studentDetails.Address}
//            <br></br>
//           Tenth: {studentDetails.Tenth}
//           <br></br>
//           Twelth: {studentDetails.Twelth}
//           <br></br>
//           Cgpa: {studentDetails.Cgpa}
//         </div>
//         </div>
//       )}
//       {!studentDetails &&
//       (
//         <div>
//           <h1>You are not registerd for upcomming placement drive please contact Admin</h1>
//             </div>
//       )}

//           <div>
//       {companyNamespura.map((company, index) => (
//         <div key={index}>
//           <h1>{company.CompanyName}</h1>
//           <p>CTC: {company.CTC}</p>
//           <p>Description: {company.Description}</p>
//           <p>Date: {company.Date}</p>
//           <p>Tenth: {company.Tenth}</p>
//           <p>Twelth: {company.Twelth}</p>
//           <p>Graduation: {company.Graduation}</p>
//           <p>CGPA: {company.Cgpa}</p>
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// };

// export default UserHome;


//main code---------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Layout from './Layout/Layout';

// const UserHome = () => {
//   const [studentDetails, setStudentDetails] = useState(null);
//   const [eligibleCompanies, setEligibleCompanies] = useState([]);

//   useEffect(() => {
//     const fetchStudentDetails = async () => {
//       try {
//         const user = JSON.parse(localStorage.getItem('user'));
//         const response = await axios.get(`/users/student-details/${user.Email}`);
//         setStudentDetails(response.data.student);
//       } catch (error) {
//         console.error('Error fetching student details:', error);
//       }
//     };

//     fetchStudentDetails();
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/company/student-company');
//         const { companys } = response.data;
//         const filteredCompanies = companys.filter(company => {
//           return (
//             company.Tenth <= studentDetails.Tenth &&
//             company.Twelth <= studentDetails.Twelth &&
//             company.Graduation <= studentDetails.Graduation &&
//             company.Cgpa <= studentDetails.Cgpa
//           );
//         });
//         setEligibleCompanies(filteredCompanies);
//       } catch (error) {
//         console.error('Error fetching company details:', error);
//       }
//     };

//     if (studentDetails) {
//       fetchData();
//     }
//   }, [studentDetails]);

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
//   };

//   return (
//     <div>
//       <Layout />
//       {studentDetails ? (
//         <div>
//           <div>
//             <p className='placementstatusheading'>STATUS</p>
//             <h3 className='placementstatus'>{studentDetails.Status.toUpperCase()}</h3>
//           </div>
//           <div className='detils'>
//             Name: {studentDetails.Name}
//             <br />
//             Enrollment: {studentDetails.Enrollment}
//             <br />
//             Email: {studentDetails.Email}
//             <br />
//             Gender: {studentDetails.Gender}
//             <br />
//             Mob: {studentDetails.Mob}
//             <br />
//             Branch: {studentDetails.Branch}
//             <br />
//             Address: {studentDetails.Address}
//             <br />
//             Tenth: {studentDetails.Tenth}
//             <br />
//             Twelth: {studentDetails.Twelth}
//             <br />
//             Cgpa: {studentDetails.Cgpa}
//           </div>
//         </div>
//       ) : (
//         <div>
//           <h1>You are not registered for the upcoming placement drive. Please contact Admin.</h1>
//         </div>
//       )}

//       <div>
//         {eligibleCompanies.map((company, index) => (
//           <div key={index}>
//             <h1>{company.CompanyName}</h1>
//             <p>CTC: {company.CTC}</p>
//             <p>Description: {company.Description}</p>
//             <p>Date: {formatDate(company.Date)}</p>
//             <p>Tenth: {company.Tenth}</p>
//             <p>Twelth: {company.Twelth}</p>
//             <p>Graduation: {company.Graduation}</p>
//             <p>CGPA: {company.Cgpa}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UserHome;


//test code 

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Layout from './Layout/Layout';

// const UserHome = () => {
//   const [studentDetails, setStudentDetails] = useState(null);
//   const [eligibleCompanies, setEligibleCompanies] = useState([]);

//   useEffect(() => {
//     const fetchStudentDetails = async () => {
//       try {
//         const user = JSON.parse(localStorage.getItem('user'));
//         const response = await axios.get(`/users/student-details/${user.Email}`);
//         setStudentDetails(response.data.student);
//       } catch (error) {
//         console.error('Error fetching student details:', error);
//       }
//     };

//     fetchStudentDetails();
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/company/student-company');
//         const { companys } = response.data;
//         const filteredCompanies = companys.filter(company => {
//           return (
//             company.Tenth <= studentDetails.Tenth &&
//             company.Twelth <= studentDetails.Twelth &&
//             company.Graduation <= studentDetails.Graduation &&
//             company.Cgpa <= studentDetails.Cgpa
//           );
//         });
//         setEligibleCompanies(filteredCompanies);
//       } catch (error) {
//         console.error('Error fetching company details:', error);
//       }
//     };

//     if (studentDetails) {
//       fetchData();
//     }
//   }, [studentDetails]);

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
//   };

//   return (
//     <div className="user-home">
//       <Layout />
//       {studentDetails ? (
//         <div className="student-details">
//           <div>
//             <p className='placementstatusheading'>STATUS</p>
//             <h3 className='placementstatus'>{studentDetails.Status.toUpperCase()}</h3>
//           </div>
//           <div className='details'>
//             <p><span className="label">Name:</span> {studentDetails.Name}</p>
//             <p><span className="label">Enrollment:</span> {studentDetails.Enrollment}</p>
//             <p><span className="label">Email:</span> {studentDetails.Email}</p>
//             <p><span className="label">Gender:</span> {studentDetails.Gender}</p>
//             <p><span className="label">Mob:</span> {studentDetails.Mob}</p>
//             <p><span className="label">Branch:</span> {studentDetails.Branch}</p>
//             <p><span className="label">Address:</span> {studentDetails.Address}</p>
//             <p><span className="label">Tenth:</span> {studentDetails.Tenth}</p>
//             <p><span className="label">Twelth:</span> {studentDetails.Twelth}</p>
//             <p><span className="label">Cgpa:</span> {studentDetails.Cgpa}</p>
//           </div>
//         </div>
//       ) : (
//         <div>
//           <h1>You are not registered for the upcoming placement drive. Please contact Admin.</h1>
//         </div>
//       )}
//       <div className="companies">
//       {eligibleCompanies.map((company, index) => (
//         <div key={index} className="company">
//           <h1>{company.CompanyName}</h1>
//           <p><span className="label">CTC:</span> {company.CTC}</p>
//           <p><span className="label">Description:</span> {company.Description}</p>
//           <p><span className="label">Date:</span> {formatDate(company.Date)}</p>
//           <p><span className="label">Tenth:</span> {company.Tenth}</p>
//           <p><span className="label">Twelth:</span> {company.Twelth}</p>
//           <p><span className="label">Graduation:</span> {company.Graduation}</p>
//           <p><span className="label">CGPA:</span> {company.Cgpa}</p>
//         </div>
//       ))}
//     </div>
    
//     </div>
//   );
// };

// export default UserHome;



//double testing with css --------------------------------------------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Layout from './Layout/Layout';


// const UserHome = () => {
//   const [studentDetails, setStudentDetails] = useState(null);
//   const [eligibleCompanies, setEligibleCompanies] = useState([]);

//   useEffect(() => {
//     const fetchStudentDetails = async () => {
//       try {
//         const user = JSON.parse(localStorage.getItem('user'));
//         const response = await axios.get(`/users/student-details/${user.Email}`);
//         setStudentDetails(response.data.student);
//       } catch (error) {
//         console.error('Error fetching student details:', error);
//       }
//     };

//     fetchStudentDetails();
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/company/student-company');
//         const { companys } = response.data;
//         const filteredCompanies = companys.filter(company => {
//           return (
//             company.Tenth <= studentDetails.Tenth &&
//             company.Twelth <= studentDetails.Twelth &&
//             company.Graduation <= studentDetails.Graduation &&
//             company.Cgpa <= studentDetails.Cgpa
//           );
//         });
//         setEligibleCompanies(filteredCompanies);
//       } catch (error) {
//         console.error('Error fetching company details:', error);
//       }
//     };

//     if (studentDetails) {
//       fetchData();
//     }
//   }, [studentDetails]);

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
//   };

//   return (
//     <div className="user-home">
//       <Layout />
//       {studentDetails ? (
//         <div className="student-details">
//           <div>
//             <p className='status-heading'>Status</p>
//             <h3 className='status'>{studentDetails.Status.toUpperCase()}</h3>
//           </div>
//           <div className='details'>
//             <p className="detail"><span className="label">Name:</span> {studentDetails.Name}</p>
//             <p className="detail"><span className="label">Enrollment:</span> {studentDetails.Enrollment}</p>
//             <p className="detail"><span className="label">Email:</span> {studentDetails.Email}</p>
//             <p className="detail"><span className="label">Gender:</span> {studentDetails.Gender}</p>
//             <p className="detail"><span className="label">Mob:</span> {studentDetails.Mob}</p>
//             <p className="detail"><span className="label">Branch:</span> {studentDetails.Branch}</p>
//             <p className="detail"><span className="label">Address:</span> {studentDetails.Address}</p>
//             <p className="detail"><span className="label">Tenth:</span> {studentDetails.Tenth}</p>
//             <p className="detail"><span className="label">Twelfth:</span> {studentDetails.Twelth}</p>
//             <p className="detail"><span className="label">CGPA:</span> {studentDetails.Cgpa}</p>
//           </div>
//         </div>
//       ) : (
//         <div>
//           <h1>You are not registered for the upcoming placement drive. Please contact Admin.</h1>
//         </div>
//       )}
//       <div className="companies">
//       {eligibleCompanies.map((company, index) => (
//         <div key={index} className="company">
//           <h1>{company.CompanyName}</h1>
//           <p className="detail"><span className="label">CTC:</span> {company.CTC}</p>
//           <p className="detail"><span className="label">Description:</span> {company.Description}</p>
//           <p className="detail"><span className="label">Date:</span> {formatDate(company.Date)}</p>
//         </div>
//       ))}
//     </div>
    
//     </div>
//   );
// };

// export default UserHome;


// //again test with good css 
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Layout from './Layout/Layout';


// const UserHome = () => {
//   const [studentDetails, setStudentDetails] = useState(null);
//   const [eligibleCompanies, setEligibleCompanies] = useState([]);

//   useEffect(() => {
//     const fetchStudentDetails = async () => {
//       try {
//         const user = JSON.parse(localStorage.getItem('user'));
//         const response = await axios.get(`/users/student-details/${user.Email}`);
//         setStudentDetails(response.data.student);
//       } catch (error) {
//         console.error('Error fetching student details:', error);
//       }
//     };

//     fetchStudentDetails();
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/company/student-company');
//         const { companys } = response.data;
//         const filteredCompanies = companys.filter(company => {
//           return (
//             company.Tenth <= studentDetails.Tenth &&
//             company.Twelth <= studentDetails.Twelth &&
//             company.Graduation <= studentDetails.Graduation &&
//             company.Cgpa <= studentDetails.Cgpa
//           );
//         });
//         setEligibleCompanies(filteredCompanies);
//       } catch (error) {
//         console.error('Error fetching company details:', error);
//       }
//     };

//     if (studentDetails) {
//       fetchData();
//     }
//   }, [studentDetails]);

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
//   };

//   return (
//     <div className="user-home">
//       <Layout />
//       <div className="content">
//         <div className="student-details">
//           {studentDetails ? (
//             <>
//               <div className="details">
//                 <p><span className="label">Name:</span> {studentDetails.Name}</p>
//                 <p><span className="label">Enrollment:</span> {studentDetails.Enrollment}</p>
//                 <p><span className="label">Email:</span> {studentDetails.Email}</p>
//                 <p><span className="label">Gender:</span> {studentDetails.Gender}</p>
//                 <p><span className="label">Mob:</span> {studentDetails.Mob}</p>
//                 <p><span className="label">Branch:</span> {studentDetails.Branch}</p>
//                 <p><span className="label">Address:</span> {studentDetails.Address}</p>
//                 <p><span className="label">Tenth:</span> {studentDetails.Tenth}</p>
//                 <p><span className="label">Twelfth:</span> {studentDetails.Twelth}</p>
//                 <p><span className="label">Cgpa:</span> {studentDetails.Cgpa}</p>
//               </div>
//               <div className='status'>
//                 <p><span className='label'>STATUS:</span> {studentDetails.Status.toUpperCase()}</p>
//               </div>
//             </>
//           ) : (
//             <div>
//               <h1>You are not registered for the upcoming placement drive. Please contact Admin.</h1>
//             </div>
//           )}
//         </div>
//         <div className="companies">
//           {eligibleCompanies.map((company, index) => (
//             <div key={index} className="company">
//               <h1>{company.CompanyName}</h1>
//               <p><span className="label">CTC:</span> {company.CTC}</p>
//               <p><span className="label">Description:</span> {company.Description}</p>
//               <p><span className="label">Date:</span> {formatDate(company.Date)}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserHome;


// apply button with student data saved in file ----------------------------------------------------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Layout from './Layout/Layout';

// const UserHome = () => {
//   const [studentDetails, setStudentDetails] = useState(null);
//   const [eligibleCompanies, setEligibleCompanies] = useState([]);
//   const [appliedCompanies, setAppliedCompanies] = useState([]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('/company/student-company');
//       const { companys } = response.data;
//       const filteredCompanies = companys.filter(company => {
//         return (
//           company.Tenth <= studentDetails.Tenth &&
//           company.Twelth <= studentDetails.Twelth &&
//           company.Graduation <= studentDetails.Graduation &&
//           company.Cgpa <= studentDetails.Cgpa
//         );
//       });
//       setEligibleCompanies(filteredCompanies);
//     } catch (error) {
//       console.error('Error fetching company details:', error);
//     }
//   };

//   useEffect(() => {
//     const fetchStudentDetails = async () => {
//       try {
//         const user = JSON.parse(localStorage.getItem('user'));
//         const response = await axios.get(`/users/student-details/${user.Email}`);
//         setStudentDetails(response.data.student);
//       } catch (error) {
//         console.error('Error fetching student details:', error);
//       }
//     };

//     fetchStudentDetails();
//   }, []);

//   useEffect(() => {
//     if (studentDetails) {
//       fetchData();
//     }
//   }, [studentDetails]);

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
//   };

//   const applyToCompany = async (companyName) => {
//     try {
//       // Disable the button immediately upon clicking
//       setAppliedCompanies([...appliedCompanies, companyName]);
      
//       // Perform asynchronous operations
//       await axios.post('/users/appliedcompany', { companyName });
//       const dataToSave = { companyName, ...studentDetails };
//       await axios.post('/users/save-to-excel', dataToSave);

//       // After completion, update the state
//       fetchData();
//     } catch (error) {
//       console.error('Error applying to company:', error);
//     }
//   };

//   return (
//     <div className="user-home">
//       <Layout />
//       <div className="content">
//         <div className="student-details">
//           {studentDetails ? (
//             <>
//               <div className="details">
//                 <p><span className="label">Name:</span> {studentDetails.Name}</p>
//                 <p><span className="label">Enrollment:</span> {studentDetails.Enrollment}</p>
//                 <p><span className="label">Email:</span> {studentDetails.Email}</p>
//                 <p><span className="label">Gender:</span> {studentDetails.Gender}</p>
//                 <p><span className="label">Mob:</span> {studentDetails.Mob}</p>
//                 <p><span className="label">Branch:</span> {studentDetails.Branch}</p>
//                 <p><span className="label">Address:</span> {studentDetails.Address}</p>
//                 <p><span className="label">Tenth:</span> {studentDetails.Tenth}</p>
//                 <p><span className="label">Twelfth:</span> {studentDetails.Twelth}</p>
//                 <p><span className="label">Cgpa:</span> {studentDetails.Cgpa}</p>
//               </div>
//               <div className='status'>
//                 <p><span className='label'>STATUS:</span> {studentDetails.Status.toUpperCase()}</p>
//               </div>
//             </>
//           ) : (
//             <div>
//               <h1>You are not registered for the upcoming placement drive. Please contact Admin.</h1>
//             </div>
//           )}
//         </div>
//         <div className="companies">
//           {eligibleCompanies.map((company, index) => (
//             <div key={index} className="company">
//               <h1>{company.CompanyName}</h1>
//               <p><span className="label">CTC:</span> {company.CTC}</p>
//               <p><span className="label">Description:</span> {company.Description}</p>
//               <p><span className="label">Date:</span> {formatDate(company.Date)}</p>
//               {/* Disable the button if the company is already applied */}
//               <button
//                 onClick={() => applyToCompany(company.CompanyName)}
//                 disabled={appliedCompanies.includes(company.CompanyName)}
//               >
//                 {appliedCompanies.includes(company.CompanyName) ? 'Applied' : 'Apply'}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserHome;



////testing code 

// import React, { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';
// import Layout from './Layout/Layout';

// const UserHome = () => {
//   const [studentDetails, setStudentDetails] = useState(null);
//   const [eligibleCompanies, setEligibleCompanies] = useState([]);
//   const [appliedCompanies, setAppliedCompanies] = useState([]);

//   useEffect(() => {
//     // Retrieve applied companies from local storage on component mount
//     const storedAppliedCompanies = localStorage.getItem('appliedCompanies');
//     if (storedAppliedCompanies) {
//       setAppliedCompanies(JSON.parse(storedAppliedCompanies));
//     }
//   }, []);

//   const fetchData = useCallback(async () => {
//     try {
//       const response = await axios.get('/company/student-company');
//       const { companys } = response.data;
//       const filteredCompanies = companys.filter(company => {
//         return (
//           company.Tenth <= studentDetails.Tenth &&
//           company.Twelth <= studentDetails.Twelth &&
//           company.Graduation <= studentDetails.Graduation &&
//           company.Cgpa <= studentDetails.Cgpa
//         );
//       });
//       setEligibleCompanies(filteredCompanies);
//     } catch (error) {
//       console.error('Error fetching company details:', error);
//     }
//   }, [studentDetails]);

//   useEffect(() => {
//     const fetchStudentDetails = async () => {
//       try {
//         const user = JSON.parse(localStorage.getItem('user'));
//         const response = await axios.get(`/users/student-details/${user.Email}`);
//         setStudentDetails(response.data.student);
//       } catch (error) {
//         console.error('Error fetching student details:', error);
//       }
//     };

//     fetchStudentDetails();
//   }, []);

//   useEffect(() => {
//     if (studentDetails) {
//       fetchData();
//     }
//   }, [studentDetails, fetchData]);
  
//   useEffect(() => {
//     localStorage.setItem('appliedCompanies', JSON.stringify(appliedCompanies));
//   }, [appliedCompanies]);

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
//   };

//   const applyToCompany = async (companyName) => {
//     try {
//       setAppliedCompanies([...appliedCompanies, companyName]);
      
//       // Perform asynchronous operations
//       await axios.post('/users/appliedcompany', { companyName });
  
//       // Check if Excel sheet for this company exists
//       const response = await axios.get(`/users/excel-sheet/${companyName}`);
//       let sheetExists = true;
//       if (!response.data) {
//         sheetExists = false;
//       }
  
//       // Prepare data to save
//       const dataToSave = { companyName, ...studentDetails };
  
//       if (sheetExists) {
//         // Add data to existing sheet
//         await axios.post(`/users/add-to-excel/${companyName}`, dataToSave);
//       } else {
//         // Create new sheet and add data
//         await axios.post('/users/create-excel-sheet', { companyName });
//         await axios.post(`/users/add-to-excel/${companyName}`, dataToSave);
//       }
  
//       fetchData();
//     } catch (error) {
//       console.error('Error applying to company:', error);
//     }
//   };
  
//   return (
//     <div className="user-home">
//       <Layout />
//       <div className="content">
//         <div className="student-details">
//           {studentDetails ? (
//             <>
//               <div className="details">
//                 <p><span className="label">Name:</span> {studentDetails.Name}</p>
//                 <p><span className="label">Enrollment:</span> {studentDetails.Enrollment}</p>
//                 <p><span className="label">Email:</span> {studentDetails.Email}</p>
//                 <p><span className="label">Gender:</span> {studentDetails.Gender}</p>
//                 <p><span className="label">Mob:</span> {studentDetails.Mob}</p>
//                 <p><span className="label">Branch:</span> {studentDetails.Branch}</p>
//                 <p><span className="label">Address:</span> {studentDetails.Address}</p>
//                 <p><span className="label">Tenth:</span> {studentDetails.Tenth}</p>
//                 <p><span className="label">Twelfth:</span> {studentDetails.Twelth}</p>
//                 <p><span className="label">Cgpa:</span> {studentDetails.Cgpa}</p>
//               </div>
//               <div className='status'>
//                 <p><span className='label'>STATUS:</span> {studentDetails.Status.toUpperCase()}</p>
//               </div>
//             </>
//           ) : (
//             <div>
//               <h1>You are not registered for the upcoming placement drive. Please contact Admin.</h1>
//             </div>
//           )}
//         </div>
//         <div className="companies">
//           {eligibleCompanies.map((company, index) => (
//             <div key={index} className="company">
//               <h1>{company.CompanyName}</h1>
//               <p><span className="label">CTC:</span> {company.CTC}</p>
//               <p><span className="label">Description:</span> {company.Description}</p>
//               <p><span className="label">Date:</span> {formatDate(company.Date)}</p>
//               {/* Disable the button if the company is already applied */}
//               <button
//                 onClick={() => applyToCompany(company.CompanyName)}
//                 disabled={appliedCompanies.includes(company.CompanyName)}
//               >
//                 {appliedCompanies.includes(company.CompanyName) ? 'Applied' : 'Apply'}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserHome;


// //resume uploading testing

// import React, { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';
// import Layout from './Layout/Layout';

// const UserHome = () => {
//   const [studentDetails, setStudentDetails] = useState(null);
//   const [eligibleCompanies, setEligibleCompanies] = useState([]);
//   const [appliedCompanies, setAppliedCompanies] = useState([]);
//   const [resume, setResume] = useState(null); // New state for storing resume
//   const [resumeRequiredError, setResumeRequiredError] = useState(false); // New state for error message

//   useEffect(() => {
//     // Retrieve applied companies from local storage on component mount
//     const storedAppliedCompanies = localStorage.getItem('appliedCompanies');
//     if (storedAppliedCompanies) {
//       setAppliedCompanies(JSON.parse(storedAppliedCompanies));
//     }
//   }, []);

//   const fetchData = useCallback(async () => {
//     try {
//       const response = await axios.get('/company/student-company');
//       const { companys } = response.data;
//       const filteredCompanies = companys.filter(company => {
//         return (
//           company.Tenth <= studentDetails.Tenth &&
//           company.Twelth <= studentDetails.Twelth &&
//           company.Graduation <= studentDetails.Graduation &&
//           company.Cgpa <= studentDetails.Cgpa
//         );
//       });
//       setEligibleCompanies(filteredCompanies);
//     } catch (error) {
//       console.error('Error fetching company details:', error);
//     }
//   }, [studentDetails]);

//   useEffect(() => {
//     const fetchStudentDetails = async () => {
//       try {
//         const user = JSON.parse(localStorage.getItem('user'));
//         const response = await axios.get(`/users/student-details/${user.Email}`);
//         setStudentDetails(response.data.student);
//       } catch (error) {
//         console.error('Error fetching student details:', error);
//       }
//     };

//     fetchStudentDetails();
//   }, []);

//   useEffect(() => {
//     if (studentDetails) {
//       fetchData();
//     }
//   }, [studentDetails, fetchData]);
  
//   useEffect(() => {
//     localStorage.setItem('appliedCompanies', JSON.stringify(appliedCompanies));
//   }, [appliedCompanies]);

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
//   };

//   const handleResumeChange = (event) => {
//     // When the user selects a file, set the selected file to the state
//     const file = event.target.files[0];
//     setResume(file);
//   };

//   const applyToCompany = async (companyName) => {
//     try {
//       if (!resume) {
//         setResumeRequiredError(true);
//         return; // Stop further execution
//       }

//       setAppliedCompanies([...appliedCompanies, companyName]);
      
//       // Perform asynchronous operations
//       await axios.post('/users/appliedcompany', { companyName });
  
//       // Check if Excel sheet for this company exists
//       const response = await axios.get(`/users/excel-sheet/${companyName}`);
//       let sheetExists = true;
//       if (!response.data) {
//         sheetExists = false;
//       }
  
//       // Prepare data to save
//       const dataToSave = { companyName, ...studentDetails };
  
//       if (sheetExists) {
//         // Add data to existing sheet
//         await axios.post(`/users/add-to-excel/${companyName}`, dataToSave);
//       } else {
//         // Create new sheet and add data
//         await axios.post('/users/create-excel-sheet', { companyName });
//         await axios.post(`/users/add-to-excel/${companyName}`, dataToSave);
//       }

//       // If resume is selected, upload it
//       if (resume) {
//         const formData = new FormData();
//         formData.append('resume', resume);
//         await axios.post(`/users/upload-resume/${companyName}`, formData);
//       }
  
//       fetchData();
//     } catch (error) {
//       console.error('Error applying to company:', error);
//     }
//   };
  
//   return (
//     <div className="user-home">
//       <Layout />
//       <div className="content">
//         <div className="student-details">
//           {studentDetails ? (
//             <>
//               <div className="details">
//                 <p><span className="label">Name:</span> {studentDetails.Name}</p>
//                 <p><span className="label">Enrollment:</span> {studentDetails.Enrollment}</p>
//                 <p><span className="label">Email:</span> {studentDetails.Email}</p>
//                 <p><span className="label">Gender:</span> {studentDetails.Gender}</p>
//                 <p><span className="label">Mob:</span> {studentDetails.Mob}</p>
//                 <p><span className="label">Branch:</span> {studentDetails.Branch}</p>
//                 <p><span className="label">Address:</span> {studentDetails.Address}</p>
//                 <p><span className="label">Tenth:</span> {studentDetails.Tenth}</p>
//                 <p><span className="label">Twelfth:</span> {studentDetails.Twelth}</p>
//                 <p><span className="label">Cgpa:</span> {studentDetails.Cgpa}</p>
//               </div>
//               <div className='status'>
//                 <p><span className='label'>STATUS:</span> {studentDetails.Status.toUpperCase()}</p>
//               </div>
//             </>
//           ) : (
//             <div>
//               <h1>You are not registered for the upcoming placement drive. Please contact Admin.</h1>
//             </div>
//           )}
//         </div>
//         <div className="companies">
//           {eligibleCompanies.map((company, index) => (
//             <div key={index} className="company">
//               <h1>{company.CompanyName}</h1>
//               <p><span className="label">CTC:</span> {company.CTC}</p>
//               <p><span className="label">Description:</span> {company.Description}</p>
//               <p><span className="label">Date:</span> {formatDate(company.Date)}</p>
//               {/* Display error message if resume is required and not uploaded */}
//               {resumeRequiredError && <p>Please upload your resume before applying.</p>}
//               <button
//               onClick={() => applyToCompany(company.CompanyName)}
//               disabled={appliedCompanies.includes(company.CompanyName)}
//             >
//               {appliedCompanies.includes(company.CompanyName) ? 'Applied' : 'Apply'}
//             </button>
            
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* Add file input field for resume */}
//       <input type="file" onChange={handleResumeChange} />
//     </div>
//   );
// };

// export default UserHome;--------------------corrct



// import React, { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';
// import Layout from './Layout/Layout';

// const UserHome = () => {
//   const [studentDetails, setStudentDetails] = useState(null);
//   const [eligibleCompanies, setEligibleCompanies] = useState([]);
//   const [appliedCompanies, setAppliedCompanies] = useState([]);
//   const [resume, setResume] = useState(null);
//   const [resumeRequiredError, setResumeRequiredError] = useState(false);

//   const fetchData = useCallback(async () => {
//     try {
//       const response = await axios.get('/company/student-company');
//       const { companys } = response.data;
//       const filteredCompanies = companys.filter(company => {
//         return (
//           company.Tenth <= studentDetails.Tenth &&
//           company.Twelth <= studentDetails.Twelth &&
//           company.Graduation <= studentDetails.Graduation &&
//           company.Cgpa <= studentDetails.Cgpa
//         );
//       });
//       setEligibleCompanies(filteredCompanies);
//     } catch (error) {
//       console.error('Error fetching company details:', error);
//     }
//   }, [studentDetails]);

//   useEffect(() => {
//     const fetchStudentDetails = async () => {
//       try {
//         const user = JSON.parse(localStorage.getItem('user'));
//         const response = await axios.get(`/users/student-details/${user.Email}`);
//         setStudentDetails(response.data.student);
//       } catch (error) {
//         console.error('Error fetching student details:', error);
//       }
//     };

//     fetchStudentDetails();
//   }, []);

//   useEffect(() => {
//     if (studentDetails) {
//       fetchData();
//     }
//   }, [studentDetails, fetchData]); // Added fetchData to the dependency array

//   useEffect(() => {
//     const storedAppliedCompanies = localStorage.getItem('appliedCompanies');
//     if (storedAppliedCompanies) {
//       setAppliedCompanies(JSON.parse(storedAppliedCompanies));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('appliedCompanies', JSON.stringify(appliedCompanies));
//   }, [appliedCompanies]);

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
//   };

//   const handleResumeChange = (event) => {
//     const file = event.target.files[0];
//     setResume(file);
//   };

//   const applyToCompany = async (companyName) => {
//     try {
//       if (!resume) {
//         setResumeRequiredError(true);
//         return;
//       }

//       setAppliedCompanies([...appliedCompanies, companyName]);

//       await axios.post('/users/appliedcompany', { companyName });

//       const response = await axios.get(`/users/excel-sheet/${companyName}`);
//       let sheetExists = true;
//       if (!response.data) {
//         sheetExists = false;
//       }

//       const dataToSave = { companyName, ...studentDetails };

//       if (sheetExists) {
//         await axios.post(`/users/add-to-excel/${companyName}`, dataToSave);
//       } else {
//         await axios.post('/users/create-excel-sheet', { companyName });
//         await axios.post(`/users/add-to-excel/${companyName}`, dataToSave);
//       }

//       if (resume) {
//         const formData = new FormData();
//         formData.append('resume', resume);
//         await axios.post(`/users/upload-resume/${companyName}`, formData);
//       }

//       fetchData();
//     } catch (error) {
//       console.error('Error applying to company:', error);
//     }
//   };

//   return (
//     <div className="user-home">
//       <Layout />
//       <div className="content">
//         <div className="student-details">
//           {studentDetails ? (
//             <>
//               <div className="details">
//                 <p><span className="label">Name:</span> {studentDetails.Name}</p>
//                 <p><span className="label">Enrollment:</span> {studentDetails.Enrollment}</p>
//                 <p><span className="label">Email:</span> {studentDetails.Email}</p>
//                 <p><span className="label">Gender:</span> {studentDetails.Gender}</p>
//                 <p><span className="label">Mob:</span> {studentDetails.Mob}</p>
//                 <p><span className="label">Branch:</span> {studentDetails.Branch}</p>
//                 <p><span className="label">Address:</span> {studentDetails.Address}</p>
//                 <p><span className="label">Tenth:</span> {studentDetails.Tenth}</p>
//                 <p><span className="label">Twelfth:</span> {studentDetails.Twelth}</p>
//                 <p><span className="label">Cgpa:</span> {studentDetails.Cgpa}</p>
//               </div>
//               <div className='status'>
//                 <p><span className='label'>STATUS:</span> {studentDetails.Status.toUpperCase()}</p>
//               </div>
//             </>
//           ) : (
//             <div>
//               <h1>You are not registered for the upcoming placement drive. Please contact Admin.</h1>
//             </div>
//           )}
//         </div>
//         <div className="companies">
//           {eligibleCompanies.map((company, index) => (
//             <div key={index} className="company">
//               <h1>{company.CompanyName}</h1>
//               <p><span className="label">CTC:</span> {company.CTC}</p>
//               <p><span className="label">Description:</span> {company.Description}</p>
//               <p><span className="label">Date:</span> {formatDate(company.Date)}</p>
//               {resumeRequiredError && <p>Please upload your resume before applying.</p>}
//               <button
//                 onClick={() => applyToCompany(company.CompanyName)}
//                 disabled={appliedCompanies.includes(company.CompanyName)}
//               >
//                 {appliedCompanies.includes(company.CompanyName) ? 'Applied' : 'Apply'}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//       <input type="file" onChange={handleResumeChange} />
//     </div>
//   );
// };

// export default UserHome;




















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Layout from './Layout/Layout';

// const UserHome = () => {
//   const [studentDetails, setStudentDetails] = useState(null);
//   const [eligibleCompanies, setEligibleCompanies] = useState([]);
//   const [appliedCompanies, setAppliedCompanies] = useState([]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('/company/student-company');
//       const { companys } = response.data;
//       const filteredCompanies = companys.filter(company => {
//         return (
//           company.Tenth <= studentDetails.Tenth &&
//           company.Twelth <= studentDetails.Twelth &&
//           company.Graduation <= studentDetails.Graduation &&
//           company.Cgpa <= studentDetails.Cgpa
//         );
//       });
//       setEligibleCompanies(filteredCompanies);
//     } catch (error) {
//       console.error('Error fetching company details:', error);
//     }
//   };

//   useEffect(() => {
//     const fetchStudentDetails = async () => {
//       try {
//         const user = JSON.parse(localStorage.getItem('user'));
//         const response = await axios.get(`/users/student-details/${user.Email}`);
//         setStudentDetails(response.data.student);
//       } catch (error) {
//         console.error('Error fetching student details:', error);
//       }
//     };

//     fetchStudentDetails();
//   }, []);

//   useEffect(() => {
//     if (studentDetails) {
//       fetchData();
//     }
//   }, [studentDetails]);

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
//   };

//   const applyToCompany = async (companyName) => {
//     try {
//       // Disable the button immediately upon clicking
//       setAppliedCompanies([...appliedCompanies, companyName]);
      
//       // Perform asynchronous operations
//       await axios.post('/users/appliedcompany', { companyName });
//       const dataToSave = { companyName, ...studentDetails };
//       await axios.post('/users/save-to-excel', dataToSave);

//       // After completion, update the state
//       fetchData();
//     } catch (error) {
//       console.error('Error applying to company:', error);
//     }
//   };

//   return (
//     <div className="user-home">
//       <Layout />
//       <div className="content">
//         <div className="student-details">
//           {studentDetails ? (
//             <>
//               <div className="details">
//                 <p><span className="label">Name:</span> {studentDetails.Name}</p>
//                 <p><span className="label">Enrollment:</span> {studentDetails.Enrollment}</p>
//                 <p><span className="label">Email:</span> {studentDetails.Email}</p>
//                 <p><span className="label">Gender:</span> {studentDetails.Gender}</p>
//                 <p><span className="label">Mob:</span> {studentDetails.Mob}</p>
//                 <p><span className="label">Branch:</span> {studentDetails.Branch}</p>
//                 <p><span className="label">Address:</span> {studentDetails.Address}</p>
//                 <p><span className="label">Tenth:</span> {studentDetails.Tenth}</p>
//                 <p><span className="label">Twelfth:</span> {studentDetails.Twelth}</p>
//                 <p><span className="label">Cgpa:</span> {studentDetails.Cgpa}</p>
//               </div>
//               <div className='status'>
//                 <p><span className='label'>STATUS:</span> {studentDetails.Status.toUpperCase()}</p>
//               </div>
//             </>
//           ) : (
//             <div>
//               <h1>You are not registered for the upcoming placement drive. Please contact Admin.</h1>
//             </div>
//           )}
//         </div>
//         <div className="companies">
//           {eligibleCompanies.map((company, index) => (
//             <div key={index} className="company">
//               <h1>{company.CompanyName}</h1>
//               <p><span className="label">CTC:</span> {company.CTC}</p>
//               <p><span className="label">Description:</span> {company.Description}</p>
//               <p><span className="label">Date:</span> {formatDate(company.Date)}</p>
//               {/* Disable the button if the company is already applied */}
//               <button
//                 onClick={() => applyToCompany(company.CompanyName)}
//                 disabled={appliedCompanies.includes(company.CompanyName)}
//               >
//                 {appliedCompanies.includes(company.CompanyName) ? 'Applied' : 'Apply'}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserHome;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from './Layout/Layout';

const UserHome = () => {
  const [studentDetails, setStudentDetails] = useState(null);
  const [eligibleCompanies, setEligibleCompanies] = useState([]);
  const [appliedCompanies, setAppliedCompanies] = useState(() => {
    const storedAppliedCompanies = localStorage.getItem('appliedCompanies');
    return storedAppliedCompanies ? JSON.parse(storedAppliedCompanies) : [];
  });

  const fetchData = async () => {
    try {
      const response = await axios.get('/company/student-company');
      const { companys } = response.data;
      const filteredCompanies = companys.filter(company => {
        return (
          company.Tenth <= studentDetails.Tenth &&
          company.Twelth <= studentDetails.Twelth &&
          company.Graduation <= studentDetails.Graduation &&
          company.Cgpa <= studentDetails.Cgpa
        );
      });
      setEligibleCompanies(filteredCompanies);
    } catch (error) {
      console.error('Error fetching company details:', error);
    }
  };

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        const response = await axios.get(`/users/student-details/${user.Email}`);
        setStudentDetails(response.data.student);
      } catch (error) {
        console.error('Error fetching student details:', error);
      }
    };

    fetchStudentDetails();
  }, []);

  useEffect(() => {
    if (studentDetails) {
      fetchData();
    }
  }, [studentDetails]);

  useEffect(() => {
    localStorage.setItem('appliedCompanies', JSON.stringify(appliedCompanies));
  }, [appliedCompanies]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  };

  const applyToCompany = async (companyName) => {
    try {
      // Disable the button immediately upon clicking
      setAppliedCompanies(prevAppliedCompanies => [...prevAppliedCompanies, companyName]);
      
      // Perform asynchronous operations
      await axios.post('/users/appliedcompany', { companyName });
      const dataToSave = { companyName, ...studentDetails };
      await axios.post('/users/save-to-excel', dataToSave);

      // After completion, update the state
      fetchData();
    } catch (error) {
      console.error('Error applying to company:', error);
    }
  };

  return (
    <div className="user-home">
      <Layout />
      <div className="content">
        <div className="student-details">
          {studentDetails ? (
            <>
              <div className="details">
                <p><span className="label">Name:</span> {studentDetails.Name}</p>
                <p><span className="label">Enrollment:</span> {studentDetails.Enrollment}</p>
                <p><span className="label">Email:</span> {studentDetails.Email}</p>
                <p><span className="label">Gender:</span> {studentDetails.Gender}</p>
                <p><span className="label">Mob:</span> {studentDetails.Mob}</p>
                <p><span className="label">Branch:</span> {studentDetails.Branch}</p>
                <p><span className="label">Address:</span> {studentDetails.Address}</p>
                <p><span className="label">Tenth:</span> {studentDetails.Tenth}</p>
                <p><span className="label">Twelfth:</span> {studentDetails.Twelth}</p>
                <p><span className="label">Cgpa:</span> {studentDetails.Cgpa}</p>
              </div>
              <div className='status'>
                <p><span className='label'>STATUS:</span> {studentDetails.Status.toUpperCase()}</p>
              </div>
            </>
          ) : (
            <div>
              <h1>You are not registered for the upcoming placement drive. Please contact Admin.</h1>
            </div>
          )}
        </div>
        <div className="companies">
          {eligibleCompanies.map((company, index) => (
            <div key={index} className="company">
              <h1>{company.CompanyName}</h1>
              <p><span className="label">CTC:</span> {company.CTC}</p>
              <p><span className="label">Description:</span> {company.Description}</p>
              <p><span className="label">Date:</span> {formatDate(company.Date)}</p>
              {/* Disable the button if the company is already applied */}
              <button
                onClick={() => applyToCompany(company.CompanyName)}
                disabled={appliedCompanies.includes(company.CompanyName)}
              >
                {appliedCompanies.includes(company.CompanyName) ? 'Applied' : 'Apply'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserHome;
