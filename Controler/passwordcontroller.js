const nodemailer = require('nodemailer');
const UserModel = require('../Model/userModel')
const bcrypt = require('bcrypt');

const jwt=require("jsonwebtoken");
exports.resetPassword = (req, res) => {
const {id, token} = req.params
    const {password} = req.body

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if(err) {
            return res.json({Status: "Error with token"})
        } else {
            bcrypt.hash(password, 10)
            .then(hash => {
                UserModel.findByIdAndUpdate({_id: id}, {password: hash})
                .then(u => res.send({Status: "Success"}))
                .catch(err => res.send({Status: err}))
            })
            .catch(err => res.send({Status: err}))
        }
    });
}

exports.forgotPassword = (req, res) => {
    const {Email} = req.body;
    UserModel.findOne({email: Email})
    .then(user => {
        if(!user) {
            return res.send({Status: "User not existed"})
        } 
        const token = jwt.sign({id: user._id}, process.env.SECRET_KEY, {expiresIn: "1d"})
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
            }

          });
          
          var mailOptions = {
            from: 'process.env.EMAIL_USER',
            to: 'rajkumarrajput805@gmail.com',
            subject: 'Reset Password Link',
            text: `/forget/reset-password/${user._id}/${token}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              return res.send({Status: "Success"})
            }
          });
    });
}









 