const { getConnection, sql } = require("../configs/database/connection");
const { groupsQueries } = require("../configs/database/querys");

class Groups {
  async getAllGroups() {
    try {
      const pool = await getConnection();
      const allGroups = await pool.request().query(groupsQueries.getAllGroups);
      return {
        success: true,
        data: allGroups.recordset,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error getting all groups",
      };
    }
  }
}

module.exports = Groups;
