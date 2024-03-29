const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
var mongoose = require("mongoose");
// Require all models
var db = require("./db/models/user");
const User = require('./db/models/user');

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/littleworldsTestDB");

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.post("api/buy/:id", function(req, res) {
  res.json(req);
});

User.create({ name: 'Amy' }, function (err, instance) {
    if (err) return handleError(err);
    console.log("new User saved!")
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

