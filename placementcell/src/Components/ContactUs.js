import React from "react";
import Card from "./Card";
import praveen from "./imageteam/praveen.png";
import prateek from "./imageteam/prateek.png";
import deepthi from "./imageteam/deepti.png";
import vijayraj from "./imageteam/vijayraj.png";
import arun from "./imageteam/arun.png";
import aswini from "./imageteam/aswini.png";
import radha from "./imageteam/radha.png";
import shamil from "./imageteam/shamil.png";
import akhil from "./imageteam/akhil.png"
import harish from "./imageteam/haris.png"
import karthik from "./imageteam/kartik.png"
import yusuf from "./imageteam/yusuf.png"
import safa from "./imageteam/safa.png"
import Navbar from "./Navbar";

const contactUs = () => {
  return (
    <> 
    <Navbar/>
    <br />
    <br />
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
                src={deepthi}
                alt="Dr. Deepthi Bend"
                name="Dr. Deepthi Bend"
                isTeacher={false}
                position="Vice Chairperson (Internship), Assistant Professor Department of Architecture and Planning"
                email="deepthib@nitc.ac.in "
                phone="049502286902,+91 9966077589"
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
              <Card
                src={arun}
                alt="Arun Kumar P"
                name="Arun Kumar P"
                isTeacher={false}
                position=" Staffs Adhoc-Technical Assistant"
                islinkedin={false}
                isPhone={false}
                isEmail={false}
              />
              <Card
                src={aswini}
                alt="Aswani N."
                name="Aswani N."
                isTeacher={false}
                position=" Staffs Adhoc-Technical Assistant"
                islinkedin={false}
                isPhone={false}
                isEmail={false}
              />
              <Card
                src={radha}
                alt="Radha M. N."
                name="Radha M. N."
                isTeacher={false}
                position=" Staffs Housekeeping Staff"
                islinkedin={false}
                isPhone={false}
                isEmail={false}
              />
              <Card
                src={shamil}
                alt="Shamil R. N."
                name="Shamil R. N."
                isTeacher={false}
                position=" Staffs Adhoc-Technical Assistant"
                islinkedin={false}
                isPhone={false}
                isEmail={false}
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src={akhil}
                alt="Akhil Gopikumar"
                name="Akhil Gopikumar"
                isTeacher={false}
                position="Student Coordinators  B.Tech Chemical Engineering"
                islinkedin={false}
                isPhone={false}
                isEmail={false}
              />
              <Card
                src={harish}
                alt="Haris Muhammed S."
                name="Haris Muhammed S."
                isTeacher={false}
                position="Student Coordinators B.Tech Mechanical Engineering"
                islinkedin={false}
                isPhone={false}
                isEmail={false}
              />
              <Card
                src={karthik}
                alt="Karthik Suresh"
                name="Karthik Suresh"
                isTeacher={false}
                position="Student Coordinators B.Tech Electronics & Communication Engineering"
                islinkedin={false}
                isPhone={false}
                isEmail={false}
              />
              <Card
                src={yusuf}
                alt="M. D. Yusuf Nazar"
                name="M. D. Yusuf Nazar"
                isTeacher={false}
                position="Student Coordinators M.Tech Machine Design"
                islinkedin={false}
                isPhone={false}
                isEmail={false}
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src={safa}
                alt="Safa Pary"
                name="Safa Pary"
                isTeacher={false}
                position="Student Coordinators B.Tech Electrical & Electronics Engineering "
                islinkedin={false}
                isPhone={false}
                isEmail={false}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contactUs;
