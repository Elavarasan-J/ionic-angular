// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

/*<script>
function initialize() {
var nom = getUrlVars()["name"];
nom=unescape(nom);
var latitude = getUrlVars()[40.7143528];
var longitude = getUrlVars()[-74.0059731];
if(latitude && longitude){
latitude=parseFloat(latitude);
longitude=parseFloat(longitude);
}
else{
latitude=0;
longitude=0;
}
var myLatLng = {lat:latitude, lng: longitude};

var map = new google.maps.Map(document.getElementById('map'), {
zoom: 4,
center: myLatLng
});

var marker = new google.maps.Marker({
position: myLatLng,
map: map,
title: nom
});

}
google.maps.event.addDomListener(window, 'load', initialize);
</script>*/

.config(function($ionicConfigProvider){
	$ionicConfigProvider.views.maxCache(0);
})
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
	.state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'appController'
  })
  .state('app.playlists', {
      url: '/search',
      views: {
        'menuContent': {
          templateUrl: 'templates/search.html',
          controller: 'indexController'
        },
		'sideMenuItem':{
			templateUrl: 'templates/side-menu.html',
			controller: 'navigationController'
		}
      }
    })
  .state('app.discovery', {
      url: '/discovery',
      views: {
        'menuContent': {
          templateUrl: 'templates/discovery-menu.html',
		  controller: 'navigationController'
        }
      }
    })
  .state('app.festival', {
      url: '/festival',
      views: {
        'menuContent': {
          templateUrl: 'templates/festival-menu.html',
		  controller: 'navigationController'
        }
      }
    })
  .state('app.nature', {
      url: '/nature',
      views: {
        'menuContent': {
          templateUrl: 'templates/nature-menu.html',
		  controller: 'navigationController'
        }
      }
    })
  .state('app.stay', {
      url: '/stay',
      views: {
        'menuContent': {
          templateUrl: 'templates/stay-menu.html',
		  controller: 'navigationController'
        }
      }
    })
   .state('app.accommodation', {
      url: '/accommodation',
      views: {
        'menuContent': {
          templateUrl: 'templates/accommodation-menu.html',
		  controller: 'navigationController'
        }
      }
    })
  .state('app.eat-well', {
      url: '/eat-well',
      views: {
        'menuContent': {
          templateUrl: 'templates/eat-well-menu.html',
		  controller: 'navigationController'
        }
      }
    })
  .state('app.how-to-come', {
      url: '/how-to-come',
      views: {
        'menuContent': {
          templateUrl: 'templates/how-to-come.html',
		  controller: 'navigationController'
        }
      }
    })
  .state('app.deplacer', {
      url: '/deplacer',
      views: {
        'menuContent': {
          templateUrl: 'templates/deplacer-menu.html',
		  controller: 'navigationController'
        }
      }
    })
  .state('app.informer', {
      url: '/informer',
      views: {
        'menuContent': {
          templateUrl: 'templates/informer-menu.html',
		  controller: 'navigationController'
        }
      }
    })
  .state('app.activities', {
      url: '/activities',
      views: {
        'menuContent': {
          templateUrl: 'templates/activity-menu.html',
		  controller: 'navigationController'
        }
      }
    })
  .state('app.water-activities', {
      url: '/water-activities',
      views: {
        'menuContent': {
          templateUrl: 'templates/water-acitivity-menu.html',
		  controller: 'navigationController'
        }
      }
    })
  .state('app.sports-recreation', {
      url: '/sports-recreation',
      views: {
        'menuContent': {
          templateUrl: 'templates/sports-recreation-menu.html',
		  controller: 'navigationController'
        }
      }
    })
   .state('app.trade', {
      url: '/trade',
      views: {
        'menuContent': {
          templateUrl: 'templates/trade-menu.html',
		  controller: 'navigationController'
        }
      }
    })
  .state('app.culture', {
      url: '/culture',
      views: {
        'menuContent': {
          templateUrl: 'templates/culture-menu.html',
		  controller: 'navigationController'
        }
      }
    })
  .state('app.night-world', {
      url: '/night-world',
      views: {
        'menuContent': {
          templateUrl: 'templates/night-world-menu.html',
		  controller: 'navigationController'
        }
      }
    })
  .state('app.association', {
      url: '/association',
      views: {
        'menuContent': {
          templateUrl: 'templates/association-menu.html',
		  controller: 'navigationController'
        }
      }
    })
  .state('app.listing',{
	  url : '/listing/:key/:searchItem',
	  views:{
		  'menuContent' : {
			templateUrl : 'templates/listing.html',
			controller : 'businessListController'
		  }
	  }
  })
  .state('app.view-business',{
	  url: '/view-business',
	  params:{ myParam : '' },
	  views:{
		  'menuContent':{
			 templateUrl : 'templates/view-business.html',
			 controller : 'businessViewController'
		  }
	  }
  })
  .state('app.sort-business',{
	  url: '/sort-business',
	  views:{
		  'menuContent':{
			 templateUrl : 'templates/sort-business.html',
			 controller : 'businessSortController'
		  }
	  }
  })
 	
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/search');
});