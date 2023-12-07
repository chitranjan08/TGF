const express = require("express");
const router = express.Router();
const jwtVerify = require("../../../middlewares/tokenauth");
const signin = require("../../user/controller/user.conntroller");
// const {validation, validate} = require("../")
const {
  signup: signupValidator,
  signin: signinValidator,
} = require("../../../validators/auth");
const gameStaticsController = require("../controller/game.controller");
router.post("/Create", jwtVerify,gameStaticsController.CreateGameStaticsController);
router.post("/Retrive", gameStaticsController.RetrieveGameStaticsController);
router.post("/Update", gameStaticsController.UpdateGameStaticsController);
router.post("/Delete", gameStaticsController.DeleteGameStaticsController);

module.exports = router;
