var app = angular.module('example', ['color-select']);

app.controller('MainCtrl', function($scope) {
  $scope.colorArray = ['#6fc', '#0fa', '#39f', '#909', '#ff0', '#fd3', '#f60', '#f00'];
  $scope.selectedColor = '#0fa';
});
