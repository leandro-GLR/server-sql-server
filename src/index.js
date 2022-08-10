// DEPENDENCY
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// CONFIG
const config = require("./configs/env");

// ROUTES
const employees = require("./routes/employees");

// APP
const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// USE ROUTES
employees(app);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
