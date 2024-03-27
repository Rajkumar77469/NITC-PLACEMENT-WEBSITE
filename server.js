const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");
const connectDb = require("./Config/connectDb");
// config dot env file
dotenv.config();

//databse call
connectDb();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//routes
//user routes
app.use("/api/v1/users", require("./Routes/userRoute"));
app.use("/api/v1/students", require("./Routes/studentroutes"));
app.use("/api/v1/company",require("./Routes/companyroutes"));
app.use("/api/v1/interviews",require("./Routes/interviewroutes"));
app.use("/api/v1/",require("./Routes/userhomeroutes"));


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