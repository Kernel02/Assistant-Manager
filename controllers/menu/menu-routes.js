const router = require("express").Router();
const { Menu } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const menuData = await Menu.findAll({
      order: [["name", "ASC"]],
    });
    const menuItems = menuData.map((item) => item.get({ plain: true }));
    console.log(menuData);
    console.log(menuItems);

    res.status(200).render("menu-items", { menuItems });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
