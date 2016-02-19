var app=angular.module("App",["ui.router","app.controllers","app.routes"]);
var appControllers=angular.module("app.controllers",[]);
angular.module("app.routes",["ngMaterial"]).config(function(l,t,e){e.skipClickHijack(),l.state("app",{url:"/",templateUrl:"templates/hello/html/index.html",controller:"HelloController"}).state("roberto",{url:"/roberto",templateUrl:"templates/roberto/html/index.html",controller:"RobertoController"}),t.otherwise("/")});
appControllers.controller("HelloController",function(o,r){o.message="Hello World",o.messageFromInput="",o.abrirPaginaRoberto=function(){r.go("roberto")}});
appControllers.controller("RobertoController",function(o){});
//# sourceMappingURL=assets/maps/main-361c81eade.js.map
