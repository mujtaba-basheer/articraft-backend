const express = require("express");
const { googleCallback, getAuthUrl, getInfo } = require("../controller/yt");

const router = express.Router();

router.get("/oauthurl", getAuthUrl);
router.get("/google-callback", googleCallback);
router.get("/info", getInfo);

module.exports = router;
