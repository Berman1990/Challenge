/**
 * Created by idan on 27/07/2016.
 */
var kue = require('kue');
var jobs = kue.createQueue({
    prefix: 'q',
    redis: {
        host: '104.46.36.200'
    }
});

module.exports.newLogJob = function(log){
    var job = jobs.create('new tracking log', {
        trakingLog: log
    });
    job
        .on('complete', function (){
            console.log('Job', job.id, 'with data', job.data.trakingLog, 'is    done');
        })
        .on('failed', function (){
            console.log('Job', job.id, 'with data', job.data.trakingLog, 'has  failed');
        });
    job.save();
}
