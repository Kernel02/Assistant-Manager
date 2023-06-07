const router = require("express").Router();
const { Employee, Role } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const employeeData = await Employee.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: Role,
          attributes: ["salary", "title"],
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
      where: {
        user_id: req.session.user_id,
      },
      order: [["description", "ASC"]],
    });

    const roles = roleData.map((role) => role.get({ plain: true }));
    res.status(200).render("employee-info", {
      employees,
      roles,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newEmployeeData = await Employee.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newEmployeeData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/role", async (req, res) => {
  try {
    const newRoleData = await Role.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newRoleData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/role/:id", async (req, res) => {
  try {
    const roleData = await Role.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(roleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const employeeData = await Employee.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(employeeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
