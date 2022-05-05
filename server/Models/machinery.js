const mongoose = require("mongoose");

const machinerySchema = new mongoose.Schema(
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

const Machinery = mongoose.model("machinery", machinerySchema);
module.exports = Machinery;
