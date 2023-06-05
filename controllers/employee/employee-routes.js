const router = require("express").Router();
const { Employee, Role } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const employeeData = await Employee.findAll({
      include: [
        {
          model: Role,
          attributes: ["salary", "description"],
        },
      ],
      order: [
        ["last_name", "ASC"],
        ["first_name", "ASC"],
      ],
    });
    const employees = employeeData.map((employee) =>
      employee.get({ plain: true })
    );
    console.log(employees);
    res.status(200).render("employee-info", { employees });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
