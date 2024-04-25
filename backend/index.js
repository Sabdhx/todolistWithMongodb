const express = require("express");
const app = express();
const Router = require("./routes/route");
const cors = require('cors');
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use("/", Router);
app.use(cors());
const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(process.env.mongoUrl)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:`);
});
