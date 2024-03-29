import React, { useState } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";
import Navbar from "./Navbar";
import "./css/Loginpage.css";
const Login = () => {
 
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //from submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post("/users/login", values);
      setLoading(false);
      message.success("login success");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" })
      );
      // navigate("/userhome");
      
      const user = JSON.parse(localStorage.getItem("user"));

      // Check if user isAdmin
      if (user && user.isAdmin === true) {
        navigate("/adminhome");
      } else {
        navigate("/userhome");
      }
      // navigate("/contact-us");
    } catch (error) {
      setLoading(false);
      message.error("something went wrong");
    }
  };
  //prevent for login user
  // useEffect(() => {
  //   if (localStorage.getItem("user")) {
  //     navigate("/");
  //   }
  // }, [navigate]);
  return (
    <>
    <Navbar/>
      <div className="login-page ">
        {loading && <Spinner />}
        <div className="row container">
        <h2 style={{ fontWeight: 'bold', color: 'blue' }}>WELCOME TO NITC PLACEMENT WEBSITE</h2>
      
          <div className="col-md-4 login-form">
            <Form layout="vertical" onFinish={submitHandler}>
              <h1>Login Form</h1>

              <Form.Item label="Email" name="email">
                <Input type="email" required />
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input type="password" required />
              </Form.Item>
              <div className="d-flex justify-content-between">
                <Link to="/register">
                  Not a user ? Click Here to regsiter !
                </Link>
                <button className="btn ">Login</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;


  