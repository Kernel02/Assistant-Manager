const router = require('express').Router();


const employeeRoutes = require('./employee/employee-routes.js');
const homeRoutes = require('./home-routes.js');


router.use('/', homeRoutes);
router.use('/employee', employeeRoutes);


module.exports = router;