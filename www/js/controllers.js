var app = angular.module('starter.controllers', ['ngMap']);

app.controller('appController', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
	
});


// IndexController
app.controller('indexController', function($scope, $state, $ionicSlideBoxDelegate, BusinessService, $timeout, $location, $rootScope){	
	$rootScope.$state = $state;
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
app.controller('businessListController', function($scope, $stateParams, BusinessService, $rootScope, $ionicHistory, $state){
	$rootScope.loaderIcon = true;
	$rootScope.$state = $state;
	
	BusinessService.getSearchBusiness($stateParams.searchItem, $stateParams.key).then(function(response){
			 
			$rootScope.loaderIcon = false;
			$scope.viewTitle = $stateParams.searchItem;
			$scope.listItems = response.data.business_list;
	});
	 
	
	$scope.viewBusiness = function($index){
		$state.go('app.view-business', { myParam : $scope.listItems[$index] });
	}
	
	$scope.getDirection = function($index){
			$state.go('app.view-business', { myParam : $scope.listItems[$index] });
	}
	
	$scope.showData = function(map){
		/*console.log(map);*/
	}
});


// businessViewController
app.controller('businessViewController', function($scope, $stateParams, BusinessService, $rootScope, $state, $ionicLoading, NgMap){
	$rootScope.$state = $state;
	$scope.listItems = $stateParams.myParam;
	
	NgMap.getMap().then(function(map) {
//		console.log(map.LatLng);
	});
});


// NavigationController
app.controller('navigationController', function($scope, $ionicHistory, $state, BusinessService, $stateParams,$rootScope){
	
	$rootScope.$state = $state;
	$scope.myGoBack = function(){
		$ionicHistory.goBack();
	}
	$scope.categorySearch = function($ev,$status){
		var catValue = $ev.target.innerHTML;
		if($status){
			$state.go('app.listing', {searchItem : catValue.trim(), key:'categ_name'});
		}
		else{
			$state.go('app.listing', {searchItem : catValue.trim(), key:'categ'});
		}
		/*console.log($ev.target.hasAttribute('data-top-menu'));*/
		
	}
	
	/*$scope.categoryMenuSearch = function($ev){
		console.log($ev);
		var menuValue = ($ev.target.innerHTML).trim();
		$state.go('app.listing', {searchItem : menuValue, key:'categ_name'});
		var catValue = $ev.target.innerHTML;
		$state.go('app.listing', {searchItem : catValue.trim(), key:'categ_name'});
	}*/
});


//businessSortController
app.controller('businessSortController',function($scope, $state, BusinessService, $stateParams, $rootScope){
	
	$scope.searchForm = function($searchItem){		
		$state.go('app.listing', {searchItem : $searchItem, key:'q'});
	}
	$scope.sortBusiness = function($event){
		var targetText = $event.target.innerHTML;
		$rootScope.loaderIcon = true;
		BusinessService.getSearchBusiness(targetText, "sort").then(function(response){
		    $rootScope.loaderIcon = false;
			$scope.viewTitle = $stateParams.sortLetter;
			$scope.listItems = response.data.business_list;
		});
	}
});


// BusinessService
app.factory('BusinessService',function($http){
	
		var jsonData = "http://ec2-52-23-151-147.compute-1.amazonaws.com/api.php";
		var items = [], newStr;
		return {
			getBusiness : function(){				
				return $http.get(jsonData).then(function(response){	
					items = response.data.businessList;
					return items;					
				});
			},
			getSearchBusiness : function($searchItem, $key){
				newStr = $searchItem.replace('/',' ').replace(/\s+/g,' ');
				console.log(newStr)
				if($key == 'q'){
					return $http.get(jsonData+'?q='+newStr).success(function(data){
						
					});
				}
				else if($key == 'categ'){
					return $http.get(jsonData+'?categ='+newStr);
				}
				else if($key == 'sort'){
					return $http.get(jsonData+'?sort='+newStr);
				}
				else if($key == 'categ_name'){
					return $http.get(jsonData+'?categ_name='+newStr);
				}
			}
		}
});