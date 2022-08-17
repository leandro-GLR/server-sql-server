const { getConnection, sql } = require("../configs/database/connection");
const { banksQueries } = require("../configs/database/querys");

class Banks {
  async getBanks() {
    try {
      const pool = await getConnection();
      const allBanks = await pool.request().query(banksQueries.getBanks);

      return {
        success: true,
        data: allBanks.recordset,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error getting all banks",
      };
    }
  }

  async getBank(bankId) {
    const pool = await getConnection();
    const bank = await pool
      .request()
      .input("id", bankId)
      .query(banksQueries.getBank);
    return {
      success: true,
      data: bank.recordset[0],
    };
  }

  async createBank(bankData) {
    const pool = await getConnection();
    const bank = await pool
      .request()
      .input("name", sql.NVarChar, bankData.name)
      .input("code", sql.Int, bankData.code)
      .query(banksQueries.createBank);
    return {
      success: true,
      data: bank.recordset[0],
    };
  }
}

module.exports = Banks;
