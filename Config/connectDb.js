const mongoose = require("mongoose");
const colors = require("colors");
require('dotenv').config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log(`Server Running On ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDb;

// mongodb+srv://rajkumarr:pNV3r3Dxf2E5Y3K7@cluster0.nbf5zhq.mongodb.net/atlas
 //   mongodb+srv://rajkumarrajput806:YGY64oatLEP5Ykf@cluster0.zeod0vq.mongodb.net/test
// mongodb+srv://rajkumarrajput806:YGY64oatLEP5Ykf@cluster0.zeod0vq.mongodb.net/test?retryWrites=true&w=majority
    // await mongoose.connect("mongodb+srv://rajkumarm210666ca:pFjrq15dd9896x28@cluster0.avtxlnk.mongodb.net/ccd");