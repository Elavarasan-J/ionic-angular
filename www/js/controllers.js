var app = angular.module('starter.controllers', []);

app.controller('appController', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
	
});

app.constant('ApiEndpoint', {
  url: 'http://ec2-52-23-151-147.compute-1.amazonaws.com/api.php'
})
 
app.controller('indexController', function($scope, $state, $ionicSlideBoxDelegate, BusinessList, $timeout, $location){	
	$scope.searcForm = function($searchItem){
		/*console.log($searchItem);*/
		BusinessList.getSearchBusiness($searchItem).then(function(response){
			console.log(response);
			items = response.data.businessList;
			return items;	
		});
		/*$state.go('app.view-business');*/
	}
	  
/*
	// Infinite scroller
	$scope.listItems = [];
	$scope.moreDataAvailable = false;
	var spliceArray, listLength, arrayLength, start = 0, end = 5, listIndex;
	
	BusinessList.getBusiness().then(function(items){
		spliceArray = items.splice(start, end);
		$scope.listItems = spliceArray;
	});
	
	$scope.loadMore = function(){
		$timeout(function() {
			BusinessList.getBusiness().then(function(items){
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
	};
	
	
	// View more
	$scope.viewMore = function(index){
		$location.url('app/view-business');
		listIndex = $scope.listItems[index];
		console.log(listIndex);
	}*/
	
});

// BusinessList factory for Infinite scrolling
app.factory('BusinessList',function($http, ApiEndpoint){
	
	/*console.log(ApiEndpoint);*/
	
		var jsonData = ApiEndpoint.url;
		var items = [];
	 	console.log(jsonData)
		return {
			getBusiness : function(){				
				return $http.get(jsonData).then(function(response){	
					items = response.data.businessList;
					return items;					
				});
			},
			getSearchBusiness : function($searchItem){
				return $http.get(jsonData+'?q='+$searchItem);				
			}
		}
});