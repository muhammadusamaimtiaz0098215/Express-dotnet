const express = require("express");
const dotenv = require("dotenv");
// const logger = require("./middleware/logger");

const morgan = require("morgan");

const bootcamps = require("./routes/bootcamps.js");

dotenv.config({ path: "./config/config.env" });

const app = express();

// app.use(logger);

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on ${PORT}`));
