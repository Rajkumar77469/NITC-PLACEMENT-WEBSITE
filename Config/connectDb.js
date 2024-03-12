const mongoose = require("mongoose");
const colors = require("colors");
const connectDb = async () => {
  try {

 
    await mongoose.connect("put your database link");

    console.log(`Server Running On ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDb;
// mongodb+srv://rajkumarr:pNV3r3Dxf2E5Y3K7@cluster0.nbf5zhq.mongodb.net/atlas
