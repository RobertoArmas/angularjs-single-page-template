var app=angular.module("App",["ui.router","app.controllers","app.routes"]);
var appControllers=angular.module("app.controllers",[]);
angular.module("app.routes",["ngMaterial"]).config(["$stateProvider","$urlRouterProvider","$mdGestureProvider",function(e,r,t){t.skipClickHijack(),e.state("app",{url:"/",templateUrl:"templates/hello/html/index.html",controller:"HelloController"}).state("roberto",{url:"/roberto",templateUrl:"templates/roberto/html/index.html",controller:"RobertoController"}),r.otherwise("/")}]);
appControllers.controller("HelloController",["$scope","$state",function(o,e){o.message="Hello World",o.messageFromInput="",o.abrirPaginaRoberto=function(){e.go("roberto")}}]);
appControllers.controller("RobertoController",["$scoope",function(o){}]);
//# sourceMappingURL=maps/main-70a27baa9b.js.map