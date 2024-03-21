const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const Router = require("../Route/AllRouter");
dotenv.config();
const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "http://185.124.109.241",
  "https://cosmo-portal.digital",
  "http://cosmo-portal.digital", // Added http version without 's'
];

// Configure CORS options
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

// Use CORS middleware
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/build")));
app.use("/api", Router);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Internal server error");
});

module.exports = app;
