const router = require('express').Router();


const employeeRoutes = require('./employee');
const homeRoutes = require('./home-routes.js');


router.use('/', homeRoutes);
router.use('/employee', employeeRoutes);


module.exports = router;