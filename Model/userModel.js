// const mongoose = require("mongoose");

// //schema design
// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, "name is required"],
//     },
//     email: {
//       type: String,
//       required: [true, "email is required and should be unique"],
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: [true, "password is required"],
//     },
//   },
//   { timestamps: true }
// );

// //export
// const userModel = mongoose.model("users", userSchema);
// module.exports = userModel;
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, "name is require"],
  },
  Email: {
    type: String,
    required: [true, "email is require"],
  },
  password: {
    type: String,
    required: [true, "password is require"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  notifcation: {
    type: Array,
    default: [],
  },
  seennotification: {
    type: Array,
    default: [],
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
