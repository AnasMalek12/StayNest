const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const ListingController = require("../controllers/listings.js");

//Index & Create Route
router
  .route("/")
  .get(wrapAsync(ListingController.index))
  .post(
    isLoggedIn,
    validateListing,
    wrapAsync(ListingController.createListing),
  );

//New Route
router.get("/new", isLoggedIn, ListingController.new);

//Show - Update & Delete Route
router
  .route("/:id")
  .get(wrapAsync(ListingController.showListing))
  .put(
    validateListing,
    isLoggedIn,
    isOwner,
    wrapAsync(ListingController.updateListing),
  )
  .delete(isLoggedIn, isOwner, wrapAsync(ListingController.deleteListing));

//Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(ListingController.editListing),
);

module.exports = router;
