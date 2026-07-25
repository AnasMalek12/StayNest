const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing");

router.get(
  "/",
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({}).limit(4);
    res.render("listings/landing", { allListings });
  }),
);

module.exports = router;
