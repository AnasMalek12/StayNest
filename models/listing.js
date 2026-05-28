const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

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
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
