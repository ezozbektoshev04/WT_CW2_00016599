const fs = require("fs");

// access global mock db file
const events = require(global.mock_db);

// write service method implementations
const eventService = {
  getAll() {
    return events;
  },
  getById(id) {
    return events.find((e) => e.id == id);
  },

  create(req, res) {
    let newId = genRandId(4);

    const event = req.body;

    const newEvent = {
      id: newId,
      event: event,
    };

    events.push(newEvent);

    writeToFile(events);

    return newEvent;
  },
  update(id, updateData) {
    const eventIndex = events.findIndex((e) => e.id == id);

    if (eventIndex === -1) {
      return null;
    }

    events[eventIndex].event = {
      ...events[eventIndex].event,
      ...updateData,
    };

    writeToFile(events);

    return events[eventIndex];
  },

  delete(id) {
    const index = events.findIndex((e) => e.id == id);
    events.splice(index, 1);
    writeToFile(events);
  },
};

// create function for overwriting the db file updated db content
let writeToFile = async (users) => {
  await fs.writeFileSync(
    global.mock_db,
    JSON.stringify(users, null, 4),
    "utf8"
  );
};

// generate random id inspired by uuid
let genRandId = (count) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < count; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

module.exports = eventService;
