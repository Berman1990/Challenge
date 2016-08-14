/**
 * Created by idan on 26/07/2016.
 */
var trackingLogModel = require('./trackingLog.model.js');

module.exports.add = function(trackingLog, callback) {
    trackingLogModel.add(trackingLog, function(err){
        if (err) {
            callback("server error");
        }
        else {
            callback("done");
        }
    });
};

module.exports.getAllLogs = function(callback){
    trackingLogModel.findAll(function (err, trackingLogs) {
        if (err) {
            callback("server error");
        }
        else {
            callback(trackingLogs);
        }
    });
};

module.exports.getLastLog = function(callback){
    trackingLogModel.findMaxTimeLog(function (err, trackingLogs) {
        if (err) {
            callback("server error");
        }
        else {
            callback(trackingLogs);
        }
    });
};

module.exports.getLastLogForTackingNum = function(TrackingNum, callback){
    trackingLogModel.findMaxTimeLogByTrackNum(TrackingNum, function (err, trackingLogs) {
        if (err) {
            callback("server error");
        }
        else {
            callback(trackingLogs);
        }
    });
};

module.exports.getLogsByTackingNum = function(TrackingNum,callback){
    trackingLogModel.findByTrackNum(TrackingNum, function (err, trackingLogs) {
        if (err) {
            callback("server error");
        }
        else {
            callback(trackingLogs);
        }
    });
};