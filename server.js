const express = require("express")
const dotenv = require("dotenv")

const bootcamps = require("./routes/bootcamps.js")

dotenv.config({ path:"./config/config.env" })

const app = express();

app.use("/api/v1/bootcamp", bootcamps)

const PORT = process.env.PORT || 5000;

app.listen(PORT , console.log(`Server is running on ${PORT}`))