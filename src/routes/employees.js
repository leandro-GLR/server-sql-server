const express = require("express");
const EmployeeServices = require("../services/employees");

function employees(app) {
  const router = express.Router();
  const employeeServices = new EmployeeServices();

  app.use("/api/employees", router);

  // route, service, query => getAllEmployees

  router.get("/getAllEmployees", async (req, res) => {
    /* const role = req.params.role; */
    const getAllEmployees = await employeeServices.getAllEmployees();
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

  // create employee
  router.post("/createEmployee", async (req, res) => {
    console.log(req.body);
    const createEmployee = await employeeServices.createEmployee(req.body);
    return res.status(createEmployee.success ? 200 : 400).json(createEmployee);
  });
}

module.exports = employees;
