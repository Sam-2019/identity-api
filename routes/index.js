const express = require("express");
const router = express.Router();

const { getHome } = require("../controllers")
const { getID } = require("../controllers/identity");

router.get("/", getHome);
router.get("/id/:id", getID);

module.exports = router;
