var app = angular.module('starter.controllers', ['ngMap']);

app.controller('appController', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
	
});


// IndexController
app.controller('indexController', function($scope, $state, $ionicSlideBoxDelegate, BusinessService, $timeout, $location, $rootScope){	
	
	$scope.listItems = [];
	$scope.viewTitle = '';
	$scope.moreDataAvailable = false;
	var spliceArray, listLength, arrayLength, start = 0, end = 5, listIndex;
	
	$scope.searcForm = function($searchItem){		
		$state.go('app.listing', {searchItem : $searchItem, key:'q'});
	}

	// Infinite scroller
	/*$scope.listItems = [];
	$scope.moreDataAvailable = false;
	var spliceArray, listLength, arrayLength, start = 0, end = 5, listIndex;
	
	BusinessService.getBusiness().then(function(items){
		spliceArray = items.splice(start, end);
		$scope.listItems = spliceArray;
	});
	
	$scope.loadMore = function(){
		$timeout(function() {
			BusinessService.getBusiness().then(function(items){
				$scope.listItems = items;
				listLength = items.length;
				arrayLength = $scope.listItems.length;
				spliceArray = items.splice(arrayLength, end);

				$scope.listItems = $scope.listItems.concat(spliceArray);		
				$scope.$broadcast('scroll.infiniteScrollComplete');

				if(listLength <= $scope.listItems.length){
					$scope.moreDataAvailable = true;
				}
			});
  		}, 350);
	};*/
	
	
	// View more
	/*$scope.viewMore = function(index){
		$location.url('app/view-business');
		listIndex = $scope.listItems[index];
		console.log(listIndex);
	}*/
	
});


// businessListController
app.controller('businessListController', function($scope, $stateParams, BusinessService, $rootScope, $ionicHistory, NgMap, $state){
	
	BusinessService.getSearchBusiness($stateParams.searchItem, $stateParams.key).then(function(response){
			$scope.viewTitle = $stateParams.searchItem;
			$scope.listItems = response.data.business_list;
	});
	
	NgMap.getMap().then(function(map) {
		console.log('Executed !');
	});
	
	$scope.viewBusiness = function($index){
		$state.go('app.view-business', { myParam : $scope.listItems[$index] });
	}
});


// businessViewController
app.controller('businessViewController', function($scope, $stateParams, BusinessService, $rootScope, $state){
	$scope.listItems = $stateParams.myParam;
});


// NavigationController
app.controller('navigationController', function($scope, $ionicHistory, $state, BusinessService, $stateParams){
	$scope.myGoBack = function(){
		$ionicHistory.goBack();
	}
	$scope.categorySearch = function($ev){
		var catValue = $ev.target.innerHTML;
		$state.go('app.listing', {searchItem : catValue.trim(), key:'categ'});
	}
});


// BusinessService
app.factory('BusinessService',function($http){
	
		var jsonData = "http://ec2-52-23-151-147.compute-1.amazonaws.com/api.php";
		var items = [];
		return {
			getBusiness : function(){				
				return $http.get(jsonData).then(function(response){	
					items = response.data.businessList;
					return items;					
				});
			},
			getSearchBusiness : function($searchItem, $key){
				if($key == 'q'){
					return $http.get(jsonData+'?q='+$searchItem);		
				}
				else if($key == 'categ'){
					return $http.get(jsonData+'?categ='+$searchItem);
				}
			}
		}
});