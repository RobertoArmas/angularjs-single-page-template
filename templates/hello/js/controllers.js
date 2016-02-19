appControllers.controller('HelloController', function($scope,$state){
  $scope.message = "Hello World";
  $scope.messageFromInput = "";

  $scope.abrirPaginaRoberto = function(){
    $state.go('roberto');
  }
});
