// const Company= require("../Model/companymodel");

// // Controller method to fetch all company names
// exports.getStudentcompany = async (req, res) => {
//   try {
//     const companys = await Company.find({}, "CompanyName");
//     const companyNames = companys.map(company => company.CompanyName);
//     res.json({ companyNames });
//   } catch (error) {
//     console.error("Error fetching company names:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };



// const Company= require("../Model/companymodel");

// // Controller method to fetch all company names
// exports.getStudentcompany= async (req, res) => {
//   try {
//     const companys = await Company.find({});
//     const companyNamespura = companys.map(company => {
//         return {
//           CompanyName: company.CompanyName,
//           CTC: company.CTC,
//           Description: company.Description,
//           Date:company.date,
//           Tenth:company.Tenth,
//           Twelth:company.Twelth,
//           Graduation:company.Graduation,
//           Cgpa:company.Cgpa,
          
//           // Add more fields here as needed
//         };
//       });
//   } catch (error) {
//     console.error("Error fetching company names:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };


/////
const Company = require("../Model/companymodel");

// Controller method to fetch all company names
exports.getStudentcompany = async (req, res) => {
  try {
    const companys = await Company.find({});
    const companyNamespura = companys.map(company => ({
      CompanyName: company.CompanyName,
      CTC: company.CTC,
      Description: company.Description,
      Date: company.date,
      Tenth: company.Tenth,
      Twelth: company.Twelth,
      Graduation: company.Graduation,
      Cgpa: company.Cgpa,
      // Add more fields here as needed
    }));
    res.json({ companys: companyNamespura }); // Sending the array of company details as response
  } catch (error) {
    console.error("Error fetching company names:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
