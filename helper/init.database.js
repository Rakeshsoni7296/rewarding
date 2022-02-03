const mongoose = require("mongoose");
const fs = require("fs");
const User = require("../models/user.model");
require("dotenv").config({ path: `${__dirname}/../config.env` });

const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, "utf-8"));

mongoose
  .connect(process.env.DATABASE_URI, {
    dbName: process.env.DATABASE_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection successful.");
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

// adding data to database
const importData = async () => {
  try {
    await User.create(users);
    console.log("Users Added to Database Successfully");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
  process.exit();
};

// delete existing data from database
const deleteData = async () => {
  try {
    await User.deleteMany();
    console.log("Existing data deleted from Database successfully.");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
