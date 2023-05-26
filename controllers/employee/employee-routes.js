const router = require('express').Router();
const employees = []

router.get('/employee', async (req, res) => {
    res.render('all')
});

module.exports = router;