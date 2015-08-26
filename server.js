//DEPNDENCIES
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

//SERVER
var app = express();
var data = {'message': 'did you get this'};

app.use(express.static(__dirname + '/public'));
//mongoDB connection
var port = 8080
var mongoUri = 'mongodb://localhost:27017/foosball'

mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
   console.log('MongoDB cpnnected at: ', mongoUri);
});



//ENDPOINTS

app.listen(port, function() {
	console.log('do you see me',port);
});