const mongoose = require("mongoose");

// Define a schema for the PDF details
const PdfDetailsSchema = new mongoose.Schema({
  pdf: { type: String, required: true }, // Define pdf field as a required string
  title: { type: String, required: true } // Define title field as a required string
});

// Create a model based on the schema
const PdfDetail = mongoose.model("PdfDetail", PdfDetailsSchema);

module.exports = PdfDetail;