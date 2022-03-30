const express = require("express");
const router = express.Router();
const {
  getBootcamp,
  getBootcamps,
  createBootcamps,
  updateBootcamps,
  deleteBootcamps,
} = require("../controllers/bootcamps");

module.exports = router;
