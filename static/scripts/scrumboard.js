(function(){
    'use strict';

    angular.module('scrumboard.demo', [])
        .controller('ScrumboardController', ['$scope', '$http', ScrumboardController]);

    
    function ScrumboardController($scope, $http){
        $scope.data = [];
        $scope.add = function(list, title){
            var card = {
                list: list.id,
                title: title
            };
            $http.post('/scrumboard/cards/', card).then(function(response){
               list.cards.push(response.data);
            },
            function(){
                console.error('Could not create card');
            });
        };

        $http.get('/scrumboard/lists/').then(function(response){
            $scope.data = response.data;
        });
    }
}());