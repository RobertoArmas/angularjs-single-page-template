
  angular.module('app.routes', ['ngMaterial']).config(function($stateProvider, $urlRouterProvider,$mdGestureProvider){
    $mdGestureProvider.skipClickHijack();
    $stateProvider
      .state('app', {
        url: '/',
        templateUrl: 'templates/hello/html/index.html',
        controller: 'HelloController'
      });
    $urlRouterProvider.otherwise('/');
  });
