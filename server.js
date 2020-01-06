const express = require('express');
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require("./routes");
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "client", "build")))
app.use(cors());
app.use(bodyParser.json());

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));

}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Auth");
//mongoose.connect(process.env.MONGODB_URI || "mongodb://arthiatsr:Iskavsda@01@ds359868.mlab.com:59868/heroku_8cx4grr6");


const connection = mongoose.connection;
connection.once('open', function(){
    console.log("MongoDB connection succwssful");
})

app.get("*", (req, res) => {
    // res.sendFile(path.join(__dirname, "./client/build/index.html"));
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));

  });
  
app.listen(PORT, function(){
    console.log("server runnung" + PORT);
})