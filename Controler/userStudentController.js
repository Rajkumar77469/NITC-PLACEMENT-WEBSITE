// controllers/studentController.js


// const Student = require("../Model/studentmodel")

// const getStudentDetailsByEmail = async (req, res) => {
//   try {
//     const { Email } = req.params;
//     const student = await Student.findOne({ Email });

//     if (!student) {
//       return res.status(404).json({ error: 'Student not found' });
//     }

//     res.json({ student });
//   } catch (error) {
//     console.error('Error fetching student details:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// module.exports = { getStudentDetailsByEmail };

// const Student = require("../Model/studentmodel")
// const getStudentDetailsByEmail = async (req, res) => {
//   try {
//     const Email= req.params.Email;
//     // Perform a case-insensitive search by converting email to lowercase
//     const student = await Student.findOne({Email});
    
//     if (!student) {
//       return res.status(404).json({ error: 'Student not found' });
//     }

//     res.status(200).json({ student });
//   } catch (error) {
//     console.error('student you are fetching are not exsit:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// module.exports = {
//   getStudentDetailsByEmail
// };


const Student = require("../Model/studentmodel");
const Interview = require("../Model/interviewmodel");
exports.getStudentDetailsByEmail = async (req, res) => {
  try {
    const email = req.params.Email.toLowerCase(); // Convert email to lowercase
    const student = await Student.findOne({ Email: email });

    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    res.status(200).json({ student });
  } catch (error) {
    console.error('Error fetching student details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};






exports.getAllinterviewByEmail = async (req, res) => {
  try {
    const email = req.params.Email.toLowerCase(); // Convert email to lowercase
    const Interviews = await Interview.findOne({ Email: email });

    if (!Interviews) {
      return res.status(404).json({ error: 'Interview not found' });
    }

    res.status(200).json({ Interviews });
  } catch (error) {
    console.error('Error fetching Interview details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

