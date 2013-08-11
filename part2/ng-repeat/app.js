var app = angular.module('app',[])

app.controller('MainController',function($scope){
  $scope.devs=[
    {
      "name":"shrayas",
      "age":"23"
    },
    {
      "name":"gugu",
      "age":"24"
    }
  ];  
});
