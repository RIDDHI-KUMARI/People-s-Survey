<div ng-app="myApp" ng-controller="surveyctrl">
Enter your name:
<input type="text" name="name">
</div>
<script>
var app = angular.module('myApp', []);
app.controller('surveyctrl', function($scope) {
    $scope.Enter your name = " ";
});
</script>
