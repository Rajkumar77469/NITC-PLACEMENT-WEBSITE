 const express = require("express");
 const {
   addinterview,
   getAllinterview,
   editinterview,
   deleteinterview,
 } = require("../Controler/interviewcontroler");
 
 //router object
 const router = express.Router();
 
 //routes
 //add transection POST MEthod
 router.post("/add-interview",  addinterview);
 //Edit transection POST MEthod
 router.post("/edit-interview", editinterview);
 //Delete transection POST MEthod
 router.post("/delete-interview", deleteinterview);
 
 //get transections
 router.post("/get-interview", getAllinterview);
 
 module.exports = router;
 