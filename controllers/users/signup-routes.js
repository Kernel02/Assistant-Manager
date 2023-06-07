const router = require("express").Router();
const { User } = require("../../models");

router.get("/", async (req, res) => {
  res.render("signup.handlebars"), { logged_in: req.session.logged_in };
});

router.post("/", async (req, res) => {
  try {
    console.log("Hi");
    console.log(req.body);
    const userData = await User.create(req.body);
    console.log(userData);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

module.exports = router;
