const express = require("express");
const BankServices = require("../services/banks");

function banks(app) {
  const router = express.Router();
  const bankServices = new BankServices();

  app.use("/api/banks", router);

  router.get("/getBanks", async (req, res) => {
    const getBanks = await bankServices.getBanks();
    return res.status(getBanks.success ? 200 : 400).json(getBanks);
  });

  router.get("/getBank/:bankId", async (req, res) => {
    const {
      params: { bankId },
    } = req;
    const getBank = await bankServices.getBank(bankId);
    return res.status(getBank.success ? 200 : 400).json(getBank);
  });

  router.post("/createBank", async (req, res) => {
    const { body: bankData } = req;
    const createBank = await bankServices.createBank(bankData);
    return res.status(createBank.success ? 200 : 400).json(createBank);
  });

  router.put("/updateBank/:bankId", async (req, res) => {
    const { body: bankData } = req;
    const updateBank = await employeeServices.updateBank(bankData);
    return res.status(updateBank.success ? 200 : 400).json(updateBank);
  });

  router.delete("/deleteBank/:bankId", async (req, res) => {
    const {
      params: { bankId },
    } = req;
    const deleteBank = await employeeServices.deleteBank(bankId);
    return res.status(deleteBank.success ? 200 : 400).json(deleteBank);
  });
}

module.exports = banks;
