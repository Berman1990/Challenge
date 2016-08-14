/**
 * Created by idan on 28/07/2016.
 */
var io = require('../server');
var jobQueue = require('./jobQueue');

jobQueue.jobs.process('new tracking log', function (job, done){
    var log = job.data.trakingLog;
    io.push('logs', log);
    done && done();
});
