var app=angular.module("App",["ui.router","app.controllers","app.routes","app.directives"]);
var appControllers=angular.module("app.controllers",[]);
var appDirectives=angular.module("app.directives",[]);
angular.module("app.routes",["ngMaterial"]).config(["$stateProvider","$urlRouterProvider","$mdGestureProvider",function(e,r,t){t.skipClickHijack(),e.state("app",{url:"/",templateUrl:"templates/hello/html/index.html",controller:"HelloController"}).state("roberto",{url:"/roberto",templateUrl:"templates/roberto/html/index.html",controller:"RobertoController"}),r.otherwise("/")}]);
appControllers.controller("HelloController",["$scope","$state",function(o,e){o.message="Hello World",o.messageFromInput="",o.abrirPaginaRoberto=function(){e.go("roberto")}}]);
appControllers.controller("RobertoController",["$scope",function(o){}]);