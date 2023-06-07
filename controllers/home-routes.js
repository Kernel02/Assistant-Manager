const router = require("express").Router();
const path = require("path");
const withAuth = require("../utils/auth");

// route to get to the homepage
router.get("/", async (req, res) => {
  res.render("homepage.handlebars", { logged_in: req.sessionStore.logged_in });
});

router.get("/", (req, res) => {
  if (req.sessionStore.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
