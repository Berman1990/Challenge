/**
 * Created by idan on 26/07/2016.
 */
var trackingPointModel = require('./trackingPoint.model.js');


module.exports.add = function(trackingPoint, callback) {
    trackingPointModel.add(trackingPoint, function(err){
        if (err) {
            callback("server error");
        }
        else {
            callback("done");
        }
    });
};

module.exports.getAllPoints = function(callback){
    trackingPointModel.findAll(function (err, trackingPoints) {
        if (err) {
            callback("server error");
        }
        else {
            callback(trackingPoints);
        }
    });
};

module.exports.getPointsByTackingNum = function(TrackingNum,callback){
    trackingPointModel.findByTrackNum(TrackingNum, function (err, trackingPoints) {
        if (err) {
            callback("server error");
        }
        else {
            callback(trackingPoints);
        }
    });
};

module.exports.getLastPoint = function(callback){
    trackingPointModel.findMaxTimePoint(function (err, trackingLogs) {
        if (err) {
            callback("server error");
        }
        else {
            callback(trackingLogs);
        }
    });
};

module.exports.getLastPointForTackingNum = function(TrackingNum, callback){
    trackingPointModel.findMaxTimePointByTrackNum(TrackingNum, function (err, trackingLogs) {
        if (err) {
            callback("server error");
        }
        else {
            callback(trackingLogs);
        }
    });
};