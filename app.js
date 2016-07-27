var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose=require('mongoose');
var routes = require('./routes/index');
var users = require('./routes/users');
var newroute=require('./routes/newroute');
//var movieroute=require('./routes/movieroute');
//var dbroute=require('./routes/mydbeg','mydbeg');
var dbb=require('./routes/movieapp','movieapp');
//var secondroute=require('./routes/secondroute');

var app = express();



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use('/',express.static(path.join(__dirname,'../New_Client/dist')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//connect to database
mongoose.connect("mongodb://localhost/MovieDB");
var db=mongoose.connection;
db.on('error',console.error.bind(console,"conn error"));
db.once('open',function(){
console.log("connected");
});

app.use('/', routes);
app.use('/users', users);
app.use('/movieapp',dbb);
//app.use('/mydbeg',dbroute);
app.use('/newroute',newroute);
//app.use('/movieroute',movieroute);
//app.use('/secondroute',secondroute);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
