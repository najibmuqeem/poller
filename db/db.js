const { Pool } = require("pg");

const pool = new Pool({
  user: "najib",
  host: "localhost",
  database: "poller",
});

const addUser = function (username) {
  return pool.query(
    `
      INSERT INTO users (username)
      VALUES ($1)
      RETURNING *;
      `,
    [username]
  );
};
exports.addUser = addUser;

const getAllPolls = function () {
  return pool.query(
    `
      SELECT * FROM polls;
    `
  );
};
exports.getAllPolls = getAllPolls;

const getUserPolls = function (user_id) {
  return pool.query(
    `
    SELECT * from polls
    WHERE user_id = $1;
    `,
    [user_id]
  );
};
exports.getUserPolls = getUserPolls;

const createNewPoll = function (user_id, poll) {
  return pool.query(
    `
      INSERT INTO polls (
        user_id,
        query,
        number_of_options
      )
      VALUES ($1, $2, $3)
      RETURNING *;
      `,
    [user_id, poll.query, poll.number_of_options]
  );
};
exports.createNewPoll = createNewPoll;

const addOption = function (poll_id, text) {
  return pool.query(
    `
    INSERT INTO options (
      poll_id,
      text
    )
    VALUES ($1, $2)
    RETURNING *;
    `,
    [poll_id, text]
  );
};
exports.addOption = addOption;

const getOptions = function (poll_id) {
  return pool.query(
    `
    SELECT * from options
    WHERE poll_id = $1;
    `,
    [poll_id]
  );
};
exports.getOptions = getOptions;
