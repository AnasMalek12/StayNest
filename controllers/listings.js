const Listing = require("../models/listing");

//Index
module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
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
  res.render("listings/show.ejs", { listing });
};

//createListing
module.exports.createListing = async (req, res) => {
  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
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

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

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
