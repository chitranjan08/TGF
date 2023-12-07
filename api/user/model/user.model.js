const db = require("../../../db/db.mysql");

exports.getUserByEmail = (email) => {
  // console.log(email);
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM users WHERE email = ?", [email], (error, users) => {
      if (error) {
        // console.log(error);
        return reject(error);
      }
      console.log("users", users);
      return resolve(users);
    });
  });
};

exports.insertUser = (username, email, hashedPassword) => {
  console.log(email, username, hashedPassword);
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO users (username, email, password) VALUES (?,  ?, ?)",
      [username, email, hashedPassword],
      (error, result) => {
        if (error) {
          console.log("chi",error);
          return reject(error);
        }
        console.log("chitra");
        return resolve(result);
      }
    );
  });
};
