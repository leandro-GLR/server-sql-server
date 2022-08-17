// DEPENDENCY
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// CONFIG
const config = require("./configs/env");

// ROUTES
const employees = require("./routes/employees");
const groups = require("./routes/groups");
const banks = require("./routes/banks");
const companies = require("./routes/companies");

// APP
const app = express();

// Middlewares
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://172.30.1.36:3000",
      "172.17.64.1:3000",
      "192.168.1.100:3000",
      "192.168.1.100",
      "192.168.1.82",
      "192.168.1.82:3000",
      "http://can23pro",
      "http://can23pro/BiPyxis-Client",
      "45.236.164.68",
      "45.236.164.68/BiPyxis-Client",
    ],
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// USE ROUTES
employees(app);
companies(app);
groups(app);
banks(app);

app.get("/", (req, res) => {
  res
    .status(200)
    .send("Hola, soy Leandro Marcelo y este es mi API REST de mi GLR BOOEE");
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
