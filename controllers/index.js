const router = require("express").Router();

const homeRoutes = require("./home-routes.js");
const employeeRoutes = require("./employee/employee-routes.js");
const menuRoutes = require("./menu/menu-routes.js");
const userRoutes = require("./users/user-routes.js");
const signupRoutes = require("./users/signup-routes.js");

router.use("/", homeRoutes);
router.use("/employee", employeeRoutes);
router.use("/menu", menuRoutes);
router.use("/login", userRoutes);
router.use("/signup", signupRoutes);

module.exports = router;
