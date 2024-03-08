const event_service = require("../../../services/events");
const homeController = {
  index: async (req, res) => {
    res.render("home");
  },
  add: async (req, res) => {
    res.render("home/addUpdate", { mode: "Add" });
  },
  update: async (req, res) => {
    const eventData = await event_service.getById(req.params.id);
    res.render("home/addUpdate", { mode: "Update", eventData: eventData });
  },
};

module.exports = homeController;
