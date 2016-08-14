/**
 * Created by idan on 26/07/2016.
 */

trackingApp.directive("trackingLog",function(){
    return {
        restrict: "E",
        templateUrl:'directives/logTable/logTable.directive.html',
        scope: { trackingLogs: '=trackinglogs'},
        link: function(scope) {
        }
    }
});
