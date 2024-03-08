const homeController = {
  index: async (req, res) => {
    res.render("home");
  },
  add: async (req, res) => {
    res.render("home/addUpdate");
  },
  update: async (req, res) => {
    res.render("home/addUpdate");
  },
};

module.exports = homeController;
