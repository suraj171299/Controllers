const express = require("express");
const router = express.Router();
const contactusController = require("../controllers/contactus");

router.get("/contactus", contactusController.addContacts);

router.post("/contactus", contactusController.postContacts);

module.exports = router;
