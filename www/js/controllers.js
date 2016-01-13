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
	$scope.searcForm = function(e){
		console.log('Form submitted');
	}
});

app.controller('listController', function($scope,$ionicSlideBoxDelegate,BusinessList){
	 
	 $scope.businessList = [
		 {
			 title:'Vertige Fleurs',
			 images:[
				 {
					 imgURL : 'http://localhost/works/ildere-app/assets/images/slider1.png',
				 },
				 {
					 imgURL : 'http://localhost/works/ildere-app/assets/images/slider2.png',
				 }
			 ],
			 desc:'Vertige vous propose toute l’année des plantes d’intérieur et d’extérieur, des bouquets, des fleurs coupées, des compositions pour tout vos événements familiaux, décoration. Livraison à domicile sur Ars et tout le Nord de l’île de Ré.', 
			 email :'contact@vertige-iledere.fr', 
			 tel:'05.46.29.65.00 / 06.16.11.68.01', 
			 url:'www.vertige-iledere.fr'
		 },
		 {
			 title:'Good Ideas',
			 images:[
				 {
					 imgURL : 'http://localhost/works/ildere-app/assets/images/slider3.png',
				 },
				 {
					 imgURL : 'http://localhost/works/ildere-app/assets/images/slider2.png',
				 }
			 ],
			 desc:'Vertige vous propose toute l’année des plantes d’intérieur et d’extérieur, des bouquets, des fleurs coupées, des compositions pour tout vos événements familiaux, décoration. Livraison à domicile sur Ars et tout le Nord de l’île de Ré.', 
			 email :'contact@vertige-iledere.fr', 
			 tel:'05.46.29.65.00 / 06.16.11.68.01', 
			 url:'www.vertige-iledere.frrrr'
		 }];
	 
	$scope.Previous = function(){
		$ionicSlideBoxDelegate.previous();
	}
	$scope.Next = function() {
		$ionicSlideBoxDelegate.next();
	}
	
	$scope.listItems = [];
	$scope.listCount = 5;
	
	BusinessList.getBusiness().then(function($res){
		$scope.listItems = $res;
	});
		
	$scope.loadMore = function(){
		console.log('dfff')
		$scope.listCount = 10;
		$scope.listItems = $scope.listItems.concat($res);

		$scope.$broadcast('scroll.infiniteScrollComplete');

		}
});

app.factory('BusinessList',function($http){
		var jsonData = 'http://localhost:8100/data.json';
		var items = [];
		return {
			getBusiness : function(){				
				return $http.get(jsonData).then(function(response){
					items = response.data.businessList;
					return items;
				});
			}
		}
});
