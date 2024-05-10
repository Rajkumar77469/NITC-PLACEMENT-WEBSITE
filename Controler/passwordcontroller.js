const nodemailer = require('nodemailer');
const UserModel = require('../Model/userModel')
const bcrypt = require('bcrypt');

// exports.forgotPassword = (req, res) => {
//     const { Email } = req.body;
//     UserModel.findOne({ email: Email })
//         .then(user => {
//             if (!user) {
//                 return res.send({ Status: "User not existed" })
//             }
          
//             var transporter = nodemailer.createTransport({
//                 service: 'gmail',
//                 auth: {
//                     user: 'youremail@gmail.com',
//                     pass: 'your password'
//                 }
//             });
            
//             var mailOptions = {
//                 from: 'youremail@gmail.com',
//                 to: user.email,
//                 subject: 'Reset Password Link',
//                 text: `/forget/reset-password/${user._id}`
//             };
            
//             transporter.sendMail(mailOptions, function(error, info){
//                 if (error) {
//                     console.log(error);
//                 } else {
//                     return res.send({ Status: "Success" })
//                 }
//             });
//         })
//         .catch(err => res.send({ Status: err }))
// };

// exports.resetPassword = (req, res) => {
//     const { id } = req.params;
//     const { password } = req.body;

//     bcrypt.hash(password, 10)
//         .then(hash => {
//             UserModel.findByIdAndUpdate({ _id: id }, { password: hash })
//                 .then(u => res.send({ Status: "Success" }))
//                 .catch(err => res.send({ Status: err }))
//         })
//         .catch(err => res.send({ Status: err }))
// };
const jwt=require("jsonwebtoken");
exports.resetPassword = (req, res) => {
const {id, token} = req.params
    const {password} = req.body

    jwt.verify(token, "123456789", (err, decoded) => {
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
        const token = jwt.sign({id: user._id}, "1234567879", {expiresIn: "1d"})
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'rajkumarrajput806@gmail.com',
              pass: 'gvxkaqvtghobsoug'
            }
          });
          
          var mailOptions = {
            from: 'rajkumarrajput806@gmail.com',
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









 