const express = require("express");
const { getAuthUrl } = require("../controller/ig");

const router = express.Router();

router.get("/oauthurl", getAuthUrl);

module.exports = router;
