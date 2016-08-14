var express = require('express');
var app = express();
var http = require('http').Server(app);
var httpr = require('http');
var io = require('socket.io')(http);
var path = require('path');
var bodyParser = require('body-parser');
var logs = require('./models/trackingLog');
var points = require('./models/trackingPoint');

module.exports.socketio = io;

// set up the routes
require('./routes')(app);

app.set('port' || 3000);

// serve the static client files
app.use(express.static(path.join(__dirname, '../client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

http.listen(3000, function () {
  'use strict';
});

// start the server
app.listen(app.get('port'), function() {
  console.log('Express server listening on port 3000');
});

module.exports.push = function (label, message) {
  console.log('emit: ' + label +' , ' + message);
  io.emit(label,message);
};

