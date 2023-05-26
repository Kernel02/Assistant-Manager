const router = require('express').Router();
const path = require('path');


// route to get to the homepage
router.get('/', async (req, res) => {
    res.render('homepage.handlebars');
});




module.exports = router;