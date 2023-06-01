
const router = require('express').Router();
const meals = [ {

}];


router.get('/menu', async (req, res) => {
    res.render('all');
});

module.exports = router;