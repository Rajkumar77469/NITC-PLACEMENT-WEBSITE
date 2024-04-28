import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
    <Navbar />
    <h2 className="heading">WELCOME TO NITC PLACEMENT WEBSITE (Centre for Career Development)</h2>
    <div className="fullabout">
      <div className="about-text-wrapper">
        <div className="abt-text">
        <p className="aboutnitc">The Centre for Career Development (CCD) at NIT Calicut is dedicated to providing comprehensive career guidance, training, and placement support to students. Our mission is to empower students with the skills, knowledge and opportunities necessary to succeed in their chosen careers. We offer personalized counselling, industry connections and a range of workshops and training programmes to enhance employability skills. Our goal is to bridge the gap between academia and industry, ensuring students have access to internships, industrial training, and placement opportunities. At CCD, we are committed to nurturing well-rounded professionals who are equipped for the challenges of the ever-evolving job market.</p>
        <br />
          <h3>Vision</h3>
          <p><strong>Inculcate a career-oriented campus culture that moulds the undergraduate, postgraduate and doctoral research students of the Institute to pursue their academic and professional goals</strong></p>
          <h3>Mission</h3>
          <p>
            <strong>
            Liaison with talent acquisition teams of industries, consultant firms and research organisations for placement and internship opportunities. Collaborate with alumni to facilitate exploration of career options for students. Enhance the skill set of students through training programmes so as to make them career-ready.
            </strong>
          </p>
        
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
