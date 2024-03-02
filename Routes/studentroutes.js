const express = require("express");
const {
  addstudent,
  getAllstudent,
  editstudent,
  deletestudent,
} = require("../Controler/studentcontroler");
const { getAllStudentNames }=require("../Controler/getallstudentscontroler")
//router object
const router = express.Router();

//routes
//add transection POST MEthod
router.post("/add-student", addstudent);
//Edit transection POST MEthod
router.post("/edit-student", editstudent);
//Delete transection POST MEthod
router.post("/delete-student", deletestudent);

//get transections
router.post("/get-student", getAllstudent);
router.get("/student-names", getAllStudentNames);
module.exports = router;
