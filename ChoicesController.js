<div ng-app="myApp" ng-controller="choicesctrl">
	</div>
	var app = angular.module('myApp', []);
	app.controller('choicesctrl', function($scope) {
        $scope.formData = {
                "which is your favourite Colour":"favouriteColour",
                "favouriteColour": {
                    "Red": false,
                    "Blue": true,
                    "Green": false,
                    "Burgundy":false
                },
                $scope.formData = {
                        "which is your favourite Cuisine":"favouriteCuisine",
                        "favouriteCuisine": {
                            "Chinese": false,
                            "Mughlai": true,
                            "SouthIndian": false,
                            "Italian":false
                        },
                        $scope.formData = {
                                "which is your preffered MobileOS":"MobileOS",
                                "preferredMobileOS": {
                                    "Android": false,
                                    "IOS": true,
                                    "Windows3": false,
                                    "Firefox-OS1":false
                                },
                                $scope.formData = {
                                        "which is the most popular consumer brand in India":"Popular brand",
                                        "Popular brand": {
                                            "GSK": false,
                                            "ITC": true,
                                            "Pidlite": false,
                                            "Amul":false
                                        },


	});
	</script>
