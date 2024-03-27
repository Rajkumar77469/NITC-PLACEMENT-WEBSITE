import React, { useState } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";
import "../css/RegisterPage.css";
import Navbar from "./Navbar"

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  //from submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      await axios.post("/users/register", values);
      message.success("Registeration Successfull");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      message.error("something went wrong");
    }
  };

  //prevent for login user
  // useEffect(() => {
  //   if (localStorage.getItem("user")) {
  //     navigate("/contact-us");
  //   }
  // }, [navigate]);
  return (
    <>
    <Navbar />

    <h2 className="heading">WELCOME TO NITC PLACEMENT WEBSITE</h2>
      <div className="register-page ">
        {loading && <Spinner />}
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
            <Link to="/login">Already Register? login here!</Link>
            <button className="btn ">Resgiter</button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Register;
