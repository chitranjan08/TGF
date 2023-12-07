const service = require("../service/user.service");
const publishUserRegistrationEvent = require("../../rabbitmq/eventpublisher")
const subscribeToUserRegistrationEvents = require("../../rabbitmq/eventSubscriber")
exports.userRegistrationCpntroller = (req, res) => {
  console.log("dghd",req.body)
  service
    .userRegistration(req.body)
    .then((resp) => {
      console.log("a", resp);
      if(resp.message=="User creadted successfy"){
      publishUserRegistrationEvent(resp.message)
      subscribeToUserRegistrationEvents()
      }
      res.status(200).json({ status: 1, message: resp.message });
    })
    .catch((err) => {
      console.log("err", err.message)
      res.status(200).json({ status: -1, message: err.message });
      console.log(err);
    });
};

exports.userSignInController = (req, res) => {
  // console.log("dghd")
  service
    .userSignInService(req.body)
    .then((resp) => {
      console.log("a", resp);
      res.status(200).json({ status: 1, message: resp.data });
    })
    .catch((err) => {
      console.log("err", err)
      res.status(200).json({ status: -1, message: err.message });
      console.log(err);
    });
};
