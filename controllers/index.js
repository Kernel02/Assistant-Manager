const router = require('express').Router();

const homeRoutes = require('./home-routes.js');
const employeeRoutes = require('./employee/employee-routes.js');
const menuRoutes = require('./menu/menu-routes.js');



router.use('/', homeRoutes);
router.use('/employee', employeeRoutes);
router.use('/menu', menuRoutes);

module.exports = router;