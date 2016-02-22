appControllers.controller('HelloController',['$scope','$state',function($scope,$state){
  $scope.message = "Hello World";
  $scope.messageFromInput = "";

  $scope.abrirPaginaRoberto = function(){
    $state.go('roberto');
  }
}]);
