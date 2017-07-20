var express = require('express');
var path = require('path');
/*var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');*/
var mongoose = require('mongoose');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
/*app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());*/
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

mongoose.connect('mongodb://127.0.0.1:27017/HostingDB');

/* *** test data *** */
/*var User = require('./models/user');

var chris = new User({
    name: 'Chris',
    username: 'aaa',
    password: 'password',
    first_name: 'Andriy',
    last_name: 'Savinov',
    username: 'asav',
    email: 'test@serve.inc',
    password: 'zovsimzabuv',
    role_id: 1,
    age: 25
});

chris.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully!');
});*/

/* *** test data *** */
module.exports = app;
