/**
 * Created by idan on 28/07/2016.
 */
var io = require('../server');
var jobQueue = require('./jobQueue');

jobQueue.jobs.process('new tracking point', function (job, done){
    var point = job.data.trakingPoint;
    point.time = new Date().getTime();
    io.push('points', point);
    done && done();
});
