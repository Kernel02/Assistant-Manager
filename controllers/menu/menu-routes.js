const router = require("express").Router();
const { Menu } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const menuData = await Menu.findAll({
      order: [["name", "ASC"]],
    });
    const menuItems = menuData.map((item) => item.get({ plain: true }));

    res
      .status(200)
      .render("menu-items", {
        menuItems,
        logged_in: req.sessionStore.logged_in,
      });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const menuData = await Menu.create({
      email: req.session.email,
      id: req.body.id,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      calory: req.body.calory,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
