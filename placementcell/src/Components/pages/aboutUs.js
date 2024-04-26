import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
    <div className="fullabout">
      <Navbar />
      <br />
      <br />
      <h1 className="abt1">Welcome To National Institute of Technology Calicut</h1>
      <h3 className="abt3">(Centre for Career Development)</h3>
      <div className="about-text-wrapper">
        <div className="abt-text">
          <h3>Vision</h3>
          <p><strong>Inculcate a career-oriented campus culture that molds the undergraduate, postgraduate, and doctoral research students of the Institute to pursue their academic and professional goals.</strong></p>
          <h3>Mission</h3>
          <p>
            <strong>
              Liaison with talent acquisition teams of industries, consultant firms, and research organizations for placement and internship opportunities.
              Collaborate with alumni to facilitate exploration of career options for students.
              Enhance the skill sets of students through training programs so as to make them career-ready.
            </strong>
          </p>
          <p>
            National Institute of Technology Calicut (NITC) is one of the premier technical institutes in the country (NIRF 2021 Rank: Engineering stream - 25, Architecture stream - 03; ARIIA Rank: 09). The motto of NIT Calicut is “International standing of the highest calibre”. Our mission is to develop high-quality technical education and personnel with a sound footing on basic engineering principles, technical and managerial skills, innovative research capabilities, and exemplary professional conduct to lead and to use technology for the progress of mankind, adapting themselves to changing technological environments with the highest ethical values as the inner strength.
          </p>
          <p>
            The Centre for Career Development was formed in 1988, with an aim to interact with the corporate for possible employment to the students graduating from the Institute. The Centre for Career Development also explores the possibilities for summer training and internships for the students of the Institute. National Institute of Technology Calicut has maintained a good placement record over the years. The graduates and postgraduates of NITC have been selected by some of the world’s leading business corporations. The highly dedicated faculty, coupled with world-class infrastructure facilities, prepares the meritorious students to take up the challenges of the rapidly growing globalized techno-economic scenario in the country.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
