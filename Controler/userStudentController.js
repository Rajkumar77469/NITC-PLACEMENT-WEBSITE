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

const Student = require("../Model/studentmodel")
const getStudentDetailsByEmail = async (req, res) => {
  try {
    const Email= req.params.Email;
    // Perform a case-insensitive search by converting email to lowercase
    const student = await Student.findOne({Email});
    
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    res.status(200).json({ student });
  } catch (error) {
    console.error('Error fetching student details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getStudentDetailsByEmail
};

