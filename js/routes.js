
  angular.module('app.routes', []).config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('app', {
        url: '/',
        templateUrl: 'templates/hello/html/index.html',
        controller: 'HelloController'
      });
    $urlRouterProvider.otherwise('/');
  });
