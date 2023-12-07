const dbFunction = require("../model/game.model");
exports.CreateGameStaticsService = (packet) => {
  console.log(packet);
  return new Promise((resolve, reject) => {
    const gameData = new dbFunction({
      PlayerName: packet.PlayerName,
      PlayerAge: packet.PlayerAge,
      gameResult: packet.gameResult,
      userName: packet.userName,
    });
    gameData
      .save(gameData)
      .then((res) => {
        resolve({
          message: "Data inserted successfully",
        });
      })
      .catch((err) => {
        reject({ err });
      });
  });
};

exports.RetrieveGameGameStaticsService = (packet) => {
  console.log(packet);
  return new Promise((resolve, reject) => {
    dbFunction
      .findOne(packet.userName)
      .then((res) => {
        console.log(res);
        resolve({
          data: res,
        });
      })
      .catch((err) => {
        reject({ err });
      });
  });
};

exports.UpdateGameGameStaticsService = (packet) => {
  console.log(packet);
  return new Promise((resolve, reject) => {
    dbFunction
      .findByIdAndUpdate(
        { _id: req.params.ID, packet },
        {
          $set: {
            PlayerName: packet.PlayerName,
            gameResult: packet.gameResult,
          },
        }
      )
      .then((res) => {
        resolve({
          message: "Data updated successfully",
        });
      })
      .catch((err) => {
        reject({ err });
      });
  });
};

exports.DeleteGameGameStaticsService = (packet) => {
  console.log(packet);
  return new Promise((resolve, reject) => {
    dbFunction.findOne({ _id: packet.ID }).then((res) => {
      if (res) {
        dbFunction.deleteOne({ _id: packet.ID }).then((res) => {
          resolve({
            message: "Data deleted successfully",
          });
        });
      } else {
        resolve({
          message: "No records found",
        });
      }
    });
  });
};
