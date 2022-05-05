const Machinery = require("../Models/machinery");

//Show List of Fertilizer
const showMachinery = async (req, res, next) => {
  Machinery.find()
    .then((response) => {
      return res.status(200).send({
        response,
      });
    })
    .catch((error) => {
      return res.status(500).send({
        message: error.message,
      });
    });
};





//Add Fertilizers
const addMachinery = async (req, res, next) => {
  let fertilizer = new Machinery({
    name:req.body.name,
    price:req.body.price,
    desc:req.body.desc,
    quantity:req.body.quantity,
  });
  fertilizer
    .save()
    .then((product) => {
      return res.status(200).send({
        message: product,
      });
    })
    .catch((error) => {
      return res.status(500).send({
        message: error.message,
      });
    });
};

//Update Fertilizer
const updateMachinery = async (req, res, next) => {
  let body = req.body;
  let updatedUser = {
    name: body.name,
    price: body.price,
    desc: body.desc,
    quantity: body.quantity
  };
  Machinery.findByIdAndUpdate(body.machineryId, { $set: updatedUser })
    .then((user) => {
      return res.status(200).send({
        
        message: "Updated Details Successfully",
      });
    })
    .catch((error) => {
      return res.status(500).send({
        message: error.message,
      });
    });
};

//Delete a Fertilizer
const deleteMachinery = async (req, res, next) => {
  let machineryId = req.body.machineryId;
  Machinery.findByIdAndRemove(machineryId)
    .then((product) => {
      return res.status(200).send({
        message: product,
      });
    })
    .catch((error) => {
      return res.status(500).send({
        message: error.message,
      });
    });
};

module.exports = {
  showMachinery,
  deleteMachinery,
  addMachinery,
  updateMachinery
};
