const router = require("express").Router();
const { Employee, Role } = require("../../models");
const withAuth = require('../../utils/auth');

router.get("/", withAuth, async (req, res) => {
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




router.post("/", async (req,res) => {
    try {
    const newEmployeeData = await Employee.create({
            email: req.session.email,
            id: req.body.id,
           first_name: req.body.first_name,
           last_name: req.body.last_name,
           salary: req.body.salary,
           email: req.body.email,
           address: req.body.address,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
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
