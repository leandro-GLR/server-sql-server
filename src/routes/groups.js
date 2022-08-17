const express = require("express");
const GroupServices = require("../services/groups");

function groups(app) {
  const router = express.Router();
  const groupServices = new GroupServices();

  app.use("/api/groups", router);

  router.get("/getGroups", async (req, res) => {
    const getGroups = await groupServices.getGroups();
    return res.status(getGroups.success ? 200 : 400).json(getGroups);
  });
}

module.exports = groups;
