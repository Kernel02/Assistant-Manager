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

    const roleData = await Role.findAll({
      order: [["description", "ASC"]],
    });

    const roles = roleData.map((role) => role.get({ plain: true }));
    res.status(200).render("employee-info", { employees, roles });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
