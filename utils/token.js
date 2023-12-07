const jwt = require("jsonwebtoken");
const dbConfig = require("../config/db.config.js");
// const { JWT_SECRET_KEY } = require("../utils/secrets");
// const { logger } = require('./logger');

const generate = (id) => jwt.sign({ id }, dbConfig.JWT_SECRET_KEY, { expiresIn: "1d" });
console.log("gen", generate)

const decode = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET_KEY);
  } catch (error) {
    // logger.error(error);
  }
};

console.log("dec", decode)

module.exports = {
  generate,
  decode,
};
