const { getConnection, sql } = require("../configs/database/connection");
const { companiesQueries } = require("../configs/database/querys");

class Companies {
  async getAllCompanies() {
    try {
      const pool = await getConnection();
      const allCompanies = await pool
        .request()
        .query(companiesQueries.getAllCompanies);
      return {
        success: true,
        data: allCompanies.recordset,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error getting all companies",
      };
    }
  }

  async getCompanyById(companyId) {
    try {
      const pool = await getConnection();
      const company = await pool
        .request()
        .input("ID_EMPRESA", companyId)
        .query(companiesQueries.getCompanyById);
      return {
        success: true,
        data: company.recordset[0],
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error getting company by id",
      };
    }
  }

  async getCostCentersByCompanyId(companyId) {
    try {
      const pool = await getConnection();
      const costCenters = await pool
        .request()
        .input("ID_EMPRESA", companyId)
        .query(companiesQueries.getCostCentersByCompanyId);
      return {
        success: true,
        data: costCenters.recordset,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error getting cost centers by company id",
      };
    }
  }
}

module.exports = Companies;
