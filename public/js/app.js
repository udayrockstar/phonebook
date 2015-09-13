var app = angular.module('app', ['ngSanitize']);

app.config(function($routeProvider) {

  $routeProvider.when('/login', {
    templateUrl: 'templates/login.html',
    //controller: 'LoginController'
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

app.service('RegisterService',function($http){
  return{
    register : function(user){
      // console.log(user);
      $http.post('auth/register',user);
    }
  }
})
app.controller('DashBoardController', function() {
  console.log('dashboard Controller');
});

app.controller('RegisterController',function($scope,RegisterService){
  console.log('Register here');
  $scope.register = function(){
    // console.log($scope);
    RegisterService.register($scope.user);
  }
})
