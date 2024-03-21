const Connection = require("./Config/DBConnect");
const path = require("path");
const app = require("./Config/expressConfig");
const PORT = process.env.PORT || 5500;
Connection();
app.get("/test", (req, res) => {
  res.status(200).json("server working fine");
});

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
