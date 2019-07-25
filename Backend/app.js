const  express =  require('express');
const  mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");


const userRoutes = require("./routes/user");

const app = express();

mongoose.connect(
  "mongodb://localhost:27017")
.then(() => {
    console.log("Connected to database!");
})
.catch(() => {
    console.log("Connection failed!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use( (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS, PUT");


  next();
});

app.use("/api/user", userRoutes);

module.exports = app;

