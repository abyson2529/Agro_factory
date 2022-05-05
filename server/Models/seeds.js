const mongoose = require("mongoose");

const seedSchema = new mongoose.Schema(
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

const Seed = mongoose.model("seed", seedSchema);
module.exports = Seed;
