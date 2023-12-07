const dbConfig = require("../config/db.config.js");
const jwtVerify = (req, res, next) => {
  console.log("verifying token..");

  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1]; // Bearer <token>\
    console.log("tok", token);
    try {
      result = jwt.verify(token, dbConfig.JWT_SECRET_KEY);
      req.decoded = result;
      next();
    } catch (err) {
      result = {
        error: `Unauthorized`,
        status: 401,
      };
      res.status(401).send(result);
    }
  } else {
    result = {
      error: `Unauthorized error. Token required.`,
      status: 401,
    };
    res.status(401).send(result);
  }
};

module.exports = jwtVerify;
