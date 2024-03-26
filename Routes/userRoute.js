const express = require("express");
const {
  loginController,
  registerController,
  print,
} = require("../Controler/userController");

//router object
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




module.exports = router;
