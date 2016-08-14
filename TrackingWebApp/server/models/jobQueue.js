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

module.exports.jobs = jobs;