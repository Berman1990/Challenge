var express = require('express');
var router = express.Router();
var controller = require('./trackingLog.controller.js');
var jobQueue = require('../jobQueue');

function validationError(res, err) {
    res.status(422).json(err);
}

/*
 * Return all stages
 * */
router.get('/all', function(req, res) {
    controller.getAllLogs(function(ret){
        res.send(ret)});
});

router.get('/last', function(req, res) {
    controller.getLastLog(function(ret){
        res.send(ret)});
});

router.get('/lastByTrackingNum/:trackingNum', function(req, res) {
    controller.getLastLogForTackingNum(req.param('trackingNum'), function(ret){
        res.send(ret)});
});

router.put('/add', function(req, res) {
    controller.add(req.body, function(ret){
        jobQueue.newLogJob(req.body);
        res.send(ret);
    });
});

module.exports = router;
