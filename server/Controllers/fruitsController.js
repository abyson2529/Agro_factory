const Fruit = require("../Models/fruits");

//Show List of Fruits
const showFruit = async (req, res, next) => {
  Fruit.find()
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





//Add Fruits
const addFruit = async (req, res, next) => {
  let fertilizer = new Fruit({
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

//Update Fruit
const updateFruit = async (req, res, next) => {
  let body = req.body;
  let updatedUser = {
    name: body.name,
    price: body.price,
    desc: body.desc,
    quantity: body.quantity
  };
  Fruit.findByIdAndUpdate(body.fruitId, { $set: updatedUser })
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

//Delete a Fruit
const deleteFruit = async (req, res, next) => {
  let fruitId = req.body.fruitId;
  Fruit.findByIdAndRemove(fruitId)
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
  showFruit,
  deleteFruit,
  addFruit,
  updateFruit
};
