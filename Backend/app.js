const  express =  require('express');
const  mongoose = require("mongoose");

const userRoutes = require("./routes/user"); 

const app = express();

mongoose.connect(
    "mongodb+srv://max:shubhsethi26:letmein@26@cluster0-j1mk3.gcp.mongodb.net/test?retryWrites=true&w=majority"
)
.then(() => {
    console.log("Connected to database!");
})
.catch(() => {
    console.log("Connection failed!");
});

app.use("/api/user", userRoutes);

module.exports = app;

 