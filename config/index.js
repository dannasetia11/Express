const {
  PORT,
  DATABASE,
  DATABASE_HOST,
  DATABASE_PASSWORD
} = require("./environment");

const { connect, get, close } = require("./connection");

module.exports = {
  PORT: PORT,
  DATABASE_HOST: DATABASE_HOST,
  DATABASE: DATABASE,
  DATABASE_PASSWORD: DATABASE_PASSWORD,
  connect: connect,
  get: get,
  close: close
};
