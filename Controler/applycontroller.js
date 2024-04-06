// const Student = require('../Model/studentmodel'); // Assuming you have a Student model defined
// const fs = require('fs');
// const ExcelJS = require('exceljs');

// const applycontroler = async (req, res) => {
//   const { companyName, userEmail } = req.body;

//   try {
//     // Find the student by email
//     const student = await Student.findOne({ email: userEmail });

//     // If student is found, update their status and save the application details
//     if (student) {
//       // Update student's status
//       student.status = 'Applied';
//       await student.save();

//       // Save application details to the database (if required)
//       // Example: You might have an Applications model where you save application details
//       // const application = new Application({ companyName, studentId: student._id });
//       // await application.save();

//       // Respond with success message
//       return res.status(200).json({ message: 'Application submitted successfully' });
//     } else {
//       // If student is not found, respond with a 404 error
//       return res.status(404).json({ message: 'Student not found' });
//     }
//   } catch (error) {
//     // If any error occurs during the process, respond with a 500 error
//     console.error('Error applying to company:', error);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// };

// const saveexcel = async (req, res) => {
//   const { companyName, ...studentDetails } = req.body;

//   try {
//     // Load existing workbook if exists, otherwise create a new one
//     let workbook;
//     if (fs.existsSync(`${companyName}.xlsx`)) {
//       workbook = await new ExcelJS.Workbook().xlsx.readFile(`${companyName}.xlsx`);
//     } else {
//       workbook = new ExcelJS.Workbook();
//     }
    
//     // Get or create worksheet
//     let sheet = workbook.getWorksheet(companyName);
//     if (!sheet) {
//       sheet = workbook.addWorksheet(companyName);
//       sheet.addRow(['Name', 'Enrollment', 'Email', 'Gender', 'Mob', 'Branch', 'Address', 'Tenth', 'Twelfth', 'Cgpa']); // Adding headers
//     }

//     // Add student details
//     const values = Object.values(studentDetails);
//     sheet.addRow(values);

//     // Save workbook to file
//     await workbook.xlsx.writeFile(`${companyName}.xlsx`);

//     res.status(200).json({ message: 'Student details saved to Excel sheet' });
//   } catch (error) {
//     console.error('Error saving to Excel:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };


// // Save to Excel endpoint------------------------------------------------------------------------
// // const saveexcel = async (req, res) => {
// //   const { companyName, ...studentDetails } = req.body;

// //   try {
// //     // Load existing workbook if exists, otherwise create a new one
// //     let workbook;
// //     if (fs.existsSync(`${companyName}.xlsx`)) {
// //       workbook = await new ExcelJS.Workbook().xlsx.readFile(`${companyName}.xlsx`);
// //     } else {
// //       workbook = new ExcelJS.Workbook();
// //     }
    
// //     // Get or create worksheet
// //     let sheet = workbook.getWorksheet(companyName);
// //     if (!sheet) {
// //       sheet = workbook.addWorksheet(companyName);
// //       sheet.addRow(['Name', 'Enrollment', 'Email', 'Gender', 'Mob', 'Branch', 'Address', 'Tenth', 'Twelfth', 'Cgpa']); // Adding headers
// //     }

// //     // Add student details
// //     const values = Object.values(studentDetails);
// //     sheet.addRow(values);

// //     // Save workbook to file
// //     await workbook.xlsx.writeFile(`${companyName}.xlsx`);

// //     res.status(200).json({ message: 'Student details saved to Excel sheet' });
// //   } catch (error) {
// //     console.error('Error saving to Excel:', error);
// //     res.status(500).json({ message: 'Internal server error' });
// //   }
// // };-----------------------------------------------------------------------------------------------


//   // Save to Excel endpoint
// //  const saveexcel= async (req, res) => {
// //     const { companyName, ...studentDetails } = req.body;
  
// //     try {
// //       // Load existing workbook if exists, otherwise create a new one
// //       let workbook;
// //       if (fs.existsSync(`${companyName}.xlsx`)) {
// //         workbook = await ExcelJS.Workbook().xlsx.readFile(`${companyName}.xlsx`);
// //       } else {
// //         workbook = new ExcelJS.Workbook();
// //       }
      
// //       // Get or create worksheet
// //       let sheet = workbook.getWorksheet(companyName);
// //       if (!sheet) {
// //         sheet = workbook.addWorksheet(companyName);
// //         sheet.addRow(['Name', 'Enrollment', 'Email', 'Gender', 'Mob', 'Branch', 'Address', 'Tenth', 'Twelfth', 'Cgpa']); // Adding headers
// //       }
  
// //       // Add student details
// //       const values = Object.values(studentDetails);
// //       sheet.addRow(values);
  
// //       // Save workbook to file
// //       await workbook.xlsx.writeFile(`${companyName}.xlsx`);
  
// //       res.status(200).json({ message: 'Student details saved to Excel sheet' });
// //     } catch (error) {
// //       console.error('Error saving to Excel:', error);
// //       res.status(500).json({ message: 'Internal server error' });
// //     }
// //   };
  
// const addToExcelController = async (req, res) => {
//   const { companyName, ...studentDetails } = req.body;

//   try {
//     // Load existing workbook if exists, otherwise create a new one
//     let workbook;
//     const filePath = `${companyName}.xlsx`;
//     if (fs.existsSync(filePath)) {
//       workbook = await new ExcelJS.Workbook().xlsx.readFile(filePath);
//     } else {
//       workbook = new ExcelJS.Workbook();
//       workbook.addWorksheet(companyName).addRow(['Name', 'Enrollment', 'Email', 'Gender', 'Mob', 'Branch', 'Address', 'Tenth', 'Twelfth', 'Cgpa']); // Adding headers
//     }

//     // Get or create worksheet
//     let sheet = workbook.getWorksheet(companyName);

//     // Add student details
//     const values = Object.values(studentDetails);
//     sheet.addRow(values);

//     // Save workbook to file
//     await workbook.xlsx.writeFile(filePath);

//     res.status(200).json({ message: 'Student details added to Excel sheet' });
//   } catch (error) {
//     console.error('Error adding to Excel:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };
// const createExcelSheetController = async (req, res) => {
//   const { companyName } = req.body;

//   try {
//     // Create a new workbook
//     const workbook = new ExcelJS.Workbook();
    
//     // Add worksheet
//     const sheet = workbook.addWorksheet(companyName);
//     sheet.addRow(['Name', 'Enrollment', 'Email', 'Gender', 'Mob', 'Branch', 'Address', 'Tenth', 'Twelfth', 'Cgpa']); // Adding headers

//     // Save workbook to file
//     await workbook.xlsx.writeFile(`${companyName}.xlsx`);

//     res.status(200).json({ message: `Excel sheet created for ${companyName}` });
//   } catch (error) {
//     console.error('Error creating Excel sheet:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };


// const getExcelSheet = async (req, res) => {
//   const companyName = req.params.companyName;

//   try {
//     // Check if the Excel sheet exists
//     const filePath = `${companyName}.xlsx`;
//     if (!fs.existsSync(filePath)) {
//       return res.status(404).json({ message: `Excel sheet for ${companyName} not found` });
//     }

//     // Read the Excel sheet and send it as response
//     const workbook = await new ExcelJS.Workbook().xlsx.readFile(filePath);
//     const buffer = await workbook.xlsx.writeBuffer();
//     res.set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
//     res.set('Content-Disposition', `attachment; filename="${companyName}.xlsx"`);
//     res.send(Buffer.from(buffer));
//   } catch (error) {
//     console.error('Error retrieving Excel sheet:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };
// module.exports = {
//   applycontroler,
//     saveexcel,
//     addToExcelController,
//   createExcelSheetController,
//   getExcelSheet,
//   };
  












const Student = require('../Model/studentmodel'); // Assuming you have a Student model defined
const fs = require('fs');
const ExcelJS = require('exceljs');

const applycontroler = async (req, res) => {
  const { companyName, userEmail } = req.body;

  try {
    // Find the student by email
    const student = await Student.findOne({ email: userEmail });

    // If student is found, update their status and save the application details
    if (student) {
      // Update student's status
      student.status = 'Applied';
      await student.save();

      // Save application details to the database (if required)
      // Example: You might have an Applications model where you save application details
      // const application = new Application({ companyName, studentId: student._id });
      // await application.save();

      // Respond with success message
      return res.status(200).json({ message: 'Application submitted successfully' });
    } else {
      // If student is not found, respond with a 404 error
      return res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    // If any error occurs during the process, respond with a 500 error
    console.error('Error applying to company:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


// Save to Excel endpoint
const saveexcel = async (req, res) => {
  const { companyName, ...studentDetails } = req.body;

  try {
    // Load existing workbook if exists, otherwise create a new one
    let workbook = new ExcelJS.Workbook();
    if (fs.existsSync(`${companyName}.xlsx`)) {
      workbook = await new ExcelJS.Workbook().xlsx.readFile(`${companyName}.xlsx`);
    }

    // Get or create worksheet
    let sheet = workbook.getWorksheet(companyName);
    if (!sheet) {
      sheet = workbook.addWorksheet(companyName);
      sheet.addRow(['Name', 'Enrollment', 'Email', 'Gender', 'Mob', 'Branch', 'Address', 'Tenth', 'Twelfth', 'Cgpa']); // Adding headers
    }

    // Add student details
    const values = Object.values(studentDetails);
    sheet.addRow(values);

    // Save workbook to file
    await workbook.xlsx.writeFile(`${companyName}.xlsx`);

    res.status(200).json({ message: 'Student details saved to Excel sheet' });
  } catch (error) {
    console.error('Error saving to Excel:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



  // Save to Excel endpoint
//  const saveexcel= async (req, res) => {
//     const { companyName, ...studentDetails } = req.body;
  
//     try {
//       // Load existing workbook if exists, otherwise create a new one
//       let workbook;
//       if (fs.existsSync(`${companyName}.xlsx`)) {
//         workbook = await ExcelJS.Workbook().xlsx.readFile(`${companyName}.xlsx`);
//       } else {
//         workbook = new ExcelJS.Workbook();
//       }
      
//       // Get or create worksheet
//       let sheet = workbook.getWorksheet(companyName);
//       if (!sheet) {
//         sheet = workbook.addWorksheet(companyName);
//         sheet.addRow(['Name', 'Enrollment', 'Email', 'Gender', 'Mob', 'Branch', 'Address', 'Tenth', 'Twelfth', 'Cgpa']); // Adding headers
//       }
  
//       // Add student details
//       const values = Object.values(studentDetails);
//       sheet.addRow(values);
  
//       // Save workbook to file
//       await workbook.xlsx.writeFile(`${companyName}.xlsx`);
  
//       res.status(200).json({ message: 'Student details saved to Excel sheet' });
//     } catch (error) {
//       console.error('Error saving to Excel:', error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   };
  
module.exports = {
  applycontroler,
    saveexcel,
  };
  