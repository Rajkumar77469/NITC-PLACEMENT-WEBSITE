const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");
const bodyParser = require('body-parser');
const connectDb = require("./Config/connectDb");
// config dot env file
//  const  pdfDetails=require("./Model/PdfDetails");
dotenv.config();

//databse call
connectDb();

//rest object
const app = express();
app.use(bodyParser.json());
//middlewares
app.use(express.json());
app.use(cors());

//routes



//multer------------------------------------------------------------
// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./files");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now();
//     cb(null, uniqueSuffix + file.originalname);
//   },
// });


// const PdfSchema = mongoose.model("pdfDetails");
// const upload = multer({ storage: storage });

// app.post("/api/v1/upload-files", upload.single("file"), async (req, res) => {
//   console.log(req.file);
//   const title = req.body.title;
//   const fileName = req.file.filename;
//   try {
//     await PdfSchema.create({ title: title, pdf: fileName });
//     res.send({ status: "ok" });
//   } catch (error) {
//     res.json({ status: error });
//   }
// });

// app.get("/api/v1/get-files", async (req, res) => {
//   try {
//     PdfSchema.find({}).then((data) => {
//       res.send({ status: "ok", data: data });
//     });
//   } catch (error) {}
// });



//user routes
app.use("/api/v1/users", require("./Routes/userRoute"));
app.use("/api/v1/students", require("./Routes/studentroutes"));
app.use("/api/v1/company",require("./Routes/companyroutes"));
app.use("/api/v1/interviews",require("./Routes/interviewroutes"));
app.use("/api/v1/forget",require("./Routes/forgotpasswordroute"));
// app.use("/api/v1/userhome",require("./Routes/userhomeroutes"));


 


//port 
const PORT = 8080 ;

//listen server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// "placementcell": "npm start --prefix placementcell",
// "dev": "concurrently \"npm start\" \"npm run placementcell\" "
// "proxy": "http://localhost:8080/api/v1",
//orignal hay