
angular.module('app.routes', ['ngMaterial']).config(['$stateProvider','$urlRouterProvider','$mdGestureProvider',function($stateProvider, $urlRouterProvider,$mdGestureProvider){
  $mdGestureProvider.skipClickHijack();
  $stateProvider
  .state('app', {
    url: '/',
    templateUrl: 'templates/hello/html/index.html',
    controller: 'HelloController'
  })
  .state('roberto', {
    url: '/roberto',
    templateUrl: 'templates/roberto/html/index.html',
    controller: 'RobertoController'
  });
  $urlRouterProvider.otherwise('/');
}]);
