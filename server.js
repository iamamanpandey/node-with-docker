const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

///import routes
const postRoutes = require("./routes/post");

const authRoutes = require("./routes/auth");
//ap
const app = express();

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

//routes middleware
app.use(
  "/api",
  (req, res) => {
    res.json("hello gdggdgd aman");
  },
  postRoutes
);
app.use("/api", authRoutes);

//port
const PORT = process.env.PORT || 8000;

const CONNECTION_URL =
  "mongodb+srv://amanpandey:aman1234@cluster0.pp0bs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on  Port:http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
mongoose.set("useFindAndModify", false);
mongoose.set("useNewUrlParser", true);
mongoose.set("useCreateIndex", true);
