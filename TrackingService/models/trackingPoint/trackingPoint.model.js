var mongoose = require('mongoose');

var trackingPointSchema = new mongoose.Schema({
    trackingNumber: String,
    lat: Number,
    long: Number,
    time: Date
});

var trackingPointModel = mongoose.model('trackingpoints', trackingPointSchema);

module.exports = trackingPointModel;

module.exports.getTest = function() {
    console.log("Hello World");
};

module.exports.findAll = function(callback){
    trackingPointModel.find({}, callback);
};

module.exports.findByTrackNum = function(trackNum, callback){
    trackingPointModel.find({"trackingNumber" : trackNum}, callback);
};

module.exports.findMaxTimePoint = function(callback){
    trackingPointModel.findOne().sort('-time').exec(callback);
};

module.exports.findMaxTimePointByTrackNum = function(trackNum, callback){
    trackingPointModel.findOne({"trackingNumber" : trackNum}).sort('-time').exec(callback);
};

module.exports.add = function(trackPoint, callback) {
    var newPoint = new trackingPointModel(trackPoint);
    newPoint.time = new Date().getTime();
    newPoint.save(callback);
};

module.exports = trackingPointModel;
