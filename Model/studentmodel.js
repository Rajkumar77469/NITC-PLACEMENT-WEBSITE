// const mongoose = require("mongoose");

// const studentSchema = new mongoose.Schema(
//   {
//     userid: {
//       type: String,
//       required: true,
//     },
//     Name: {
//       type: String,
//       required: [true, "Name is required"],
//     },
//     Enrollment: {
//       type: String,
//       required: [true, "Enrollment is required"],
//     },
//     Email: {
//       type: String,
//       required: [true, "Email is required"],
//     },
//     Gender: {
//       type: String,
//       required: [true, "Gender is required"],
//     },
//     Mob: {
//       type: Number,
//       required: [true, "Mob is required"],
//     },
//     Branch: {
//       type: String,
//       required: [true, "Branch is required"],
//     },
//     Address: {
//       type: String,
//       required: [true, "Address is required"],
//     },
//     Tenth: {
//       type: Number,
//       required: [true, "Tenth Percentage is required"],
//     },
//     Twelth: {
//       type: Number,
//       required: [true, "Twelth Percentage is required"],
//     },
//     Graduation: {
//       type: Number,
//     },
//     Cgpa: {
//       type: Number,
//       required: [true, "CGPA is required"],
//     },
//     date: {
//       type: Date,
//       required: [true, "date is required"],
//     },
//     Dob:{
//       type: Date,
//       required: [true, "date  of birth is required"],
//     },
//     Status:{
//       type: String,
//       required: [true, "Placement Status is required"],
//     }
//   },
//   { timestamps: true }
// );

// const studentModel = mongoose.model("students", studentSchema);
// module.exports = studentModel;


const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    Name: {
      type: String,
      required: [true, "Name is required"],
    },
    Enrollment: {
      type: String,
      required: [true, "Enrollment is required"],
      unique: true, // Making Enrollment field unique
    },
    Email: {
      type: String,
      required: [true, "Email is required"],
      unique: true, // Making Email field unique
    },
    Gender: {
      type: String,
      required: [true, "Gender is required"],
    },
    Mob: {
      type: Number,
      required: [true, "Mob is required"],
    },
    Branch: {
      type: String,
      required: [true, "Branch is required"],
    },
    Address: {
      type: String,
      required: [true, "Address is required"],
    },
    Tenth: {
      type: Number,
      required: [true, "Tenth Percentage is required"],
    },
    Twelth: {
      type: Number,
      required: [true, "Twelth Percentage is required"],
    },
    Graduation: {
      type: Number,
    },
    Cgpa: {
      type: Number,
      required: [true, "CGPA is required"],
    },
    date: {
      type: Date,
      required: [true, "date is required"],
    },
    Dob: {
      type: Date,
      required: [true, "date  of birth is required"],
    },
    Status: {
      type: String,
      required: [true, "Placement Status is required"],
    }
  },
  { timestamps: true }
);

const studentModel = mongoose.model("students", studentSchema);
module.exports = studentModel;
