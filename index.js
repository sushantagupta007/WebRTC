const express = require("express");
const port = 5000;
const app = express();

//MiddleWare

app.use(express.json());

// Get Request
app.get("/", (req, res) => {
  res.send("hello I am from server");
});

app.listen(port, () => {
  console.log("Listening Port", port);
});
