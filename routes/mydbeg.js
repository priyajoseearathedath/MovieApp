var express = require('express');
var router=express.Router();
var mongoose = require("mongoose");
var fdata = {};
var User = require("./models/sch");
//mongoose.connect('mongodb://localhost/mydb');
//var db = mongoose.connection;
router.get('/', function (req, res) {
  db.on("error", console.error.bind(console, "Connection Error:"));
  db.open('open', function(){
    User.find({age:10}, function(err, data){
      fdata = data;
      res.send(fdata);
    });
  });
});
module.exports = router;
