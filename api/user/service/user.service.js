const { genSaltSync, hashSync } = require("bcrypt");
const dbFunction = require("../model/user.model");
const {
  hash: hashPassword,
  compare: comparePassword,
} = require("../../../utils/password");
const { generate: generateToken } = require("../../../utils/token");

exports.userRegistration = (packet) => {
  console.log("packet", packet)
  return new Promise((resolve, reject) => {
    let { username, email, password } = packet;
    // console.log(packet.username)
    dbFunction
      .getUserByEmail(packet.email)
      .then((res) => {
        console.log("res", res.length);
        if (res.length == 0) {
          const hashedPassword = hashPassword(password);
          console.log("hashPassword");

          dbFunction
            .insertUser(username, email, hashedPassword)
            .then((res) => {
              resolve({
                message: "User creadted successfy",
              });
            })
            .catch((err) => {
              console.log("error", err.message)
              reject(err)
            });
        } else {
          resolve({
            message: "user already registered",
          });
        }
      })
      .catch((err) => {
        console.log(err.message)
        reject(err)
      });
  });
};

exports.userSignInService = (packet) => {
  // console.log(packet)
  return new Promise((resolve, reject) => {
    let { email, password } = packet;
    // console.log(packet.username)
    dbFunction.getUserByEmail(email).then((res) => {
      console.log("res", res.length);
      if (!res) {
        reject({
          status: "-1",
          message: `User with email ${packet.email} was not found`,
        });
      }
      if (res) {
        console.log("chi", res[0].Id);
        if (comparePassword(password, res[0].password)) {
          const token = generateToken(res[0].Id);
          resolve({
            status: "success",
            data: {
              token,
              token_type: "Bearer",
              id: res[0].Id,
            },
          });
          return;
        } else
          reject({
            status: "error",
            message: "Incorrect password",
          });
      }
    }).catch((err)=>{
      // console.log(err)
      reject(err)
    });
  });
};
