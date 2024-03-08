// import specific service class
const event_service = require("../../../services/events");

// mention the service's needed actions (methods)
const event_controller = {
  getAll(req, res) {
    res.json(event_service.getAll());
  },
  create(req, res) {
    res.status(201).json(event_service.create(req, res));
  },
};

module.exports = event_controller;
