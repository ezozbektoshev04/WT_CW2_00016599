const express = require("express");
const { validationResult } = require("express-validator");
const { addEventValidation } = require("../../../validators/event");

const router = express.Router();
const event_controller = require("../../../controllers/api/events");

// Define API routes
router.get("/", (req, res) => {
  event_controller.getAll(req, res);
});

router.post("/", addEventValidation(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  event_controller.create(req, res);
});

module.exports = router;
