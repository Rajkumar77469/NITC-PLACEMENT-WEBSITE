
 

 const express = require("express");
 const {
   addcompany,
   getAllcompany,
   editcompany,
   deletecompany,
 } = require("../Controler/companycontroler");
 
 //router object
 const router = express.Router();
 const { getAllCompanyNames }=require("../Controler/getallcompanycontroler")
 const{getStudentcompany}=require("../Controler/getStudentcompanyController");
 //routes
 //add transection POST MEthod
 router.post("/add-company",  addcompany);
 //Edit transection POST MEthod
 router.post("/edit-company", editcompany);
 //Delete transection POST MEthod
 router.post("/delete-company", deletecompany);
 
 //get transections
 router.post("/get-company", getAllcompany);
 router.get("/company-names", getAllCompanyNames);
 router.get("/student-company",getStudentcompany)
 module.exports = router;
 