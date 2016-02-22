describe('Hello Controller', function(){
  beforeEach(module('App'));
  
  var scope, createController;
     beforeEach(inject(function ($rootScope,$controller) {
         scope = $rootScope.$new();
         createController = function() {
             return $controller('HelloController', {
                 '$scope': scope
             });
         };
     }));

     it('Debe el $scope message decir "Hello World"', function() {
        var controller = createController();
        expect(scope.message).toEqual('Hello World');
    });
});
