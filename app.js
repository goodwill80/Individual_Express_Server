var express = require('./config/express');
var app = express();



var mongo_url = process.env.MONGODB_URI || 'mongodb://localhost/myprofile';

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(mongo_url);



// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });



app.set('port', (process.env.PORT || 7000));

app.listen(app.get('port'), function() {
  console.log('My express server is running at localhost', app.get('port'));
});

module.exports = app;
