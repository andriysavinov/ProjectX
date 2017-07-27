const   express      = require('express'),
        path         = require('path'),
        app          = express(),
        favicon      = require('serve-favicon'),
        logger       = require('morgan'),
        port         = process.env.PORT || 8080,
        mongoose     = require('mongoose'),
        passport     = require('passport'),
        flash        = require('connect-flash'),
        cookieParser = require('cookie-parser'),
        bodyParser   = require('body-parser'),
        session      = require('express-session'),
        configDB     = require('./config/db.js');

require("babel-core").transform("code");
require('./config/passport')(passport); // pass passport for configuration
mongoose.connect(configDB.url, { useMongoClient: true });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// required for passport
app.use(session({ secret: 'projectX_X-znachytXoctunG', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

require('./routes/index')(app, passport);
require('./routes/users')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
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

app.listen(port);
console.log('The magic happens on port ' + port);