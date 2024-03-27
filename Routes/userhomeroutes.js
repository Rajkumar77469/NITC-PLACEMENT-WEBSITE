// routes/userStudentRoute.js
// routes/studentRoute.js


const express = require('express');
const router = express.Router();
const studentController = require('../Controler/userStudentController');

router.get('/student-details/:Email', studentController.getStudentDetailsByEmail);

module.exports = router;
