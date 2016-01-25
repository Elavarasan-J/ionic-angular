var app = angular.module('starter.controllers', []);

app.controller('appController', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
	
});

app.controller('indexController', function($scope) {
	$scope.searcForm = function(e){
		console.log('Form submitted');
	}
});


app.controller('listController', function($scope,$ionicSlideBoxDelegate,BusinessList,$timeout,$location){
	
 	// Slide box
	$scope.Previous = function(){
		$ionicSlideBoxDelegate.previous();
	}
	$scope.Next = function() {
		$ionicSlideBoxDelegate.next();
	}
	
	
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
	}
	
	/*$scope.viewMore = function(index){
		$scope.listItems[index];
		console.log($scope.listItems[index])
	}*/
	
	/*console.log($scope.listItems[index]);*/
	
});

// BusinessList factory for Infinite scrolling
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