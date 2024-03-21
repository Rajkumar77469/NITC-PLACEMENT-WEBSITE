import React from "react";
import ImageSlider from "./ImageSlider";
import Footer from "./Footer";
import Navbar from './Navbar';

const slides = [
  { url: "https://i.ytimg.com/vi/tBv_YVvFD88/sddefault.jpg", title: "nitc",id:"1" },
  { url: "https://images.shiksha.com/mediadata/images/articles/1631789223php6aiwmY.jpeg", title: "nitc" ,id:"2"},
  { url: "https://www.careerguide.com/career/wp-content/uploads/2023/08/nit-calicut.jpeg", title: "nitc",id:"3" },
  { url: "https://www.careerindia.com/college-photos/375x275/5188/admin-block-old_1533193211.jpg", title: "nitc",id:"4" },
  { url: "https://gyaanarth.com/wp-content/uploads/2022/07/cover-photo-40.jpg", title: "nitc" ,id:"5"},
  { url: "https://www.askiitians.com/blog/wp-content/uploads/2014/07/43-copy.jpg", title: "nitc",id:"6" },
  { url: "https://img.jagranjosh.com/images/2022/April/1342022/432066048_gal.jpg", title: "nitc",id:"7" },
];

const containerStyles = {
  width: "90%",
  height: "85%",
  display: "block",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  marginBottom: "200px",
  padding: "70px 0",
  borderRadius: "50%",
  zIndex: "1",

};

const Home = () => (
  <>
    <Navbar />
    <div className="homepic">
      {/* Your content goes here */}
      <Footer />
    </div>
    <div style={containerStyles}>
      <ImageSlider slides={slides} />
    </div>
  </>
);

export default Home;
