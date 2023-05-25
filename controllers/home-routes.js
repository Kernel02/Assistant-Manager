const router = require('express').Router();


// route to get to the homepage
router.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '../views/homepage.handlebars'));
})




module.exports = router;