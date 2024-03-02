// const mongoose = require("mongoose");

// const interviewSchema = new mongoose.Schema(
//   {
//     userid: {
//       type: String,
//       required: true,
//     },
//     CompanyName: {
//       type: String,
//       required: [true, "Company Name is required"],
//     },
//      StudentName: {
//       type: String,
//       required: [true, "StudentName is required"],
//     },
//     date: {
//       type: Date,
//       required: [true, "date is required"],
//     },
//     time: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// const interviewModel = mongoose.model("interviewModel", interviewSchema);
// module.exports = interviewModel;

const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    CompanyName: {
      type: String,
      required: [true, "Company Name is required"],
    },
    StudentName: {
      type: String,
      required: [true, "Student Name is required"],
    },
    date: {
      type: Date,
      required: [true, "Date is required"],
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const interviewModel = mongoose.model("interviewModel", interviewSchema);
module.exports = interviewModel;
