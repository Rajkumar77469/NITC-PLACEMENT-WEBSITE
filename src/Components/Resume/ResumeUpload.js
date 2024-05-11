import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResumeUpload = ({ userId }) => {
  const [file, setFile] = useState(null);
  const [resumeContent, setResumeContent] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleContentChange = (event) => {
    setResumeContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      if (file) {
        formData.append('file', file);
      } else {
        formData.append('resumeContent', resumeContent);
      }
      formData.append('userId', userId);
      await axios.post('/users/upload-resume', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Resume uploaded successfully');
      // You can add logic to refresh or update UI after successful upload
    } catch (error) {
      console.error('Error uploading resume:', error);
      alert('Failed to upload resume');
    }
  };

  return (
    <div>
      <h2>Upload Resume</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <textarea
          placeholder="Paste or type your resume content here..."
          value={resumeContent}
          onChange={handleContentChange}
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

const ResumeDelete = ({ userId }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`/users/delete-resume/${userId}`);
      alert('Resume deleted successfully');
      // You can add logic to refresh or update UI after successful deletion
    } catch (error) {
      console.error('Error deleting resume:', error);
      alert('Failed to delete resume');
    }
  };

  return (
    <div>
      <h2>Delete Resume</h2>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

const ResumeDisplay = ({ userId }) => {
  const [resume, setResume] = useState(null);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await axios.get(`/users/get-user-resume/${userId}`);
        setResume(response.data);
      } catch (error) {
        console.error('Error fetching resume:', error);
      }
    };

    fetchResume();
  }, [userId]);

  return (
    <div>
      <h2>Resume Details</h2>
      {resume ? (
        <div>
          <p>Uploaded At: {resume.uploadedAt}</p>
          {/* Display other resume details as needed */}
        </div>
      ) : (
        <p>No resume uploaded</p>
      )}
    </div>
  );
};

const ResumeManagementExample = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const response = await axios.get('/api/get-user-id'); // Replace with the actual endpoint
        setUserId(response.data.userId);
      } catch (error) {
        console.error('Error fetching user ID:', error);
      }
    };

    fetchUserId();
  }, []);

  return (
    <div>
      <h1>Resume Management Example</h1>
      {userId && (
        <>
          <ResumeUpload userId={userId} />
          <ResumeDelete userId={userId} />
          <ResumeDisplay userId={userId} />
        </>
      )}
    </div>
  );
};

export default ResumeManagementExample;
