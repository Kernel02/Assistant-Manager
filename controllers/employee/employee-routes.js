const router = require("express").Router();
const { Employee} = require("../../models");
const { Roles } = require("../../models");

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

    // const rolesData = await Roles.findAll({
    //     order: 
    // });

    res.status(200).render("employee-info", { employees, roles });

  } catch (err) {
    res.status(500).json(err);
  }
});




router.post("/", async (req,res) => {
    try {
        await Employee.create({
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

module.exports = router;
