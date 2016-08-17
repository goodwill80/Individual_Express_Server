var express = require('express');
var morgan = require('morgan');
var compress = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var expressLayouts = require('express-ejs-layouts');
var cors = require('cors');

module.exports = function(){
  var app = express();

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  if(process.env.NODE_ENV === "development"){
    app.use(morgan('dev'));
  } else if (process.env.NODE_ENV === "production"){
    app.use(compress());
  }
  app.use(cors());
  app.use(bodyParser.urlencoded({
    extended: true
  }));


  app.use(bodyParser.json());
  app.use(methodOverride());

  app.set('views', './app/views');
  app.set('view engine', 'ejs');
  app.use(expressLayouts);

  require('../app/routes/index.server.routes')(app);

  app.use(express.static('./public'));

  return app;


};
