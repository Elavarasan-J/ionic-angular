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
        }
      }
    })
  .state('app.listing',{
	  url : '/listing/:searchItem',
	  views:{
		  'menuContent' : {
			templateUrl : 'templates/listing.html',
			controller : 'viewBusinessController'
		  }
	  }
  })
  .state('app.view-business',{
	  url: '/view-business',
	  views:{
		  'menuContent':{
			 templateUrl : 'templates/view-business.html',
			 controller : 'viewBusinessController'
		  }
	  }
  })
 	
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/search');
});