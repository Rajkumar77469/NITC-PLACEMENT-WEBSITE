const express = require('express');
const router = express.Router();
const {
    forgotPassword,resetPassword
}=require("../Controler/passwordcontroller")

// Forgot password route
router.post('/reset-password/:id/:token', resetPassword);
router.post('/forgot-password', forgotPassword);
module.exports = router;
