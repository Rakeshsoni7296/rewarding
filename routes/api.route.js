const router = require("express").Router();
const apiController = require("../controllers/api.control");

router.route("/").get(apiController.getHome).post(apiController.rewardReferred);

router.route("/users").get(apiController.getAllUsers);

module.exports = router;
