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

module.exports.newPointJob = function (point){
    var job = jobs.create('new tracking point', {
        trakingPoint: point
    });
    job
        .on('complete', function (){
            console.log('Job', job.id, 'with data', job.data.trakingPoint, 'is    done');
        })
        .on('failed', function (){
            console.log('Job', job.id, 'with data', job.data.trakingPoint, 'has  failed');
        });
    job.save();
}
