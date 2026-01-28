const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Mr.tanasitiit Ruenmalee");
});

app.listen(port, () => {
  console.log("Server Starting on port", port);
});
