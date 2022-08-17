const { getConnection, sql } = require("../configs/database/connection");
const { employeesQueries } = require("../configs/database/querys");

class Employees {
  async getAllEmployees() {
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

  // createEmployee
  async createEmployee(data) {
    const pool = await getConnection();
    const employee = await pool
      .request()
      .input("company", sql.NVarChar, data.company)
      .input("costCenter", sql.NVarChar, data.costCenter)
      .input("rut", sql.NVarChar, data.rut)
      .input("fullName", sql.NVarChar, data.fullName)
      .input("transferRut", sql.NVarChar, data.transferRut)
      .input("transferFullName", sql.NVarChar, data.transferFullName)
      .input("bank", sql.NVarChar, data.bank)
      .input("accountType", sql.NVarChar, data.accountType)
      .input("accountNumber", sql.NVarChar, data.accountNumber)
      .input("email", sql.NVarChar, data.email)
      .input("bankCode", sql.NVarChar, data.bankCode)
      .query(employeesQueries.createEmployee);
    return {
      success: true,
      data: employee.recordset[0],
    };
  }
}

module.exports = Employees;
