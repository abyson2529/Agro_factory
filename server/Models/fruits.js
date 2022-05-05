const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: String,
    },
    desc: {
      type: String,
    },
    quantity:{
        type: String
    }
  },
  { timestamps: true }
);

const Fruit = mongoose.model("fruit", fruitSchema);
module.exports = Fruit;
