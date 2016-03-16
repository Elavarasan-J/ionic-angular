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
app.controller('businessListController', function($scope, $stateParams, BusinessService, $rootScope, $ionicHistory, $state ,NgMap){
	$scope.listItems = [];
	$rootScope.loaderIcon = true;
	$rootScope.$state = $state;
	$scope.viewTitle = $stateParams.searchItem;
	BusinessService.getSearchBusiness($stateParams.searchItem, $stateParams.key, function(response,status){
			if(status){
				$rootScope.loaderIcon = false;
				return $scope.listItems = response.business_list;
			}else{
				$rootScope.loaderIcon = false;
				return $scope.listItems = [];
			}
	});
	
	NgMap.getMap().then(function(map) {
	/*	console.info('markers', map.markers);*/
	});
	 
	$scope.viewBusiness = function($index){
		$state.go('app.view-business', { myParam : $scope.listItems[$index]});
	}
	
	$scope.getDirection = function($index){
			$state.go('app.view-business', { myParam : $scope.listItems[$index]});
	}
});


// businessViewController
app.controller('businessViewController', function($scope, $stateParams, BusinessService, $rootScope, $state, $ionicLoading, NgMap){
	$rootScope.$state = $state;
	$scope.listItems = $stateParams.myParam;
	
	NgMap.getMap().then(function(map) {
		console.log(map)
	});
});


// NavigationController
app.controller('navigationController', function($scope, $ionicHistory, $state, BusinessService, $stateParams,$rootScope){
	
	$rootScope.$state = $state;
	$scope.myGoBack = function(){
		$ionicHistory.goBack();
	}
	$scope.categorySearch = function($ev,$status){
		
		var catValue =($ev.target.innerHTML).trim();
		 
		if($status){
			$state.go('app.listing', {searchItem : catValue, key:'categ_name'});
		}
		else{
			$state.go('app.listing', {searchItem : catValue, key:'categ'});
		}
	}
	 
});


//businessSortController
app.controller('businessSortController',function($scope, $state, BusinessService, $stateParams, $rootScope){
	
	$scope.viewTitle = $stateParams.sortLetter;
	
	$scope.searcForm = function($searchItem){		
		$state.go('app.listing', {searchItem : $searchItem, key:'q'});
	}
	
	$scope.showMap =false;
 
	$scope.sortBusiness = function($event){
	 
		var targetText = $event.target.innerHTML;
		
		$rootScope.loaderIcon = true;
		$scope.showMap = true;
		
		BusinessService.getSearchBusiness(targetText, "sort", function(response,status){
			if(status){
				$rootScope.loaderIcon = false;
				return $scope.listItems = response.business_list;
			}else{
				$rootScope.loaderIcon = false;
				return $scope.listItems = [];
			}
		});
	}
	
	$scope.viewSortBusiness = function($index){
		$state.go('app.sort-view-business', { myParam : $scope.listItems[$index]});	
	}
});
 
app.controller('businessSortViewController', function($scope, $stateParams, BusinessService, $rootScope, $state, $ionicLoading, NgMap){
	$rootScope.$state = $state;
	
	$scope.listItems = $stateParams.myParam;
	
	NgMap.getMap().then(function(map) {
		console.log(map)
	});
});


// articleController
app.controller('articleController', function($scope, $ionicHistory, $state, $stateParams, $rootScope, ArticleService){

	$rootScope.$state = $state;
	
	$scope.getArticle = function(){
			ArticleService.getArticles(function(data, status){
				if(status){
					return $state.go('app.favorites', { myParam : data.article_list});
				}else{
					console.info('Else');
				}
		})
	}
});


// articleListController
app.controller('articleListController', function($scope, $state, $stateParams, $rootScope, ArticleService){
	$rootScope.$state = $state;
	$rootScope.articleList = [];
	$rootScope.articleList = $stateParams.myParam;
 
	$scope.viewArticle = function(articleId){
		ArticleService.getArticleById(articleId, function(data,status){
			if(status){
				return $state.go('app.view-favorite', { articleData : data.articles, articleComment:data.comment});
			}else{
				console.info('Error');
			}
		})
	}
	
});


// articleViewController
app.controller('articleViewController', function($scope, $ionicHistory, $state, $stateParams, $rootScope, ArticleService){
	$rootScope.$state = $state;
	
	$rootScope.articleList  = $stateParams.articleData;
	$scope.articleComment = [];
	$scope.articleComment = $stateParams.articleComment;	
});



// BusinessService
app.factory('BusinessService',function($http){
	
		var jsonData = "http://ec2-54-175-185-25.compute-1.amazonaws.com/api.php";
		var items = [], newStr;
		return {
			getBusiness : function(){				
				return $http.get(jsonData).then(function(response){	
					items = response.data.businessList;
					return items;					
				});
			},
			getSearchBusiness : function($searchItem, $key, callback){
				
				newStr = $searchItem.replace(/-|\//g, "").replace(/\s+/g,' ');
				 
				console.info(newStr);
				
				if($key == 'q'){
					return $http.get(jsonData+'?q='+newStr)
					.success(function(data){
						return callback(data, true);
					})
					.error(function(data){
						return callback(data, false);
					})
				}
				else if($key == 'categ'){
					return $http.get(jsonData+'?categ='+newStr)
					.success(function(data){
						return callback(data, true);
					})
					.error(function(data){
						 return callback(data, false);
					})
				}
				else if($key == 'sort'){
					return $http.get(jsonData+'?sort='+newStr)
					.success(function(data){
						return callback(data, true);
					})
					.error(function(data){
						return callback(data, false);
					})
				}
				else if($key == 'categ_name'){
					return $http.get(jsonData+'?categ_name='+newStr)
					.success(function(data){
						return callback(data, true);
					})
					.error(function(data){
						return callback(data, false);
					})
				}
			}
		}
});


// AticleService
app.factory('ArticleService', function($http){
	var jsonURL = 'http://ec2-54-175-185-25.compute-1.amazonaws.com/api.php';
	var articles = [], articleName;
	
	return {
		getArticles : function(callback){
			return $http.get(jsonURL+'?article')
			.success(function(data){
				return callback(data, true);
			})
			.error(function(data){
				return callback(data, false);
			})
		},
		getArticleById :function(id, callback){
			return $http.get(jsonURL+'?article_id='+id)
			.success(function(data){
				return callback(data, true);
			})
			.error(function(data){
				return callback(data, false);
			})
		}
	}
});
