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
  delete(req, res) {
    const event = event_service.getById(req.params.id);

    if (event) {
      event_service.delete(req.params.id);
      res.status(204).send("Event deleted successfully");
    } else {
      res.status(404).send("Event not found");
    }
  },
};

module.exports = event_controller;
