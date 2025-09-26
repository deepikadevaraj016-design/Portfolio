const express = require("express");
const { getMessages, addMessage } = require("../controllers/contactController");

const router = express.Router();

router.get("/", getMessages);
router.post("/", addMessage);

module.exports = router;
