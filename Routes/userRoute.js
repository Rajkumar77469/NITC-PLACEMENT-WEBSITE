const express = require("express");
const {
  loginController,
  registerController,
} = require("../Controler/userController");
const {getStudentDetailsByEmail}=require("../Controler/userStudentController");
const {applycontroler,saveexcel}=require("../Controler/applycontroller");
//router object=
const router = express.Router();

//routers
// POST || LOGIN USER
router.post("/login", loginController);
// router
//   .route("/login")
//   .post(validate(signupSchema), loginController);

//POST || REGISTER USER
router.post("/register", registerController);
// router
//   .route("/register")
//   .post(validate(signupSchema), registerController);

 router.get("/student-details/:Email", getStudentDetailsByEmail);
 router.post("/appliedcompany",applycontroler);
 router.post("/save-to-excel",saveexcel);
//  router.post('/add-to-excel/:companyName', addToExcelController);
// router.post('/create-excel-sheet', createExcelSheetController);
// router.get('/excel-sheet/:companyName', getExcelSheet);
module.exports = router;
