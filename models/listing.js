const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,

  image: {
    url: {
      type: String,
      default: "https://images4.bovpg.net/r/back/uk/sale/4f0af16d68d487.jpg",
    },
    filename: {
      type: String,
      default: "listingimage",
    },
  },

  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
