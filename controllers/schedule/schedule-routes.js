const router = require('express').Router();

router.get('employee', async (req, res) => {
    res.sendFile(path.join(__dirname, '../views/'))
});

module.exports = router;