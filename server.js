require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 4000;
const morgan = require("morgan");
const cheeseController = require("./controllers/cheeseController.js");


app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello Cheeseworld!");
});


app.use("/cheese", cheeseController);


app.listen(PORT, () => {console.log(
  "Server is running on port " + PORT);
});
