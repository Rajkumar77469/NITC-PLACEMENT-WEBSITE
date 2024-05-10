import React from "react";
import Footer from "./Footer";
import Navbar from './Navbar';
import Bootcamp from "../Bootcamp/Bootcamp";
import homepageimage from ".././Mainpage/mainplacment.png"


const Home = () => (
  <>
    <Navbar />
   
    <h4 className="heading">WELCOME TO NITC PLACEMENT WEBSITE (Centre for Career Development)</h4>
    <div className="homepic">
    <img className="homeimage" src={homepageimage} alt="" />
    <Bootcamp/>
      <Footer />
    </div>
  </>
);

export default Home;
