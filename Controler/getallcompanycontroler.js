const Company= require("../Model/companymodel");

// Controller method to fetch all company names
exports.getAllCompanyNames = async (req, res) => {
  try {
    const companys = await Company.find({}, "CompanyName");
    const companyNames = companys.map(company => company.CompanyName);
    res.json({ companyNames });
  } catch (error) {
    console.error("Error fetching company names:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
