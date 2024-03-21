const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const Router = require("../Route/AllRouter");
dotenv.config();
const app = express();

// Allow requests from specific origin
app.use(
  cors({
    origin: [
      "http://185.124.109.241",
      "185.124.109.241",
      "https://185.124.109.241",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/build")));
app.use("/api", Router);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Internal server error");
});

module.exports = app;
