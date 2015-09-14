var app = angular.module('app', ['ngSanitize']);

app.config(function($routeProvider) {

  $routeProvider.when('/login', {
    templateUrl: 'templates/login.html',
    controller: 'LoginController'
  });

  $routeProvider.when('/register', {
    templateUrl: 'templates/register.html',
    controller: 'RegisterController'
  });

  $routeProvider.when('/home', {
    templateUrl: 'templates/dashboard.html',
    controller: 'DashBoardController'
  });

  $routeProvider.otherwise({
    redirectTo: '/login'
  });
})

app.factory('FlashContainer',function($rootScope){
  return {
    show : function(message){
      $rootScope.succ = message;
    },
    clear : function(){
      $rootScope.succ = "";
    }
  }
})
app.service('RegisterService',function($http){
  return{
    register : function(user){
      // console.log(user);
      $http.post('auth/register',user).
      then(function(data){
        if(data.data=='Success'){
          return data.data;
        }
      });
    }
  }
})
app.controller('DashBoardController', function() {
  console.log('dashboard Controller');
});

app.controller('RegisterController',function($scope,RegisterService,FlashContainer,$timeout,$location){
  console.log('Register here');
  $scope.register = function(){
    RegisterService.register($scope.user);
    FlashContainer.show("Registered Successfully..!");
    $timeout(FlashContainer.clear, 5000)
    .then(function(){
      $location.path('/login');
    });
  }
});

//
app.factory("AuthenticationService", function($http, FlashContainer, CSRF_TOKEN) {
  return {
     login: function(credentials) {
       var login = $http.post("/auth/login",credentials);
       //return login;
     }
   }

});
app.controller('LoginController',function($scope,AuthenticationService,$location){
  console.log('Controller');
  $scope.credentials = {};
  $scope.login = function(){
   AuthenticationService.login($scope.credentials).success(function() {
    $location.path('/home');
  });
  }
})

function callAtInterval() {
    console.log("Interval occurred");
}
