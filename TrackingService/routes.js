module.exports = function(app) {
    app.use('/trackingPoint', require('./models/trackingPoint/trackingPoint.router'));
};/**
 * Created by idan on 26/07/2016.
 */
