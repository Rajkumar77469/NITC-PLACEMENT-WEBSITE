const express = require("express");
const {
  addstudent,
  getAllstudent,
  editstudent,
  deletestudent,
} = require("../Controler/studentcontroler");
const { getAllStudentNames,getAllEnrollment,getAllEmail }=require("../Controler/getallstudentscontroler");
const { updateUserDetailsController,findAndUpdateDetailsController } = require("../Controler/updateusercontroller");
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
router.get("/student-Enrollment", getAllEnrollment);
router.get("/student-Email", getAllEmail);

router.get("/findandupdate-detials",findAndUpdateDetailsController);
router.put("/updateuserdetilas",updateUserDetailsController);

module.exports = router;
