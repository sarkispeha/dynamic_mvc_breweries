var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

app.get('/brewery/:location', indexController.brewery);

app.get('/beers/:suds', indexController.aa);


var server = app.listen(4360, function() {
	console.log('Express server listening on port ' + server.address().port);
});
