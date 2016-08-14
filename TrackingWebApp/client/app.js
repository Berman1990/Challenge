/**
 * Created by idan on 26/07/2016.
 */
var trackingApp = angular.module("TrackingApp", ['ngMap']);

trackingApp.controller("trackingAppController", ['$scope', 'socketio','NgMap',  function ($scope, socketio, NgMap) {
    NgMap.getMap().then(function(map) {
        console.log(map.getCenter());
        console.log('markers', map.markers);
        console.log('shapes', map.shapes);
    });

    $scope.trackingPoints = [
        {
            'rackingNumber' : 'Aa123456',
            'lat' : 51.515358,
            'long' : -0.141266
        }
    ];

    $scope.trackingLogs = [];


    socketio.on('logs', function(msg){
        if($scope.trackingLogs.indexOf(msg) == -1)
        {
            $scope.trackingLogs.push(msg);
        }
    });

    socketio.on('points', function(msg){
        if($scope.trackingPoints.indexOf(msg) == -1)
        {
            $scope.trackingPoints = [];
            $scope.trackingPoints.push(msg)
        };
    });
}]);

trackingApp.factory('socketio', ['$rootScope', function ($rootScope) {
    var socket = io.connect('http://localhost:3000');
    return {
        on: function (eventName, callback) {
            socket.on(eventName, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    callback.apply(socket, args);
                });
            });
        },
        emit: function (eventName, data, callback) {
            socket.emit(eventName, data, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    if (callback) {
                        callback.apply(socket, args);
                    }
                });
            })
        }
    };
}]);
