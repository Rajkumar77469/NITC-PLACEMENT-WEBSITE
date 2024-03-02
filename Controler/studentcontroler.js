const studentModel = require("../Model/studentmodel");
const moment = require("moment");
const getAllstudent = async (req, res) => {
  try {
    const { frequency, selectedDate, Branch,Status } = req.body;
    const transections = await studentModel.find({
      ...(frequency !== "custom"
        ? {
            date: {
              $gt: moment().subtract(Number(frequency), "d").toDate(),
            },
          }
        : {
            date: {
              $gte: selectedDate[0],
              $lte: selectedDate[1],
            },
          }),
      userid: req.body.userid,
      ...(Branch !== "all" && {Branch }),
      ...(Status !== "all" && {Status }),
    });
    res.status(200).json(transections);
  } catch (error) {
    console.log(error);
    res.status(500).json(erorr);
  }
};

const deletestudent = async (req, res) => {
  try {
    await studentModel.findOneAndDelete({ _id: req.body.transacationId });
    res.status(200).send("student Deleted!");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
const editstudent = async (req, res) => {
  try {
    await studentModel.findOneAndUpdate(
      { _id: req.body.transacationId },
      req.body.payload
    );
    res.status(200).send("Edit SUccessfully");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const addstudent = async (req, res) => {
  try {
    // const newTransection = new transectionModel(req.body);
    const newstudent = new studentModel(req.body);
    await newstudent.save();
    res.status(201).send("student Created");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  getAllstudent,
  addstudent,
  editstudent,
  deletestudent,
};
