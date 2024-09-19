const express = require("express");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/urers");
const loggerOne = require("./middlewares/loggerOne");

const app = express();

dotenv.config();

const {
  PORT = 3005,
  API_URL = "http://127.0.0.1",
  MONGO_URL = "mongodb://127.0.0.1:27017/mydb",
} = process.env;
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Conneted to MongoDB"))
  .catch((error) => console.log(error));
app.use(cors());
app.use(loggerOne);
app.use(bodyparser.json());
app.use(userRouter);

app.listen(PORT, () => {
  console.log(`Север запущен по адресу ${API_URL}:${PORT}`);
});