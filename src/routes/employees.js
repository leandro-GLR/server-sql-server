const express = require("express");
const EmployeeServices = require("../services/employees");

function employees(app) {
  const router = express.Router();
  const employeeServices = new EmployeeServices();

  app.use("/api/employees", router);

  // route, service, query => getAllEmployees

  router.get("/getAllEmployees/:role", async (req, res) => {
    const role = req.params.role;
    const getAllEmployees = await employeeServices.getAllEmployees(role);
    return res
      .status(getAllEmployees.success ? 200 : 400)
      .json(getAllEmployees);
  });

  // get employee by id
  router.get("/getEmployeeById/:id", async (req, res) => {
    const id = req.params.id;
    const getEmployeeById = await employeeServices.getEmployeeById(id);
    return res
      .status(getEmployeeById.success ? 200 : 400)
      .json(getEmployeeById);
  });
}

module.exports = employees;
