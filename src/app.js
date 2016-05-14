angular.module('marsApp',['ngRoute'])
            .config(['$routeProvider', function($routeProvider){
                $routeProvider
                .when('/',{templateUrl:'templates/input.html', controller:'inputController'})
                .when('/tests',{template:'Run "npm test" from the command line to run the jasmine tests.'})
                .when('/display',{templateUrl:'templates/display.html', controller:'displayController'})
                .otherwise({redirectTo:'/'});
            }])

//.factory('marsEngine', function() {

  //return marsRovers;

//})

;

angular.module('marsApp').factory('marsEngine', function() {

  return  marsRovers;

});
