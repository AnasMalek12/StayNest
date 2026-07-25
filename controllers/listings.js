const Listing = require("../models/listing");
const { Client } = require("@googlemaps/google-maps-services-js");
// Initialize the Google Maps Client
const mapClient = new Client({});

//Index
module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

//searchListings
module.exports.searchListings = async (req, res) => {
  const search = req.query.search?.trim();

  let filter = {};

  if (search) {
    filter.title = {
      $regex: search,
      $options: "i",
    };
  }

  const listings = await Listing.find(filter);

  res.json(listings);
};

//new
module.exports.new = (req, res) => {
  return res.render("listings/new.ejs");
};

//showListing
module.exports.showListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "The listing you're looking for could not be found.");
    return res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing, mapToken: process.env.MAP_TOKEN });
};

//createListing
module.exports.createListing = async (req, res) => {
  // 1. Ping the Google Maps API
  let response = await mapClient.geocode({
    params: {
      address: `${req.body.listing.location}, ${req.body.listing.country}`,
      key: process.env.MAP_TOKEN,
    },
    timeout: 1000,
  });
  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  // 2. Extract coordinates and save in GeoJSON format (Lng, Lat)
  if (response.data.results.length > 0) {
    const location = response.data.results[0].geometry.location;
    newListing.geometry = {
      type: "Point",
      coordinates: [location.lng, location.lat],
    };
  } else {
    //fallback if the geocoding fails
    newListing.geometry = { type: "Point", coordinates: [0, 0] };
  }
  await newListing.save();
  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
};

//editListing
module.exports.editListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "The listing you're looking for could not be found.");
    return res.redirect("/listings");
  }
  res.render("listings/edit.ejs", { listing });
};

//updateListing
module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  // Update Geometry if the user edits the location
  let response = await mapClient.geocode({
    params: {
      address: `${req.body.listing.location}, ${req.body.listing.country}`,
      key: process.env.MAP_TOKEN,
    },
    timeout: 1000,
  });

  if (response.data.results.length > 0) {
    const location = response.data.results[0].geometry.location;
    listing.geometry = {
      type: "Point",
      coordinates: [location.lng, location.lat],
    };
  }

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
  }
  await listing.save();
  req.flash("success", "Listing Updated Successfully!");
  res.redirect("/listings");
};

//deleteListing
module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted Successfully!");
  res.redirect("/listings");
};
