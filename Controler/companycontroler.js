const companyModel = require("../Model/companymodel");
const moment = require("moment");
const getAllcompany = async (req, res) => {
  try {
    const { frequency, selectedDate, type } = req.body;
    const company = await companyModel.find({
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
      ...(type !== "all" && { type }),
    });
    res.status(200).json(company);
  } catch (error) {
    console.log(error);
    res.status(500).json(erorr);
  }
};

const deletecompany = async (req, res) => {
  try {
    await companyModel.findOneAndDelete({ _id: req.body.transacationId });
    res.status(200).send("company Deleted!");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
const editcompany = async (req, res) => {
  try {
    await companyModel.findOneAndUpdate(
      { _id: req.body.transacationId },
      req.body.payload
    );
    res.status(200).send("Edit SUccessfully");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const addcompany = async (req, res) => {
  try {
    // const newTransection = new transectionModel(req.body);
    const newcompany = new companyModel(req.body);
    await newcompany.save();
    res.status(201).send("company Created");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  getAllcompany,
  addcompany,
  editcompany,
  deletecompany,
};
