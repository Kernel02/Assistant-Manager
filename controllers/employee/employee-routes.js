const router = require("express").Router();
const { Employee } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const employeeData = await Employee.findAll({
      order: [
        ["last_name", "ASC"],
        ["first_name", "ASC"],
      ],
    });
    const employees = employeeData.map((employee) =>
      employee.get({ plain: true })
    );

    res.status(200).render("employee-info", { employees });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
