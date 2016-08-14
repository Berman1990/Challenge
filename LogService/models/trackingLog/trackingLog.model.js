var mongoose = require('mongoose');

var trackingLogSchema = new mongoose.Schema({
    trackingNumber: String,
    severity: String,
    message: String,
    time: Date
});

var trackingLogModel = mongoose.model('trakinglogs', trackingLogSchema);

module.exports = trackingLogModel;

module.exports.getTest = function() {
    console.log("Hello World");
};

module.exports.findAll = function(callback){
    trackingLogModel.find({}, callback);
};

module.exports.findByTrackNum = function(trackNum, callback){
    trackingLogModel.find({"trackingNumber" : trackNum}, callback);
};

module.exports.findMaxTimeLog = function(callback){
    trackingLogModel.findOne().sort('-time').exec(callback);
};

module.exports.findMaxTimeLogByTrackNum = function(trackNum, callback){
    trackingLogModel.findOne({"trackingNumber" : trackNum}).sort('-time').exec(callback);
};

module.exports.add = function(trackLog, callback) {
    var newLog = new trackingLogModel(trackLog);
    newLog.time = new Date().getTime();
    newLog.save(callback);
};

module.exports = trackingLogModel;
