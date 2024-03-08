const express = require("express");
const event_router = require("./events");

const router = express.Router();

// registering child routers
router.use("/events", event_router);
module.exports = router;
