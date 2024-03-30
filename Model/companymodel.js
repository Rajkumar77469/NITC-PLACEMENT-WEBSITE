const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    CompanyName: {
      type: String,
      required: [true, "Company Name is required"],
    },
    Description: {
      type: String,
    },
    CTC: {
      type: Number,
      required: [true, "Email is required"],
    },
    date: {
      type: Date,
      required: [true, "date is required"],
    },
    Tenth:{
      type:Number,
    },
    Twelth:{
      type:Number,
    },
    Graduation:{
      type:Number,
    },
    Cgpa:{
      type:Number,
    }
  },
  { timestamps: true }
);

const companyModel = mongoose.model("companies", companySchema);
module.exports = companyModel;
