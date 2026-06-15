const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const usersController = require("../controllers/users.js");

//render-SignUp
router
  .route("/signup")
  .get(usersController.renderSignUp)
  .post(wrapAsync(usersController.signUp));

//render-logIn
router
  .route("/login")
  .get(usersController.renderLogIn)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    wrapAsync(usersController.logIn),
  );

//logOut Route
router.get("/logout", usersController.logOut);

module.exports = router;
