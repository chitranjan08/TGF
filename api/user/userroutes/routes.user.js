const express = require("express");
const router = express.Router();
// const {validation, validate} = require("../")
const {
  signup: signupValidator,
  signin: signinValidator,
} = require("../../../validators/auth");
const userController = require("../controller/user.conntroller");
router.post(
  "/signup",
  signupValidator,
  userController.userRegistrationCpntroller
);
router.post("/signin", signinValidator, userController.userSignInController);

module.exports = router;
