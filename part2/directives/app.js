var app = angular.module("app",[]);

app.controller("MainC",function($scope) {

  $scope.greet = function() {
    $scope.message = "Hey "+$scope.user.name+"!, howdy?"
  }

});

app.directive('focus',function() {

  return {
    link: function(scope,element,attrs) {
            element[0].focus();
          }
  };

});
