const User = require("../models/user.model");
const checkSum = {
  message: "",
  status: "",
};

const handleMessage = (res, status, message) => {
  checkSum.status = status;
  checkSum.message = message;
  res.redirect("/api/v1");
};

exports.getHome = (req, res) => {
  res.render("home", { checkSum });
  checkSum.message = "";
  checkSum.status = "";
};

exports.rewardReferred = async (req, res, next) => {
  const id = req.body.userid;

  // Check whether provided id is valid or not
  if (!require("mongoose").Types.ObjectId.isValid(id)) {
    handleMessage(res, "error", "Oops, Id is not valid.");
    return;
  }

  const user = await User.findById(id);
  // If no user exist with given id
  if (!user) {
    handleMessage(res, "error", `No user exist with '${id}' id.`);
    return;
  }

  // Check user whether he has already made payment or not
  if (user.isPaymentMade && user.referredUser) {
    handleMessage(res, "success", `Referred User has already got reward.`);
    return;
  }

  // Check if user doesn't have any referredUser
  if (user.referredUser === null) {
    handleMessage(
      res,
      "success",
      `No referred user exist for current user, "${user.name}".`
    );
    return;
  }

  // Update current user's payment status and the referredUser's totalEarnings
  const currentUser = await User.findByIdAndUpdate(
    id,
    { isPaymentMade: true },
    { new: true }
  );
  const referee = await User.findOneAndUpdate(
    { name: currentUser.referredUser },
    { $inc: { totalEarnings: 10 } }
  );
  handleMessage(
    res,
    "success",
    `The Referred User, "${referee.name}", has got reward successfully.`
  );
};

exports.getAllUsers = async (req, res) => {
  const allUsers = await User.find({});
  res.render("users", { users: allUsers });
};
