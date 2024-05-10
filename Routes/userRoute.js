const express = require("express");
const multer = require('multer')
const {
  loginController,
  registerController,
} = require("../Controler/userController");
const {getStudentDetailsByEmail,getAllinterviewByEmail}=require("../Controler/userStudentController");
const {applycontroler,saveexcel}=require("../Controler/applycontroller");
const { updateUserDetails } = require('../Controler/updateusercontroller');
const {uploadResume,deleteResume,getUserResume}=require("../Controler/resumecontroller")
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
 router.get("/student-interview-details/:Email", getAllinterviewByEmail);
 router.post("/appliedcompany",applycontroler);
 router.post("/save-to-excel",saveexcel);
 router.put("/update", updateUserDetails);

 const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Directory where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use original file name
  }
});

const upload = multer({ storage });

// Routes
router.post('/upload-resume', upload.single('file'), uploadResume);
router.delete('/delete-resume/:userId', deleteResume);
router.get('/get-user-resume/:userId', getUserResume)

module.exports = router;

// userRoutes.js





