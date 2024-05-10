

          //       import "./css/about.css";
          //       import "./css/backdrop.css";
          //       import "./css/contactus.css";
          //       import "./css/footer.css";
          //       import "./css/homepage.css";
          //       import "./css/sidedrawer.css"
          //       import "./css/togglebutton.css";
          //       import "./css/toolbar.css";
          //       import "./css/UserHome.css"
          //       import "./css/studentcompany.css"
          //       import "./css/recruiters.css"
          //       import "./css/Mainpage.css"
          //       import "./css/statics.css";
                
          //   import React from 'react';
           
          //   import Home from  "./Components/pages/Home.js";
          //   import AboutUs from "./Components/pages/aboutUs";
          //   import ContactUs from "./Components/pages/ContactUs";
          //   import Register from "./Components/pages/Register";
          //   import Login from "./Components/pages/Login";
          //   import Adminhome from './Components/Admin/Adminhome';
          //   import Userhome from "./Components/UserHome.js";
          //   import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
          //   import Footer from "./Components/pages/Footer.js";
          //   import PastRecruiters from "./Components/company/Recruiters.js"
          //   import Mainpage from "./Components/Mainpage/Mainpage.js";
          //   import Placement from "./Components/pages/placementstatics/PlacementTOTAL.js"
        
          // import UpdateDetails from "./Components/updateuser/updatedetils.js";
      
         
          //   function App() {
          //     return (
          //       <div >
          //         <Footer/>
          //         <Router>
                    
          //           <Routes>
          //             <Route path='/' element={<Home />} />
          //             <Route path="/about-us" element={<AboutUs />} />
          //             <Route path="/contact-us" element={<ContactUs />} />
          //             <Route path="/register" element={<Register />} />
          //             <Route path="/login" element={<Login />} />
          //             <Route path="/userhome" element={<Userhome/>} />
          //             <Route path="/adminhome" element={<Adminhome/>} />
          //             <Route path="/our-recruiters" element={<PastRecruiters/>} />\
          //             <Route path="/mainpage" element={<Mainpage/>} />
          //             <Route path="/placement-stats" element={<Placement/>} />
          //             <Route path="/user-details-edit" element={<UpdateDetails/>} />
          //           </Routes>
          //         </Router>
          //       </div>
          //     );
          //   }
            
          //   export default App;
            
               import "./css/about.css";
                import "./css/backdrop.css";
                import "./css/contactus.css";
                import "./css/footer.css";
                import "./css/homepage.css";
                import "./css/sidedrawer.css"
                import "./css/togglebutton.css";
                import "./css/toolbar.css";
                import "./css/UserHome.css"
                import "./css/studentcompany.css"
                import "./css/recruiters.css"
                import "./css/Mainpage.css"
                import "./css/statics.css";
                
               
          import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
          import Home from './Components/pages/Home';
         
          import ContactUs from './Components/pages/ContactUs';
          import Register from './Components/pages/Register';
          import Login from './Components/pages/Login';
         import AboutUs from "./Components/pages/aboutUs";
              import Adminhome from './Components/Admin/Adminhome';
          import UserHome from './Components/UserHome';
          import Footer from './Components/pages/Footer';
          import PastRecruiters from './Components/company/Recruiters';
          import Mainpage from './Components/Mainpage/Mainpage';
          import Placement from './Components/pages/placementstatics/PlacementTOTAL';
         
            import UpdateDetails from "./Components/updateuser/updatedetils.js";
          function App() {
            // State to track if the user is authenticated
           
  
            // Middleware to protect routes
            // const ProtectedRoute = ({ element }) => {
            //   const authenticated = localStorage.getItem('user') ? true : false;
            //   if (authenticated) {
            //     return element;
            //   }
            //   return <Navigate to="/login" />;
            // };
            const publicRoutes = ['/login', '/register', '/about-us', '/contact-us', '/our-recruiters', '/placement-stats'];

            const ProtectedRoute = ({ element, path }) => {
              const authenticated = localStorage.getItem('user') ? true : false;
              
              // Check if the current path is a public route
              const isPublicRoute = publicRoutes.includes(path);
            
              // If the route is public and the user is authenticated, redirect to home
              if (isPublicRoute && authenticated) {
                return <Navigate to="/" />;
              }
            
              // If the route is not public and the user is not authenticated, redirect to login
              if (!isPublicRoute && !authenticated) {
                return <Navigate to="/login" />;
              }
            
              // Otherwise, render the requested route
              return element;
            };
            


            return (
              <div>
                <Footer />
                <Router>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/our-recruiters"  element={<PastRecruiters />}  />
                    <Route path="/placement-stats" element={<Placement />} />
                    <Route
                      path="/login"
                      element={<Login />}
                    />
                    
                    <Route path="/userhome" element={<ProtectedRoute element={<UserHome />} />} />
                    <Route path="/adminhome" element={<ProtectedRoute element={<Adminhome />} />} />
                    <Route path="/mainpage" element={<ProtectedRoute element={<Mainpage />} />} />
                    <Route path="/user-details-edit" element={<ProtectedRoute element={<UpdateDetails />} />} />
                  </Routes>
                </Router>
              </div>
            );
          }
             export default App;
          
       