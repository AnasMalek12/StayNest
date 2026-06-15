const User = require("../models/user");

//renderSignUp
module.exports.renderSignUp = (req, res) => {
  res.render("users/signup.ejs");
};

//signUp
module.exports.signUp = async (req, res, next) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", `Hey ${username} Welcome to StayNest!`);
      res.redirect("/listings");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
};

//renderLogIn
module.exports.renderLogIn = (req, res) => {
  res.render("users/login.ejs");
};

//login
module.exports.logIn = async (req, res) => {
  req.flash("success", `Hey ${req.user.username} Welcomeback to StayNest!`);
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

//logOut
module.exports.logOut = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "logged you out!");
    res.redirect("/login");
  });
};
