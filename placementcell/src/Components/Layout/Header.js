
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserOutlined, EditOutlined } from "@ant-design/icons";
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

  const handleEdit = () => {
    navigate("/user-details-edit");
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
            font-size: 24px;
            font-weight: bold;
            color: #fff;
            text-shadow: 2px 2px 4px #000;
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
            background-color: #000066;
          }

          .navbar-toggler {
            border-color: #fff;
          }

          .navbar-toggler-icon {
            background-color: #fff;
          }

          .nav-link {
            color: #fff;
            margin-left: 20px;
          }

          .nav-link:hover {
            color: red;
          }

          .btn-danger {
            background-color: #f5222d;
            border-color: #f5222d;
          }

          .btn-danger:hover {
            background-color: #ff4d4f;
            border-color: #ff4d4f;
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
