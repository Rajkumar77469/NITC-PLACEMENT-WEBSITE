import React from "react";
import Card from "./Card";
import praveen from "../imageteam/praveen.png";
import prateek from "../imageteam/prateek.png";
import vijayraj from "../imageteam/vijayraj.png";
import saurav from "../imageteam/saurav.jpeg"
import Navbar from "./Navbar";

const contactUs = () => {
  return (
    <> 
    <Navbar/>
    <h2 className="heading">WELCOME TO NITC PLACEMENT WEBSITE (Centre for Career Development)</h2>
      <div className="contact-outer" style={{ backgroundColor: "white" }}>
        <div className="placement-team">
          <h1 className="placement-team-heading">The Team</h1>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src={praveen}
                alt="Dr. Praveen Sankaran"
                name="Dr. Praveen Sankaran"
                isTeacher={false}
                position="Training and Placements Office ,Chairperson"
                email="psankaran@nitc.ac.in"
                phone="0495-2286721"
                islinkedin={false}                
                isPhone={true}
                isEmail={true}
              />
          
              <Card
                src={prateek}
                alt="Dr. Prateek Negi"
                name="Dr. Prateek Negi"
                isTeacher={false}
                position="Vice Chairperson (Training), Assistant Professor Department of Civil Engineering"
                email="prateek@nitc.ac.in "
                phone="+91-0495-2286258,+91-9953919464"
                islinkedin={false}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={vijayraj}
                alt="Dr. Vijayaraj K."
                name="Dr. Vijayaraj K."
                isTeacher={false}
                position="Vice Chairperson (Placement), Assistant Professor, Department of Mechanical Engineering"
                email="vijayaraj@nitc.ac.in"
                islinkedin={false}
                isPhone={false}
                isEmail={true}
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
      
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
           
              <Card
              src={saurav}
              alt="saurav singh"
              name="saurav singh"
              phone="7856998161"
              email="saurav_m210682ca@nitc.ac.in"
              linkedin="https://www.linkedin.com/in/saurav-nitc/"
              isTeacher={false}
              position="Placement Representative MCA"
              islinkedin={true}
              isPhone={true}
              isEmail={true}
            />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contactUs;
