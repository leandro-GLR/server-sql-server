const { getConnection, sql } = require("../configs/database/connection");
const { employeesQueries } = require("../configs/database/querys");

class Employees {
  async getAllEmployees(role) {
    try {
      const pool = await getConnection();
      const allEmployees = await pool
        .request()
        .query(employeesQueries.getAllEmployees);
      console.log(allEmployees);
      return {
        success: true,
        data: allEmployees.recordset,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error getting all employees",
      };
    }
  }

  async getEmployeeById(id) {
    const pool = await getConnection();
    const employee = await pool
      .request()
      .input("id", id)
      .query(employeesQueries.getEmployeeById);
    return {
      success: true,
      data: employee.recordset[0],
    };
  }
}

module.exports = Employees;
