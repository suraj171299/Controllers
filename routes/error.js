const express = require("express");
const router = express.Router();
const errorController = require("../controllers/error");

router.use(errorController.error);

module.exports = router;
