import React from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons'; // Import LeftOutlined icon from Ant Design library

const BackButton = () => {
  const handleClick = () => {
    window.location.href = '/mainpage'; // Directly set the URL for navigation
  };

  return (
    <button className="btn btn-primary Buttonstyle" onClick={handleClick}>
    <ArrowLeftOutlined />
      Back
    </button>
  );
};

export default BackButton;
