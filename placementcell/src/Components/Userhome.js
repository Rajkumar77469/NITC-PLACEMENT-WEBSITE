
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from './Layout/Layout';
import { FaTrash } from 'react-icons/fa';
//import ResumeManagementExample from './Resume/ResumeUpload';

const UserHome = () => {
  const [studentDetails, setStudentDetails] = useState(null);
  const [studentinterviewDetails, setStudentinterviewDetails] = useState(null);
  const [eligibleCompanies, setEligibleCompanies] = useState([]);
  const [appliedCompanies, setAppliedCompanies] = useState([]);
  const [userId, setUserId] = useState(null);
  const [resume, setResume] = useState(null); 


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
        setUserId(response.data.student._id); // Store the user's ID

        // Fetch the applied companies for the current user
        const storedAppliedCompanies = localStorage.getItem(`appliedCompanies_${response.data.student._id}`);
        setAppliedCompanies(storedAppliedCompanies ? JSON.parse(storedAppliedCompanies) : []);
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
    if (userId) {
      localStorage.setItem(`appliedCompanies_${userId}`, JSON.stringify(appliedCompanies));
    }
  }, [appliedCompanies, userId]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  };

  const applyToCompany = async (companyName) => {
    if (!resume) {
      alert("Please upload a resume first, then apply.");
      return;
    }
  
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
  



/////resume 
useEffect(() => {
  // Fetch the resume from local storage when the component mounts
  const storedResume = localStorage.getItem(`userResume_${userId}`);
  if (storedResume) {
    setResume(storedResume);
  }
}, [userId]); // Re-fetch the resume if the user ID changes

const handleResumeUpload = (event) => {
  if (resume) {
    alert("You are allowed to upload only one resume.");
    return;
  }
  const file = event.target.files[0]; // Get the uploaded file
  setResume(file.name); // Store the file name in state
  localStorage.setItem(`userResume_${userId}`, file.name); // Store the file name in localStorage
};

const handleDeleteResume = () => {
  localStorage.removeItem(`userResume_${userId}`); // Remove the resume from local storage
  setResume(null); // Clear the resume from state
};

const handleDownloadClick = () => {
  // Retrieve the resume from local storage
  const storedResume = localStorage.getItem(`userResume_${userId}`);
  if (storedResume) {
    // Create a temporary anchor element to initiate the download
    const downloadLink = document.createElement("a");
    downloadLink.href = storedResume;
    downloadLink.download = storedResume.split("/").pop(); // Extract file name
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
};


  return (
    <div className="userhomepagecss">
      <Layout />

      <h2 className="heading">WELCOME TO NITC PLACEMENT WEBSITE (Centre for Career Development)</h2>
      <div>
      {!resume ? (
        <input type="file" onChange={handleResumeUpload} accept=".pdf" />
      ) : (
        <div className="resume-section">
          <p>Uploaded Resume: {resume}</p>
          <div className="button-container">
            <button className="download-button" onClick={handleDownloadClick}> Download Resume</button>
            <FaTrash className="delete-icon" onClick={handleDeleteResume} />
          </div>
        </div>
      )}
    </div>
      <div className="interviewnotify">
      {studentinterviewDetails && (
        <div>
          <h3>
            Hii <span className="label"> {studentinterviewDetails.StudentName}</span> your <span className="label">{studentinterviewDetails.CompanyName}</span> interview is scheduled on 
            <span className="label"> {`${studentinterviewDetails.date.substring(8, 10)}-${studentinterviewDetails.date.substring(5, 7)}-${studentinterviewDetails.date.substring(0, 4)}`}</span> between 
            <span className="label">
              {`${(parseInt(studentinterviewDetails.startTime.substring(11, 13)) < 12) ? studentinterviewDetails.startTime.substring(11,16) + ' AM' : (parseInt(studentinterviewDetails.startTime.substring(11, 13)) === 12) ? studentinterviewDetails.startTime.substring(11,16) + ' PM' : (parseInt(studentinterviewDetails.startTime.substring(11, 13)) - 12) + studentinterviewDetails.startTime.substring(13,16) + ' PM'} - ${(parseInt(studentinterviewDetails.endTime.substring(11, 13)) < 12) ? studentinterviewDetails.endTime.substring(11,16) + ' AM' : (parseInt(studentinterviewDetails.endTime.substring(11, 13)) === 12) ? studentinterviewDetails.endTime.substring(11,16) + ' PM' : (parseInt(studentinterviewDetails.endTime.substring(11, 13)) - 12) + studentinterviewDetails.endTime.substring(13,16) + ' PM'}`}
            </span>
          </h3>
        </div>
      )}
    </div>
      <div className="content">

      
    
        <div className="student-details">
          {studentDetails ? (
            <>
              <div className="details">
              <p><span className='label'>STATUS:</span>{studentDetails.Status.toUpperCase()}</p>
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
            </>
          ) : (
            <div>
              <h1 className="notregisterdnotice"> You are not registered for the upcoming placement drive. Please contact Admin !!</h1>
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
            
              <button
              key={company.CompanyName}
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