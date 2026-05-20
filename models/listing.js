const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
  },
  description: String,

  image: {
    type: String,
    set: (v) =>
      v === ""
        ? "https://static.vecteezy.com/system/resources/thumbnails/046/884/985/small_2x/illustration-of-two-houses-in-a-suburban-neighborhood-with-a-checklist-in-front-of-the-main-house-the-scene-depicts-a-sunny-day-with-green-trees-and-clouds-in-the-sky-free-vector.jpg"
        : v,
  },

  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
