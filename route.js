var app= angular
.module("Demo",(["ngroute"]))
.config(function($routeProvider,$locationProvider){
	$routeProvider
	.when("Survey",{
		templateUrl: Templates/"Survey.html",
		controller:Surveycontroller,
		controllerAs:"surveyctrl"
	})
var app= angular
.module("Demo",(["ngroute"]))
.config(function($routeProvider,$locationProvider){
	$routeProvider
	.when("Choices",{
		templateUrl: Templates/"Choices.html",
		controller:Choicescontroller,
		controllerAs:"choicesctrl"
	})
})
)