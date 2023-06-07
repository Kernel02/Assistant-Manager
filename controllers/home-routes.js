const router = require("express").Router();
const path = require("path");
const withAuth = require("../utils/auth");

// route to get to the homepage
router.get("/", async (req, res) => {
  console.log(req.session);
  res.render("homepage.handlebars", { logged_in: req.session.logged_in });
});

router.get("/", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
