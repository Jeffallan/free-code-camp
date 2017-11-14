var wikiApp = angular.module('wikiApp', []);

wikiApp.controller('wikiCtrl', function wikiCtrl($scope, $http, $sce) {

    $scope.submit = function() {
        var query = $scope.query
        console.log(query)
        query = query ? query : '';

        var url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=' + query;
        var trusted = $sce.trustAsResourceUrl(url);

        $http.jsonp(trusted, {jsonpCallbackParam: 'callback'}).then(function(response) {
            $scope.entries = response.data;
            console.log($scope.entries)
        });
    }
});
