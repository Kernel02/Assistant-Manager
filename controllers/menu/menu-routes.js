const router = require('express').Router();
const { Menu } = require('../../models');


router.get("/", async (req, res) => {
    try {
        const menuData = await Menu.findAll({
            order: [
                ["name", "ASC"],
            ],
        });
        const menu = menuData.map((item) =>
        item.get({ plain: true}) 
        );


        res.status(200).render("menu-items", {
        menu });

    } catch (err) {
        res.status(500).json(err);
    }
});




router.post("/", async (req,res) => {
    try {
        await Menu.create({
            id: req.body.id,
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            calory: req.body.calory,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete('/:id', async(req,res) => { 
    try {
        const menuData = await Menu.destroy({
            where: {
                id: req.params.id,
            }
        });
        res.status(200).json(menuData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;