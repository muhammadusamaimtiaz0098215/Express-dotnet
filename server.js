const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
// const logger = require("./middleware/logger");

const morgan = require("morgan");

dotenv.config({ path: "./config/config.env" });

connectDB();

const bootcamps = require("./routes/bootcamps.js");

const app = express();

// app.use(logger);

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server is running on ${PORT}`));

//Handle Unhandled Rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`ERROR: ${err.message}`);

  //Close Server and exit process
  server.close(() => {
    process.exit(1);
  });
});
