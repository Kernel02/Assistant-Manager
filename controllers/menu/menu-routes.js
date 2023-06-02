const router = require('express').Router();
const { Menu } = require('../../models');


router.get("/", async (req, res) => {
    try {
        const menuData = await Menu.findAll({
            order: [
                ["name", "ASC"]
            ],
        });
        const menu = menuData.map((menu) =>
        menu.get({ plain: true}) 
        );


        res.status(200).render("menu-items", {
            menu });
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;