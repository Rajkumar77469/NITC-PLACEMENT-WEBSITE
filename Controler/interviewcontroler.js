const interviewModel = require("../Model/interviewmodel");
const moment = require("moment");
const getAllinterview = async (req, res) => {
  try {
    const { frequency, selectedDate} = req.body;
    const transections = await interviewModel.find({
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
    });
    res.status(200).json(transections);
  } catch (error) {
    console.log(error);
    res.status(500).json(erorr);
  }
};


const deleteinterview = async (req, res) => {
  try {
    await interviewModel.findOneAndDelete({ _id: req.body.transacationId });
    res.status(200).send("interview Deleted!");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
const editinterview = async (req, res) => {
  try {
    await interviewModel.findOneAndUpdate(
      { _id: req.body.transacationId },
      req.body.payload
    );
    res.status(200).send("Edit SUccessfully");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const addinterview = async (req, res) => {
  try {
    // const newTransection = new transectionModel(req.body);
    const newinterview = new interviewModel(req.body);
    await newinterview.save();
    res.status(201).send("interview Created");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  getAllinterview,
  addinterview,
  editinterview,
  deleteinterview,
};
