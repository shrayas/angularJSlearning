function PhoneListController($scope,$http) {

  $http.get('data.json').success(function(json){

    $scope.fruits = json.data;

  });

  $scope.orderProp = "name"

}
