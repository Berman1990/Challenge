var express = require('express');
var router = express.Router();
var controller = require('./trackingPoint.controller.js');
var jobQueue = require('../jobQueue');

function validationError(res, err) {
    res.status(422).json(err);
}

/*
 * Return all tracking points
 * */
router.get('/all', function(req, res) {
    controller.getAllPoints(function(ret){
        res.send(ret)});
});

router.put('/add', function(req, res) {
    controller.add(req.body, function(ret){
        jobQueue.newPointJob(req.body);
        res.send(ret)});
});

router.get('/last', function(req, res) {
    controller.getLastPoint(function(ret){
        res.send(ret)});
});

router.get('/lastByTrackingNum/:trackingNum', function(req, res) {
    controller.getLastPointForTackingNum(req.param('trackingNum'), function(ret){
        res.send(ret)});
});

module.exports = router;
