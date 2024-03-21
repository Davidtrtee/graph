const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const Router = require("../Route/AllRouter");
dotenv.config();
const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://185.124.109.241",
      "https://cosmo-portal.digital",
      "cosmo-portal.digital",
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
