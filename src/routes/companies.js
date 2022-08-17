const express = require("express");
const CompanieServices = require("../services/companies");

function companies(app) {
  const router = express.Router();
  const companiesServices = new CompanieServices();

  app.use("/api/companies", router);

  router.get("/getAllCompanies", async (req, res) => {
    /* const role = req.params.role; */
    const getAllCompanies = await companiesServices.getAllCompanies();

    return res
      .status(getAllCompanies.success ? 200 : 400)
      .json(getAllCompanies);
  });

  // get company by id
  router.get("/getCompanyById/:companyId", async (req, res) => {
    const {
      params: { companyId },
    } = req;
    const getCompanyById = await companiesServices.getCompanyById(companyId);
    return res.status(getCompanyById.success ? 200 : 400).json(getCompanyById);
  });

  // get cost centers by company id
  router.get("/getCostCentersByCompanyId/:companyId", async (req, res) => {
    const {
      params: { companyId },
    } = req;
    const getCostCentersByCompanyId =
      await companiesServices.getCostCentersByCompanyId(companyId);
    return res
      .status(getCostCentersByCompanyId.success ? 200 : 400)
      .json(getCostCentersByCompanyId);
  });
}

module.exports = companies;
