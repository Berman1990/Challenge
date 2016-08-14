module.exports = function(app) {
    app.use('/trackingLogs', require('./models/trackingLog/trackingLog.router'));
};/**
 * Created by idan on 26/07/2016.
 */
