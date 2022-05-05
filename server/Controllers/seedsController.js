const Seed = require("../Models/seeds");

//Show List of Fertilizer
const showSeed = async (req, res, next) => {
  Seed.find()
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
const addSeed = async (req, res, next) => {
  let fertilizer = new Seed({
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
const updateSeed = async (req, res, next) => {
  let body = req.body;
  let updatedUser = {
    name: body.name,
    price: body.price,
    desc: body.desc,
    quantity: body.quantity
  };
  Seed.findByIdAndUpdate(body.seedId, { $set: updatedUser })
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
const deleteSeed = async (req, res, next) => {
  let seedId = req.body.seedId;
  Seed.findByIdAndRemove(seedId)
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
  showSeed,
  deleteSeed,
  addSeed,
  updateSeed
};
