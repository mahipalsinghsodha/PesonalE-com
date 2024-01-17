const express = require("express");
const port = 8000;
const app = express();

app.use("/", (req, res) => {
  res.send("hillo");
});
app.listen(port, () => {
  `server is running port ${port}`;
});
