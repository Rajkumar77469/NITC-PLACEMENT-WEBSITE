// const Student = require("../Model/studentmodel");

// // Controller method to fetch all student names
// exports.getAllStudentNames = async (req, res) => {
//   try {
//     const students = await Student.find({}, "Name");
//     const studentNames = students.map(student => student.Name);
//     res.json({ studentNames });
//   } catch (error) {
//     // console.error("Error fetching student names:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };


const Student = require("../Model/studentmodel");

// Controller method to fetch all student names
exports.getAllStudentNames = async (req, res) => {
  try {
    const students = await Student.find({}, "Name");
    const studentNames = students.map(student => student.Name);
    res.json({ studentNames });
  } catch (error) {
    console.error("Error fetching student names:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getAllEnrollment = async (req, res) => {
  try {
    const students = await Student.find({}, "Enrollment");
    const studentEnrollment = students.map(student => student.Enrollment);
    res.json({ studentEnrollment });
  } catch (error) {
    console.error("Error fetching student Enrollment:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


exports.getAllEmail = async (req, res) => {
  try {
    const students = await Student.find({}, "Email");
    const studentEmail = students.map(student => student.Email);
    res.json({ studentEmail });
  } catch (error) {
    console.error("Error fetching student Email:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};