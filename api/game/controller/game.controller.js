const service = require("../service/game.service");
exports.CreateGameStaticsController = (req, res) => {
  // console.log("dghd")
  service
    .CreateGameStaticsService(req.body)
    .then((resp) => {
      console.log("a", resp);
      res.status(200).json({ status: 1, message: resp.data });
    })
    .catch((err) => {
      res.status(200).json({ status: -1, message: err.message });
      console.log(err);
    });
};

exports.RetrieveGameStaticsController = (req, res) => {
  // console.log("dghd")
  service
    .RetrieveGameGameStaticsService(req.body)
    .then((resp) => {
      console.log("a", resp);
      res.status(200).json({ status: 1, Data: resp.data });
    })
    .catch((err) => {
      res.status(200).json({ status: -1, message: err.message });
      console.log(err);
    });
};

exports.UpdateGameStaticsController = (req, res) => {
  // console.log("dghd")
  service
    .UpdateGameGameStaticsService(req.body)
    .then((resp) => {
      console.log("a", resp);
      res.status(200).json({ status: 1, message: resp.data });
    })
    .catch((err) => {
      res.status(200).json({ status: -1, message: err.message });
      console.log(err);
    });
};

exports.DeleteGameStaticsController = (req, res) => {
  // console.log("dghd")
  service
    .DeleteGameGameStaticsService(req.body)
    .then((resp) => {
      console.log("a", resp);
      res.status(200).json({ status: 1, message: resp.message });
    })
    .catch((err) => {
      res.status(200).json({ status: -1, message: err.message });
      console.log(err);
    });
};
