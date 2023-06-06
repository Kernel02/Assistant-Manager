const router = require('express').Router();
const path = require('path');
const withAuth = require('../utils/auth');


// route to get to the homepage
router.get('/', async (req, res) => {
    res.render('homepage.handlebars');
});


router.get('/' , (req, res) => {
    if (req.sessionStore.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});



module.exports = router;