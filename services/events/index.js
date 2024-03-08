const fs = require("fs");

// access global mock db file
const events = require(global.mock_db);

// write service method implementations
const event_service = {
  getAll() {
    return events;
  },
  create(req, res) {
    let new_id = genRandId(4);

    const event = req.body;

    const new_event = {
      id: new_id,
      event: event,
    };

    events.push(new_event);

    writeToFile(events);

    return new_event;
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

module.exports = event_service;
