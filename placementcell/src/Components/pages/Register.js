
import React, { useState } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";
import "../css/RegisterPage.css";
import Navbar from "./Navbar";
import regsitersidepic from "./registersidepic.jpg";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Form submit handler
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      await axios.post("/users/register", values);
      message.success("Registration Successful");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      message.error("Something went wrong");
    }
  };

  return (
    <>
      <Navbar />
      <h2 className="heading">WELCOME TO NITC PLACEMENT WEBSITE</h2>
     
      <div className="register-page">
        {loading && <Spinner />}
        <img className="register-side-image" src={regsitersidepic} alt="" />
        <div className="register-container">
        
          <Form
          
            className="register-form"
            layout="vertical"
            onFinish={submitHandler}
          >
              <h2>Register Form</h2>
            <Form.Item label="Name" name="Name">
              <Input type="text" required />
            </Form.Item>
            <Form.Item label="Email" name="Email">
              <Input type="email" required />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" required />
            </Form.Item>
            <div className="d-flex justify-content-between">
              <Link to="/login">Already Registered? Login here!</Link>
              <button className="btn">Register</button>
            </div>
          </Form>
         
        </div>
      </div>
    </>
  );
};

export default Register;

