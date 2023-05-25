const router = require('express').Router();


router.get('/menu', async (req, res) => {
    res.sendFile(path.join(__dirname, '../views/'));
});