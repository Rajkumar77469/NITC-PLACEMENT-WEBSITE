
            import React from 'react';
            // import Navbar from './Components/Navbar';
            import Home from './Components/Home';
            import AboutUs from "./Components/aboutUs";
            import ContactUs from "./Components/ContactUs";
            import Register from "./Components/Register";
            import Login from "./Components/Login";
            import Adminhome from './Components/Admin/Adminhome';
            import Userhome from "./Components/Userhome.js";
            import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
            import "./App.css";
            // <Navbar />
            function App() {
              return (
                <div>
                  <Router>
                    
                    <Routes>
                      <Route path='/' element={<Home />} />
                      <Route path="/about-us" element={<AboutUs />} />
                      <Route path="/contact-us" element={<ContactUs />} />
                      <Route path="/register" element={<Register />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/userhome" element={<Userhome/>} />
                      <Route path="/adminhome" element={<Adminhome/>} />
                    </Routes>
                  </Router>
                </div>
              );
            }
            
            export default App;
            
                     