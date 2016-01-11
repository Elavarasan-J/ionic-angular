var app = angular.module('starter.controllers', []);

app.controller('appController', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  
/*	$scope.$on('$ionicView.enter', function(e) {
		console.log(e);
  	});*/
});

app.controller('indexController', function($scope) {
	$scope.searcForm = function(){
		console.log('Form submitted !');
	}
});