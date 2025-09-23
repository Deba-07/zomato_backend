const mongoose = require("mongoose");

const foodPartnerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const foodPertnerModel = mongoose.model("foodPartner", foodPartnerSchema);

module.exports = foodPertnerModel;
