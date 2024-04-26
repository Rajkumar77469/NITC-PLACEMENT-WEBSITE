

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { message } from "antd";

const Header = () => {
  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    message.success("Logout Successfully");
    navigate("/");
  };

  return (
    <>
      <style>
        {`
          .sliding-container {
            overflow: hidden;
            white-space: nowrap;
          }

          .navbar-brand {
            display: inline-block;
            animation: slideRightToLeft 10s infinite linear;
            font-size: 24px; /* Increased font size */
            font-weight: bold; /* Bold font weight */
            color: #fff; /* Text color */
            text-shadow: 2px 2px 4px #000; /* Text shadow for better visibility */
          }

          @keyframes slideRightToLeft {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .navbar {
            background-color: #000066; /* Header background color */
          }

          .navbar-toggler {
            border-color: #fff; /* Toggler color */
          }

          .navbar-toggler-icon {
            background-color: #fff; /* Toggler icon color */
          }

          .nav-link {
            color: #fff; /* Link color */
            margin-left: 20px; /* Spacing between links */
          }

          .nav-link:hover {
            color: red; /* Hover color */
          }

          .btn-danger {
            background-color: #f5222d; /* Logout button background color */
            border-color: #f5222d; /* Logout button border color */
          }

          .btn-danger:hover {
            background-color: #ff4d4f; /* Hover color */
            border-color: #ff4d4f; /* Hover border color */
          }
        `}
      </style>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <div className="sliding-container">
              <h6 className="navbar-brand">
                {loginUser && loginUser.Name && loginUser.Name.toUpperCase()} WELCOME TO NITC PLACEMENT MANAGEMENT SYSTEM 
              </h6>
            </div>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <h5 className="nav-link ">
                <span style={{ fontSize: '24px', marginRight: '10px' }}>🔔</span>
                  <UserOutlined /> {loginUser && loginUser.Name && loginUser.Name.toUpperCase()}
                </h5>
              </li>
              <li className="nav-item">
                <button className="btn btn-danger" onClick={logoutHandler}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
