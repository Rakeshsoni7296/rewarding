const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: `${__dirname}/config.env` });

// Importing Modules
const User = require("./models/user.model");
const apiRoutes = require("./routes/api.route");

const app = express();

// Setting up database configuration
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

// Middlewares
app.set("view engine", "ejs");
app.use("/api/v1", express.static("static"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route Handling
app.use("/api/v1", apiRoutes);

app.all("*", (req, res) => {
  res.render("404");
});

// Starting server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
