var twitchApp = angular.module('twitchApp', []);

var request = {
    baseUrl: 'https://api.twitch.tv/helix/',
    id: 'y7846r6ks600vc1a1qfeisomxy824x'
}
var users = ['freecodecamp'];

twitchApp.controller('twitchCtrl', function twitchCtrl($scope, $http, $interval) {

    $scope.isStreaming = function() { //angular.$interval()

        var endpoint = 'streams?';

        $http({
            method: 'GET',
            url: request.baseUrl + endpoint,
            headers: {
                'Client-ID': request.id
            },
            params: {
                user_login: users
            }

        }).then(function(response) {
            $scope.isStreaming = response.data
            console.log($scope.isStreaming)
        })
    }

    $scope.getFCCData = function() {

        var endpoint = 'users?'

        $http({
            method: 'GET',
            url: request.baseUrl + endpoint,
            headers: {
                'Client-ID': request.id
            },
            params: {
                'login': users
            }

        }).then(function(response) {
            $scope.fccData = response.data
            console.log($scope.fccData)
            console.log($scope.fccData.data[0].profile_image_url)
        })
    };
});
