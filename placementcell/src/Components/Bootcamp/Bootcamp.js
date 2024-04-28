// import React, { useState } from 'react';
// import Aiclub from "../BootcampImages/aiclub.jpeg";
// import fossclub from "../BootcampImages/fossclub.jpeg";
// import gdscclub from "../BootcampImages/gdscclub.jpg";
// import rigclub from "../BootcampImages/rigclub.jpg";
// import unwiredclub from "../BootcampImages/unwired.jpg";
// import aerounwiredclub from "../BootcampImages/aerounwiredclub.png";

// const Bootcamp = () => {
//   // Dummy data containing image URLs and associated text and links
//   const imagesData = [
//     {
//       imageUrl: fossclub,
//       text: 'FOSS CELL',
//       text2: 'FOSS-NITC is a community that promotes and contribute to the Free and Open Source Community. The community comprises passionate students and faculties who work towards the promotion of free and open-source technology tools and the development of software that respects user freedom. FOSS fosters an inclusive culture on campus by facilitating strong discussions on open source, the latest technology and topics related to freedom.',
//     },
//     {
//       imageUrl: rigclub,
//       text: 'RIG Club',
//       text2: 'Robotics Interest Group(RIG) was formed out of the passion for robotics, to facilitate learning and research in the areas of Mechatronics/Robotics and Intelligent Systems, Automation, Advanced Control Systems, Modelling and Simulation & Sensors and Algorithms. Our aim is to acquire knowledge and appropriate hands-on experience, in order to meet the needs of these rapidly changing technologies and provide services to industry for promoting new technologies as well as designing and manufacturing commercially viable products, for the development of our country',
//     },
//     {
//       imageUrl: unwiredclub,
//       text: 'Team UNWIRED',
//       text2: 'Team Unwired is a student club at NITC which undertakes student engineering projects and competitions. It is a joint venture between Club Unwired - the engineering and technology club of NIT Calicut and SAE INDIA Collegiate club.',
//     },
//     {
//       imageUrl: Aiclub,
//       text: 'AI Club',
//       text2: 'The Artificial Intelligence Club is a collaborative platform that brings together students, teachers and professionals interested in exploring and promoting innovative AI- based technologies. The club provides opportunities for learning, discussing and working on AI-related and research enabling members to stay updated with the latest trends and development in the field. Through workshops, seminars and competitions, the club fosters a community of AI enthusiasts, encouraging collab, among its members.',
//     },
//     {
//       imageUrl: gdscclub,
//       text: 'GDSC Club',
//       text2: 'GDSC club at NITC is a community group for students who are interested in learning and applying Google Developer technologies. The club is part of the Google Developer Student Clubs (GDSC) program, which aims to empower student developers in universities to impact their student communities through technology. The club organizes events, workshops, and projects on topics such as Android App Development, Google Cloud, Flutter and more. The club also helps students to build solutions for real, local or global issues using Google technologies. The club is led by a GDSC lead, who is a student with foundational knowledge about software development and passion for leading a community of developers.',
//     },
//     {
//       imageUrl: aerounwiredclub,
//       text: 'Team AEROUNWIRED',
//       text2: 'AeroUnwired is an aero-modelling club, a branch of Club Unwired, found by students of NITC who aspired to harness the knowledge of flight. Inspired by the magnificent creatures with wings and technical aspects of the same, this club puts effort to build aircrafts and study the science of flight. The club offers knowledge to those who seek and invest their time in innovation. With a classical workspace to work & supportive faculty members and seniors, this club welcomes all those who wish to learn.',
//     }
//   ];

//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const handleMouseEnter = (index) => {
//     setHoveredIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setHoveredIndex(null);
//   };

//   return (
//     <div>
//       <div className="image-container">
//         {imagesData.map((data, index) => (
//           <div key={index} className="image-wrapper" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
//             <img src={data.imageUrl} alt={`Image`} />
//             {hoveredIndex === index && (
//               <div className="know-more-overlay">
//                 <p className="know-more-text">Know More</p>
//                 <div className="know-more-details">
//                   <p>{data.text2}</p>
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Bootcamp;
import React, { useState } from 'react';
import Aiclub from "../BootcampImages/aiclub.jpeg";
import fossclub from "../BootcampImages/fossclub.jpeg";
import gdscclub from "../BootcampImages/gdscclub.jpg";
import rigclub from "../BootcampImages/rigclub.jpg";
import unwiredclub from "../BootcampImages/unwired.jpg";
import aerounwiredclub from "../BootcampImages/aerounwiredclub.png";
import "./Bootcamp.css"

const Bootcamp = () => {
  // Dummy data containing image URLs and associated text and links
  const imagesData = [
    {
      imageUrl: fossclub,
      text: 'FOSS CELL',
      text2: 'FOSS-NITC is a community that promotes and contribute to the Free and Open Source Community. The community comprises passionate students and faculties who work towards the promotion of free and open-source technology tools and the development of software that respects user freedom. FOSS fosters an inclusive culture on campus by facilitating strong discussions on open source, the latest technology and topics related to freedom.',
    },
    {
      imageUrl: rigclub,
      text: 'RIG Club',
      text2: 'Robotics Interest Group(RIG) was formed out of the passion for robotics, to facilitate learning and research in the areas of Mechatronics/Robotics and Intelligent Systems, Automation, Advanced Control Systems, Modelling and Simulation & Sensors and Algorithms. Our aim is to acquire knowledge and appropriate hands-on experience, in order to meet the needs of these rapidly changing technologies and provide services to industry for promoting new technologies as well as designing and manufacturing commercially viable products, for the development of our country',
    },
    {
      imageUrl: unwiredclub,
      text: 'Team UNWIRED',
      text2: 'Team Unwired is a student club at NITC which undertakes student engineering projects and competitions. It is a joint venture between Club Unwired - the engineering and technology club of NIT Calicut and SAE INDIA Collegiate club.',
    },
    {
      imageUrl: Aiclub,
      text: 'AI Club',
      text2: 'The Artificial Intelligence Club is a collaborative platform that brings together students, teachers and professionals interested in exploring and promoting innovative AI- based technologies. The club provides opportunities for learning, discussing and working on AI-related and research enabling members to stay updated with the latest trends and development in the field. Through workshops, seminars and competitions, the club fosters a community of AI enthusiasts, encouraging collab, among its members.',
    },
    {
      imageUrl: gdscclub,
      text: 'GDSC Club',
      text2: 'GDSC club at NITC is a community group for students who are interested in learning and applying Google Developer technologies. The club is part of the Google Developer Student Clubs (GDSC) program, which aims to empower student developers in universities to impact their student communities through technology. The club organizes events, workshops, and projects on topics such as Android App Development, Google Cloud, Flutter and more. The club also helps students to build solutions for real, local or global issues using Google technologies. The club is led by a GDSC lead, who is a student with foundational knowledge about software development and passion for leading a community of developers.',
    },
    {
      imageUrl: aerounwiredclub,
      text: 'Team AEROUNWIRED',
      text2: 'AeroUnwired is an aero-modelling club, a branch of Club Unwired, found by students of NITC who aspired to harness the knowledge of flight. Inspired by the magnificent creatures with wings and technical aspects of the same, this club puts effort to build aircrafts and study the science of flight. The club offers knowledge to those who seek and invest their time in innovation. With a classical workspace to work & supportive faculty members and seniors, this club welcomes all those who wish to learn.',
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div>
      <div className="image-container">
        {imagesData.map((data, index) => (
          <div key={index} className="image-wrapper" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
          <img src={data.imageUrl} alt={``} className="no-effect-image" />
            <div className="know-more-overlay">
              <p className="know-more-text" style={{ color: 'white' }}>{data.text}</p>
              {hoveredIndex === index && (
                <div className="know-more-details">
                  <p>{data.text2}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bootcamp;
