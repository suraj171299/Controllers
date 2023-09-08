const express = require("express");
const submitController = require("../controllers/submit");
const router = express.Router();

router.get("/success", submitController.afterSubmission);

module.exports = router;
