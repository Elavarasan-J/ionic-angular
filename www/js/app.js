// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','pikaday'])

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

.config(function($ionicConfigProvider){
	$ionicConfigProvider.views.maxCache(33);
})

.directive('timePicker', function(){
	return{
		type : 'A',
		link : function(scope, element, attrs){
			$(element).timepicker({
				onSelect : function(){
					console.info('Time selected !');
				}
			});
		}
	}
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
  .state('app.banking-insurance', {
      url: '/banking-insurance',
      views: {
        'menuContent': {
          templateUrl: 'templates/banking-insurance-menu.html',
		  controller: 'navigationController'
        }
      }
    })
   .state('app.auto-boat', {
      url: '/auto-boat',
      views: {
        'menuContent': {
          templateUrl: 'templates/auto-boat-menu.html',
		  controller: 'navigationController'
        }
      }
    })
   .state('app.barber-wellness', {
      url: '/barber-wellness',
      views: {
        'menuContent': {
          templateUrl: 'templates/barber-wellness-menu.html',
		  controller: 'navigationController'
        }
      }
    })
   .state('app.artisans', {
      url: '/artisans',
      views: {
        'menuContent': {
          templateUrl: 'templates/artisans-menu.html',
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
  .state('app.services', {
      url: '/services',
      views: {
        'menuContent': {
          templateUrl: 'templates/service-menu.html',
		  controller: 'navigationController'
        }
      }
    })
   .state('app.mode-shopping', {
      url: '/mode-shopping',
      views: {
        'menuContent': {
          templateUrl: 'templates/mode-shopping-menu.html',
		  controller: 'navigationController'
        }
      }
    })
  .state('app.grocery', {
      url: '/grocery',
      views: {
        'menuContent': {
          templateUrl: 'templates/grocery-menu.html',
		  controller: 'navigationController'
        }
      }
    })
  
   .state('app.made-in-re', {
      url: '/made-in-re',
      views: {
        'menuContent': {
          templateUrl: 'templates/made-inre-menu.html',
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
  .state('app.culture', {
      url: '/culture',
      views: {
        'menuContent': {
          templateUrl: 'templates/culture-menu.html',
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
 .state('app.sort-view-business',{
	  url: '/sort-view-business',
	  params: {myParam: null},
	  views:{
		  'menuContent':{
			 templateUrl : 'templates/sort-view-business.html',
			 controller : 'businessSortViewController'
		  }
	  }
  })
  .state('app.news',{
	  url: '/news',
	  views:{
		  'menuContent':{
			 templateUrl : 'templates/news-menu.html',
			 controller : 'navigationController'
		  }
	  }
  })
  .state('app.re-island',{
	  url: '/re-island',
	  views:{
		  'menuContent':{
			 templateUrl : 'templates/re-island-menu.html',
			 controller : 'articleController'
		  }
	  }
  })
  .state('app.future-reason', {
      url: '/future-reason',
      views: {
        'menuContent': {
          templateUrl: 'templates/future-reason-menu.html',
		  controller: 'articleController'
        }
      }
    })
  .state('app.cities', {
      url: '/cities',
      views: {
        'menuContent': {
          templateUrl: 'templates/cities-menu.html',
		  controller: 'articleController'
        }
      }
    })
  .state('app.convinent', {
      url: '/convinent',
      views: {
        'menuContent': {
          templateUrl: 'templates/convinent-menu.html',
		  controller: 'articleController'
        }
      }
    })
  .state('app.favorites', {
      url: '/favorites',
	  params: {myParam: null},
      views: {
        'menuContent': {
          templateUrl: 'templates/our-favorites.html',
		  controller: 'articleListController'
        }
      }
    })
  .state('app.view-favorite', {
      url: '/view-favorite',
	  params:{articleData : null, articleComment:null},
      views: {
        'menuContent': {
          templateUrl: 'templates/view-favorite.html',
		  controller: 'articleViewController'
        }
      }
    })
  .state('app.book-appoinment', {
      url: '/book-appoinment',
      views: {
        'menuContent': {
          templateUrl: 'templates/book-appoinment.html',
		  controller: 'appoinmentController'
        }
      }
    })
 	
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/search');
});




angular.module('dogmeeting-constants', [])
.constant('apiUrl', 'http://ec2-52-90-34-69.compute-1.amazonaws.com')
//.constant('apiUrl', 'http://localhost:8000')
.constant('currentUsername', 'app')
.constant('currentApi_key', 'b4e3730a5d160a95de6c5c96903fba8042d6c092');

angular.module('DogsMeeting.controllers', ['dogmeeting-constants', 'dogsmeeting.services', 'ngOpenFB']).controller('AppCtrl', function($rootScope, $window, $state, $scope, $ionicModal, $timeout,$stateParams, $http, $ionicPopup, $ionicHistory, $ionicLoading, $cordovaPush, $cordovaDialogs, $cordovaMedia, $cordovaToast, $cordovaDevice, $cordovaOauth, apiUrl, currentUsername, currentApi_key, MyCamera, ngFB) {

    $scope.is_terms = false;
    $scope.TheMenu = {};
    //console.log($state.current.name, 'get current state')
    // $rootScope.currentdogavatar = apiUrl + "/media/images/black-dog.png";
    function getCookie(name){
        var pattern = RegExp(name + "=.[^;]*")
        matched = document.cookie.match(pattern)
        if(matched){
            var cookie = matched[0].split('=')
            return cookie[1]
        }
        return false
    }
    var dog_username = getCookie('doguser');
    var dog_apikey = getCookie('dogapi');
    if($state.current.name =='app.home'){
        if(dog_username && dog_apikey){
            $rootScope.currentUsername = dog_username;
            $rootScope.currentApi_key =dog_apikey;
            $window.sessionStorage.currentUsername = dog_username;
            $window.sessionStorage.currentApi_key = dog_apikey;
            $state.go("app.account", {}, { reload: true});
        }else{
            $state.go("app.home", {}, { reload: true});
        }
    }
    

    $scope.loadingshow = function() {
        $ionicLoading.show({
            template: '<ion-spinner icon="spiral"></ion-spinner>'
        });
    };
    $scope.loadinghide = function(){
        $ionicLoading.hide();
    };

    $scope.getNotification = function(){
        $scope.loadingshow();
        try{
            $http.get(apiUrl + "/api/v1/notifications/list/?username="+$window.sessionStorage.currentUsername+"&api_key="+$window.sessionStorage.currentApi_key, {
                headers:{
                    'Content-Type': "application/json"
                }})
                .success(function(data, status, headers,config){
                    $rootScope.notifications = {};
                    $scope.loadinghide();
                    $rootScope.notenotify = data.notify;
                    $rootScope.notemessages = data.message;
                    $scope.TheMenu.close();
                    $state.transitionTo("app.notification", {}, { reload: true});
                });
                
        }catch(err){
            $scope.loadinghide();
            $ionicPopup.alert({
                title: 'Probl&egrave;me de connection!',
                template: 'R&eacute;essayer!'
            });
        }
    };



    $scope.fbLogin = function() {
        $cordovaOauth.facebook("951389651591796", ["email", "public_profile"]).then(function(result) {
            $http.get("https://graph.facebook.com/v2.2/me", { params: { access_token: result.access_token, fields: "id,email,name,gender,picture,first_name,last_name", format: "json" }}).then(function(result) {
                try{
                    $scope.registerData.username = result.data.username;
                } catch (err){}
                try{
                    $scope.registerData.email = result.data.email;
                } catch (err){}
                try{
                    $scope.registerData.first_name = result.data.first_name;
                } catch (err){}
                try{
                    $scope.registerData.last_name = result.data.last_name;
                } catch (err){}
                console.log(result.data);
                $scope.openRegister();
            }, function(error) {
                console.log(error);
                $ionicPopup.alert({
                    title: 'Probl&egrave;me de connection!',
                    template: 'R&eacute;essayer!'+error
                });
            });
        }, function(error) {
            console.log(error);
            $ionicPopup.alert({
                title: 'Probl&egrave;me de connection!',
                template: 'R&eacute;essayer!'+error
            });
        });
    };

    // Register
    $scope.register = function () {
        try{
            var config = null;

            if (ionic.Platform.isAndroid()) {
                config = {
                    "senderID": "25616243145" 
                };
            }
            else if (ionic.Platform.isIOS()) {
                config = {
                    "badge": "true",
                    "sound": "true",
                    "alert": "true"
                }
            }
            $cordovaPush.register(config).then(function (result) {
                if (ionic.Platform.isIOS()) {
                    $scope.regId = result;
                    console.log("got token: " + result);
                    storeDeviceToken("ios");
                }
                console.log("Register 1: " + $scope.regId);
            }, function (err) {
                console.log("Register error 2: " + err);
            });
        }
        catch(err){
            console.log("Register error 2: " + err);
        }
    }

    function storeDeviceToken(type) {
        // Create a random userid to store with it
        var data = { 
            device_id: $cordovaDevice.getUUID(), 
            registration_id: $scope.regId 
        };
        if (type == "ios"){
            urlAdd = "apns";
        }
        else {
            urlAdd = "gcm";
        }
        $http.post(apiUrl + '/api/v1/'+urlAdd+'_device/?username='+$window.sessionStorage.currentUsername+'&api_key='+$window.sessionStorage.currentApi_key, JSON.stringify(data))
            .success(function (data, status) {
                console.log("Token stored, device is successfully subscribed to receive push notifications.");
            })
            .error(function (data, status) {
                console.log("Error storing device token." + data + " " + status);
            }
        );
    }

    // Notification Received
    $scope.$on('$cordovaPush:notificationReceived', function (event, notification) {
        console.log(JSON.stringify([notification]));
        if (ionic.Platform.isAndroid()) {
            handleAndroid(notification);
        }
        else if (ionic.Platform.isIOS()) {
            handleIOS(notification);
        }
    });

    function handleIOS(notification) {
        if (notification.foreground == "1") {
            if (notification.sound) {
                var mediaSrc = $cordovaMedia.newMedia(notification.sound);
                mediaSrc.promise.then($cordovaMedia.play(mediaSrc.media));
            }

            if (notification.body && notification.messageFrom) {
                $cordovaDialogs.alert(notification.body, notification.messageFrom);
            }
            else $cordovaDialogs.alert(notification.alert, "");

            if (notification.badge) {
                $cordovaPush.setBadgeNumber(notification.badge).then(function (result) {
                    console.log("Set badge success " + result)
                }, function (err) {
                    console.log("Set badge error " + err)
                });
            }
        }
    }

    // Android Notification Received Handler
    function handleAndroid(notification) {
        if (notification.event == "registered") {
            $scope.regId = notification.regid;
            storeDeviceToken("android");
        }
        else if (notification.event == "message") {
            $cordovaDialogs.alert(notification.message, "");
        }
    }

    function getBase64Image(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL("image/png");
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    }

    $scope.chooseDogPicType = function() {
        $scope.chooseDogPicPopup = $ionicPopup.alert({
            scope: $scope,
            template: '\
                <input value="Prendre une photo" type="button" ng-click="getdogPhoto(1)" class="button button-block button-balanced" style="margin-bottom: -5px;margin-top: -10px;"/>\
                <input value="Choisir une photo" type="button" ng-click="getdogPhoto(2)" class="button button-block button-balanced" style="margin-bottom: -5px;"/>\
                <input value="Suprimer la photo" type="button" ng-click="deldogPhoto()" class="button button-block button-balanced" style="margin-bottom: -5px;"/>\
                ',
            buttons: [
                {
                    text: 'Annuler',
                    onTap: function (e) {
                        $scope.chooseDogPicPopup.close();
                    }
                }
            ]
        }); 
     };

    $scope.chooseHumanPicType = function() {
        $scope.chooseHumanPicPopup = $ionicPopup.alert({
            // title: 'Menu',
            scope: $scope,
            template: '\
                <input value="Prendre une photo" type="button" ng-click="gethumanPhoto(1)" class="button button-block button-balanced" style="margin-bottom: -5px;margin-top: -10px;"/>\
                <input value="Choisir une photo" type="button" ng-click="gethumanPhoto(2)" class="button button-block button-balanced" style="margin-bottom: -5px;"/>\
                <input value="Suprimer la photo" type="button" ng-click="delhumanPhoto()" class="button button-block button-balanced" style="margin-bottom: -5px;"/>\
                ',
            buttons: [
                {
                    text: 'Annuler',
                    onTap: function (e) {
                        $scope.chooseHumanPicPopup.close();
                    }
                }
            ]
        }); 
     };

    $scope.contactUsEmail = function() {
        var link = "mailto:contact@dogsmeeting.com?subject=DogsMeeting";     
        window.location.href = link;
    }
    $scope.showDogPhoto = false;
    $scope.dogbase64 = "";
    $scope.getdogPhoto = function(source) {
        $scope.chooseDogPicPopup.close();
        source = typeof source !== 'undefined' ? source : $scope.source;
        if(source==1){
            source = Camera.PictureSourceType.CAMERA;
        }
        else{
            source = Camera.PictureSourceType.PHOTOLIBRARY;
        }
        MyCamera.getPicture({
          quality: 75,
          targetWidth: 320,
          targetHeight: 320,
          allowEdit : true,
          sourceType: source,
          destinationType: Camera.DestinationType.DATA_URL,
          saveToPhotoAlbum: false
        }).then(function(imageURI) {
            $scope.dogPhoto = imageURI;
            $scope.showDogPhoto = true;
            $scope.dogBLOBPhoto = $scope.dataURItoBlob("data:image/jpeg;base64,"+imageURI);
            $scope.dogbase64 = "data:image/jpeg;base64,"+imageURI;
        }, function(err) {
          console.log(err);
        });
    };
    $scope.deldogPhoto = function() {
        $scope.dogbase64 = "";
        $scope.showDogPhoto = false;
        $scope.chooseDogPicPopup.close();
    };
    $scope.showhumanPhoto = false;
    $scope.humanbase64 = "";
    $scope.gethumanPhoto = function(source) {
        $scope.chooseHumanPicPopup.close();
        source = typeof source !== 'undefined' ? source : $scope.source;
        if(source==1){
            source = Camera.PictureSourceType.CAMERA;
        }
        else{
            source = Camera.PictureSourceType.PHOTOLIBRARY;
        }
        MyCamera.getPicture({
          quality: 75,
          targetWidth: 320,
          targetHeight: 320,
          allowEdit : true,
          sourceType: source,
          destinationType: Camera.DestinationType.DATA_URL,
          saveToPhotoAlbum: false
        }).then(function(imageURI) {
            $scope.humanPhoto = imageURI;
            $scope.showhumanPhoto = true;
            $scope.humanBLOBPhoto = $scope.dataURItoBlob("data:image/jpeg;base64,"+imageURI);
            $scope.humanbase64 = "data:image/jpeg;base64,"+imageURI;
        }, function(err) {
          console.log(err);
        });
    };
    $scope.delhumanPhoto = function() {
        $scope.humanbase64 = "";
        $scope.showhumanPhoto = false;
        $scope.chooseHumanPicPopup.close();
    };

    $scope.dataURItoBlob = function(dataURI) {
        var byteString = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++)
        {
            ia[i] = byteString.charCodeAt(i);
        }
        var bb = new Blob([ab], { "type": mimeString });
        return bb;
    };
    $scope.resetpassData = {
        password: "",
        password_2: ""
    };
    $scope.submittedResetForm = false;

    $scope.searchData = {
        city: "",
        postalcode: ""
    };
    $scope.submittedSearchForm = false;

    $scope.submittedTokendata = {
        token:""
    }
    $scope.submittedTokenForm = false;

    $scope.loginData = {
        username: "",
        password: ""
    };
    $scope.submittedloginForm = false;

    $scope.forgotData = {
        email: ""
    };
    $scope.submittedforgotForm = false;
    $scope.registerData = {
        username: "",
        password: "",
        email: "",
        first_name: "",
        last_name: "",
        password_2: ""
    };
    $scope.submittedregisterData = false;
    $scope.registerDogData = {
        name: "",
        breed: "",
        gender: "M",
        age: 1,
        description: ""
    };
    $scope.submittedregisterDogData = false;
    $scope.profileData = {
        username: "",
        password: "",
        email: "",
        first_name: "",
        last_name: "",
        name: "",
        breed: "",
        gender: "M",
        age: 1
    };
    $scope.GotoLink = function (link) {
        window.open(link,'_system');
    }
    $scope.profileData1 = {};
    $scope.walk = true; 
    $scope.navigating = false;
    $scope.openMenu = function() {
        $rootScope.notenotifylength = 0;
        $rootScope.notemessageslength = 0;
        try{
            $http.get(apiUrl + "/api/v1/notifications/list/?username="+$window.sessionStorage.currentUsername+"&api_key="+$window.sessionStorage.currentApi_key, {
                headers:{
                    'Content-Type': "application/json"
                }})
                .success(function(data, status, headers,config){
                    $scope.loadinghide();
                    $rootScope.notenotifylength = data.notify.length;
                    $rootScope.notemessageslength = data.message.length;
                    $scope.TheMenu = $ionicPopup.alert({
                        title: 'Menu',
                        scope: $scope,
                        template: '\
                            <input value="Profil" type="button" ng-click="openAccount()" class="button button-block button-balanced" style="margin-bottom: -5px;margin-top: -10px;"/>\
                            <input value="Amis" type="button" ng-click="getFriends()" class="button button-block button-balanced" />\
                            <button ng-click="getMessagesuser()" class="button button-block button-balanced">Messagerie <span class="badge badge-dark">'+$rootScope.notemessageslength+'</span></button>\
                            <button type="button" ng-click="getNotification()" class="button button-block button-balanced">Notifications <span class="badge badge-dark">'+$rootScope.notenotifylength+'</span></button>\
                            <input value="Recherche d\'amis" type="button" ng-click="openSearch()" class="button button-block button-balanced" />\
                            <input value="Contactez-nous" type="button" ng-click="contactUsEmail()" class="button button-block button-balanced" style="margin-bottom: -5px;"/>\
                            <input value="DÃ©connexion" type="button" ng-click="logout()" class="button button-block button-balanced" />\
                            <a ng-click="GotoLink(\'https://twitter.com/Dogs_Meeting\')" ><li class="ion-social-twitter socialli" data-pack="social" data-tags="follow, post, share"></li></a>\
                            <a ng-click="GotoLink(\'https://www.facebook.com/Dogs-Meeting-717731308371870/\')" ><li class="ion-social-facebook socialli" data-pack="social" data-tags="follow, post, share"></li></a>\
                            <a ng-click="GotoLink(\'https://instagram.com/dogs_meeting/\')" ><li class="ion-social-instagram socialli" data-pack="social" data-tags="follow, post, share"></li></a>\
                            ',
                        buttons: [
                            {
                                text: 'Retour',
                                onTap: function (e) {
                                    $scope.TheMenu.close();
                                }
                            }
                        ]
                    });
                });
                
        }catch(err){
            $scope.loadinghide();
        }
    };

    $scope.openAccount = function() {
        $scope.TheMenu.close();
        return $state.go("app.account", {}, {reload: true});
    };

    $scope.openSearch = function() {
        $scope.TheMenu.close();
        return $scope.openSearchBox();
    };

    $scope.openAccountId = function(user_id, $event) {
        $rootScope.account_popups['confirmPopup'+user_id].close();
        return $state.go("app.otheraccount", {userid: user_id}, {reload: true});
    };

    $scope.getMessages = function(thread){
        $rootScope.messageinfo = {};
        $rootScope.threadmsgs = {};
        try{
            $http.get(apiUrl + "/api/v1/message/get-messages/?username="+$window.sessionStorage.currentUsername+"&api_key="+$window.sessionStorage.currentApi_key+"&thread="+thread, {
            headers:{
                'Content-Type': "application/json"
            }})
            .success(function(data, status, headers,config){
                $scope.loadinghide();
                $rootScope.messageinfo.thread = thread;
                $rootScope.messageinfo.to_user = data.to_user;
                $rootScope.receiver = data.receiver;
                $rootScope.threadmsgs = data.messages; 
                $rootScope.notemessageslength = 0;
                //$scope.TheMenu.close();
                $state.transitionTo("app.sendmessage", {thread: thread}, {reload: true})
                return setTimeout(function(){
                    document.getElementById('dummy').scrollIntoView();
                }, 100)
            })
            .error(function(data){
                $scope.loadinghide();
                return data;
            })
        }catch(err){
            return;
        }
    }

    if($stateParams.thread !=undefined){
        $scope.getMessages($stateParams.thread);
        $scope.submittedmessageForm = false;
    }
    $scope.saveMessage = function(){
       // var clientHeight = document.getElementById('manual-scroll').();
        //console.log(clientHeight);

        try{
            $scope.loadingshow();
            $http.defaults.headers.post["Content-Type"] = "application/json";
            $http.post(apiUrl + "/api/v1/message/save-messages/?username="+$window.sessionStorage.currentUsername+"&api_key="+$window.sessionStorage.currentApi_key, $rootScope.messageinfo).success(function(data) {
                $scope.loadinghide();
                return $scope.getMessages($rootScope.messageinfo.thread);
                //return $state.transitionTo("app.sendmessage", {thread: $rootScope.messageinfo.thread}, {reload: true});
            })
            .error(function(data) {
                $scope.loadinghide();
                $ionicPopup.alert({
                    title: 'Probl&egrave;me de connection!',
                    template: err
                }); 
            });

        }catch(err){
            $scope.loadinghide();
            $ionicPopup.alert({
                title: 'Probl&egrave;me de connection!',
                template: 'R&eacute;essayer'
            }); 
        }
    }

    $scope.sendMessage = function(userid){
        $scope.loadingshow();
        $rootScope.messageinfo = {};
        $rootScope.messageinfo.userid = userid;
        $http.get(apiUrl + "/api/v1/thread/get-thread/?username="+$window.sessionStorage.currentUsername+"&api_key="+$window.sessionStorage.currentApi_key+"&touser="+userid, {
            headers:{
                'Content-Type': "application/json"
            }})
            .success(function(data, status, headers,config){
                $scope.loadinghide();
                $rootScope.messageinfo.thread = data.thread;
                $rootScope.messageinfo.touser = data.to_user;
                return $state.go("app.sendmessage", {thread:data.thread}, {reload: true});
            })
            .error(function(data){
                $scope.loadinghide();
                console.log(data);
            })
    
    };

    function delete_cookie(name) {
        document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    $scope.logout = function() {
        $scope.TheMenu.close();
        $rootScope.currentUsername = {};
        $rootScope.currentApi_key = {};
        $rootScope.user_id = {};    
        $scope.loginData.username = "";
        $scope.loginData.password = "";
        delete $window.sessionStorage.currentUsername;
        delete $window.sessionStorage.currentApi_key;
        delete $window.sessionStorage.user_id;
        delete_cookie('dogapi');
        delete_cookie('doguser');
        for (var prop in $rootScope) {
            if (prop.substring(0,1) !== '$') {
                delete $rootScope[prop];
            }
        }
        return $state.go("app.home", {}, {reload: true});
    };
    $scope.showConfirm = function(id, text) {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Alerte de confirmation',
            template: text
        });

        confirmPopup.then(function(res) {
            if(res) {
               $scope.doDelete(id)
            } else {
                console.log('You are not sure');
            }
        });
    }


    $scope.doDelete = function(id){
        $http.get(apiUrl + '/rest/user/'+id)
            .success(function (data, status) {
                $rootScope.currentUsername = {};
                $rootScope.currentApi_key = {};
                $rootScope.user_id = {};    
                $scope.loginData.username = "";
                $scope.loginData.password = "";
                delete $window.sessionStorage.currentUsername;
                delete $window.sessionStorage.currentApi_key;
                delete $window.sessionStorage.user_id;
                delete_cookie('dogapi');
                delete_cookie('doguser');
                return $state.go("app.home", {}, {reload: true});
            })
            .error(function (data, status) {
                console.log("Error storing device token." + data + " " + status);
            }
        );   
    }

    $scope.openML = function() {
        $scope.TheMenu.close();
        return $state.go("app.ml", {}, {});
    };

    $scope.openContactUs = function() {
        $scope.TheMenu.close();
        return $state.go("app.cu", {}, {});
    };

    $rootScope.measure = function(lat1, lon1, lat2, lon2){  // generally used geo measurement function
        var R = 6378.137; // Radius of earth in KM
        var dLat = (lat2 - lat1) * Math.PI / 180;
        var dLon = (lon2 - lon1) * Math.PI / 180;
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon/2) * Math.sin(dLon/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c;
        return d * 1000; // meters
    }
    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(loginmodal) {
        $scope.loginmodal = loginmodal;
    });
    $ionicModal.fromTemplateUrl('templates/new_menu.html', {
        scope: $scope
    }).then(function(menumodal) {
        $scope.menumodal = menumodal;
    });
    // Create the register modal that we will use later
    $ionicModal.fromTemplateUrl('templates/register.html', {
        scope: $scope
    }).then(function(registermodal) {
        $scope.registermodal = registermodal;
    });

    $ionicModal.fromTemplateUrl('templates/forgot.html', {
        scope: $scope
    }).then(function(forgotmodal) {
        $scope.forgotmodal = forgotmodal;
    });

    $ionicModal.fromTemplateUrl('templates/verifyToken.html', {
        scope: $scope
    }).then(function(verifyToken) {
        $scope.verifyToken = verifyToken;
    });

    $ionicModal.fromTemplateUrl('templates/resetPassword.html', {
        scope: $scope
    }).then(function(resetPasswordmodel) {
        $scope.resetPasswordmodel = resetPasswordmodel;
    });


    $ionicModal.fromTemplateUrl('templates/searchmodel.html', {
        scope: $scope
    }).then(function(searchModel) {
        $scope.searchModel = searchModel;
    });

    $ionicModal.fromTemplateUrl('templates/invite-response.html', {
        scope: $scope
    }).then(function(inviteResmodel) {
        $scope.inviteResmodel = inviteResmodel;
    });

    $ionicModal.fromTemplateUrl('templates/terms-conditions.html', {
        scope: $scope
    }).then(function(TermsModel) {
        $scope.TermsModel = TermsModel;
    });
    




    // Create the register modal that we will use later
    $ionicModal.fromTemplateUrl('templates/dog.html', {
        scope: $scope
    }).then(function(registerdogmodal) {
        $scope.registerdogmodal = registerdogmodal;
    });

    $scope.broadcastChange = function() {    
        if($scope.broadcast.checked){    
            $ionicPopup.alert({
                title: 'Mode DogMeeting Activ&eacute;!',
                template: 'Le mode dogmeeting est activ&eacute;, les autres utilisateurs peuvent d&eacute;sormais vous rejoindre !'
            });
        }
        else{
            $ionicPopup.alert({
                title: 'Mode DogMeeting D&eacute;sactiv&eacute;!',
                template: 'Le mode dogmeeting est d&eacute;sactiv&eacute;, les autres utilisateurs ne peuvent plus vous rejoindre !'
            });
        }
    };

    $scope.methodChange = function() {
        if($scope.walk){
            $scope.walk = false;
        }
        else{
            $scope.walk = true;
        }
        if($rootScope.destination!=null){
            $rootScope.myreLoadMap($rootScope.destination);
        }
    };

    $scope.broadcast = { checked: false };
    $scope.openLogin = function() {
        $scope.loginmodal.show();
    };
    $scope.closeLogin = function() {
        $scope.loginmodal.hide();
    };

    $scope.closeForgot = function() {
        $scope.forgotmodal.hide();
    };

    $scope.openRegister = function() {
        $scope.submittedregisterData = false;
        $scope.registermodal.show();
    };
    $scope.openresetPassword = function(){
        $scope.submiteResetData = false;
        $scope.resetPasswordmodel.show()
    }
    $scope.closeresetPassword = function(){
        $scope.resetPasswordmodel.hide()
    }

    $scope.openForgot  = function(){
        $scope.submittedforgotData = false;
        $scope.forgotmodal.show();
    };

    $scope.openVerifyToken = function(){
        $scope.submittedTokenForm = false;
        $scope.verifyToken.show();
    };

    $scope.closeVerifyToken = function(){
        $scope.submittedToken = false;
        $scope.verifyToken.hide();
    };

    $scope.closeRegister = function() {
        $scope.registermodal.hide();
    };
    $scope.openDogRegister = function() {
        $scope.submittedregisterDogData = false;
        $scope.registerdogmodal.show();
    };
    $scope.closeDogRegister = function() {
        $scope.registerdogmodal.hide();
    };
    //SEARCH MODEL
     $scope.openSearchBox = function() {
        $scope.submittedSearchData = false;
        $scope.searchModel.show();
    };
    $scope.closeSearchBox = function() {
        $scope.searchModel.hide();
    };

    $scope.openTerms = function(){
        $scope.TermsModel.show();
    }
    $scope.closeTerms = function(){
        $scope.TermsModel.hide();
    }

    $scope.openinviteResmodel = function() {
        $scope.inviteResmodel.show();
    };
    $scope.closeinviteResmodel = function() {
        $scope.inviteResmodel.hide();
    };





    $scope.doLogin = function() {
        try {
            $scope.loadingshow();
            $http.defaults.headers.post["Content-Type"] = "application/json";
            $http.post(apiUrl + "/api/v1/user/login/", {
                "username": $scope.loginData.username,
                "password": $scope.loginData.password
            }).success(function(data) {
                $scope.loadinghide();
                if (data.success) {
                    $rootScope.currentUsername = data.username;
                    $rootScope.currentApi_key = data.key;
                    $rootScope.user_id = data.id;
                    document.cookie = "doguser="+ data.username;
                    document.cookie = "dogapi="+data.key;    
                    // Access Token details       
                    $window.sessionStorage.currentUsername = data.username;
                    $window.sessionStorage.currentApi_key = data.key;
                    $window.sessionStorage.user_id = data.id;

                    //$cordovaDialogs.alert("here3", "");
                    $scope.register();
                    $http.get(apiUrl + "/api/v1/user/?username="+$window.sessionStorage.currentUsername+"&api_key="+$window.sessionStorage.currentApi_key, {
                        headers:{
                            'Content-Type': "application/json"
                        }})
                        .success(function(data, status, headers,config){
                            //
                                $rootScope.currentdogavatar = apiUrl+"/media/"+data.objects[0].user_dog.thumbnail_picture_40;
                                // console.log("profile: "+ $rootScope.currentdogavatar);
                                $scope.closeLogin();
                                $state.transitionTo("app.map", {}, {
                                    reload: true
                                });
                            }
                        );
                } else {
                    $ionicPopup.alert({
                        title: 'Probl&egrave;me de connection!',
                        template: data.error_message
                    });
                }
            }).error(function(data) {
                $scope.loadinghide();
                $ionicPopup.alert({
                    title: 'Probl&egrave;me de connection!',
                    template: 'R&eacute;essayer!'
                });
            });
        } catch (err) {
            $scope.loadinghide();
            $ionicPopup.alert({
                title: 'Probl&egrave;me de connection!',
                template: err
            });
        }
    };


    // Forgot password
    $scope.doForgot = function(){
        try{
            $scope.loadingshow();
            $http.defaults.headers.post["Content-Type"] = "application/json";
            $http.get(apiUrl + "/rest/forgot-password/?email="+$scope.forgotData.email).success(function(data) {
                $scope.loadinghide();
                $scope.closeForgot();
                $scope.openVerifyToken();
                return $window.sessionStorage.forgetToken = data.token;
            })
            .error(function(data) {
                $scope.loadinghide();
                $scope.closeForgot();
                $scope.openVerifyToken();
                return $window.sessionStorage.forgetToken = data.token;
                // $ionicPopup.alert({
                //     title: 'Probl&egrave;me de connection!',
                //     template: 'R&eacute;essayer!'
                // });
            });

        }catch(err){
            $scope.loadinghide();
            $ionicPopup.alert({
                title: 'Probl&egrave;me de connection!',
                template: err
            }); 
        }
    };
    $scope.CheckToken = function(){
       if($window.sessionStorage.forgetToken == $scope.submittedTokendata.token){
            $scope.closeVerifyToken();
            $scope.resetpassData.token = $scope.submittedTokendata.token;
            return $scope.openresetPassword();
       }else{
            return $ionicPopup.alert({
                title: 'Probl&egrave;me de connection!',
                template: 'R&eacute;essayer!'
            });
       }
    };

    $scope.respondModel = function(invite_id, userid){
        $scope.invite = {};
        $scope.invite.id = invite_id;
        $scope.invite.user = userid;
        return $scope.openinviteResmodel();
    };

    $scope.getFriends = function(){
        $scope.loadingshow();
        try{
            $http.get(apiUrl + "/api/v1/invite/friends/?username="+$window.sessionStorage.currentUsername+"&api_key="+$window.sessionStorage.currentApi_key, {
            headers:{
                'Content-Type': "application/json"
            }})
            .success(function(data, status, headers,config){
                $scope.loadinghide();
                $rootScope.friends  = data.friends;
                $scope.TheMenu.close();
                return $state.go("app.friendlist", {}, {reload: true });
            })
            .error(function(data, status, headers,config){
                return $scope.loadinghide();
            })
        }catch(err){
            $scope.loadinghide();
            $ionicPopup.alert({
                title: 'Probl&egrave;me de connection!',
                template: err
            }); 
        }
        
    }
    //
    $scope.getMessagesuser = function(){
        $scope.loadingshow();
        $http.get(apiUrl + "/api/v1/invite/friends/?username="+$window.sessionStorage.currentUsername+"&api_key="+$window.sessionStorage.currentApi_key, {
            headers:{
                'Content-Type': "application/json"
            }})
            .success(function(data, status, headers,config){
                $scope.loadinghide();
                $scope.TheMenu.close();
                $rootScope.friends  = data.friends;
                return $state.transitionTo("app.messagelist", {}, {reload: true });
            })
            .error(function(data, status, headers,config){
                return $scope.loadinghide();
            })
    }

    //Accept invitations
    $scope.acceptInvite = function(invite_id, status){
        try{
            $scope.loadingshow();
            $http.defaults.headers.post["Content-Type"] = "application/json";
            $http.post(apiUrl + "/api/v1/invite/accepted/?username="+$window.sessionStorage.currentUsername+"&api_key="+$window.sessionStorage.currentApi_key+"&invid="+invite_id,{
                                "status": "accepted",
                            })
                .success(function(data){
                    $scope.loadinghide();
                    $scope.closeinviteResmodel();
                    $scope.getFriends();
                    return $state.transitionTo("app.friendlist", {}, {
                        reload: true
                    });
                })
                .error(function(err){
                    $scope.closeinviteResmodel();
                    $scope.loadinghide();
                    return $ionicPopup.alert({
                        title: 'Probl&egrave;me de connection!',
                        template:'error'
                    });
                })

         }catch(err){
            $scope.loadinghide();
            return $ionicPopup.alert({
                title: 'Probl&egrave;me de connection!',
                template: 'err'
            });
         }
    };
    // Reject Invitations

    $scope.rejectInvite = function(invite_id, status){
        try{
            $scope.loadingshow();
            $http.defaults.headers.post["Content-Type"] = "application/json";
            $http.post(apiUrl + "/api/v1/invite/rejected/?username="+$window.sessionStorage.currentUsername+"&api_key="+$window.sessionStorage.currentApi_key+"&invid="+invite_id,{
                                "status": "rejected",
                            })
                .success(function(data){
                    $scope.loadinghide();
                    $scope.closeinviteResmodel();
                    return $state.transitionTo("app.friendlist", {}, {
                        reload: true
                    });
                })
                .error(function(err){
                    $scope.closeinviteResmodel();
                    $scope.loadinghide();
                    return $ionicPopup.alert({
                        title: 'Probl&egrave;me de connection!',
                        template:'error'
                    });
                })

         }catch(err){
            $scope.loadinghide();
            return $ionicPopup.alert({
                title: 'Probl&egrave;me de connection!',
                template: 'err'
            });
         }
    };

    $scope.viewProfile = function(userid){
        $scope.closeinviteResmodel();
        return $state.go("app.viewuser", {userid:userid}, {reload: true}); 
    };


    $scope.resetPassword = function(){
        if($scope.resetpassData.password == $scope.resetpassData.password_2){
             try{
                $scope.loadingshow();
                $http.defaults.headers.post["Content-Type"] = "application/json";
                $http.get(apiUrl + "/rest/reset-password/?email="+$scope.forgotData.email+"&password="+$scope.resetpassData.password)
                    .success(function(data){
                        $scope.loadinghide();
                        $scope.closeresetPassword();
                        return $state.transitionTo("app.home", {}, {
                            reload: false
                        });
                    })
                    .error(function(err){
                        $scope.loadinghide();
                        return $ionicPopup.alert({
                            title: 'Probl&egrave;me de connection!',
                            template:'error'
                        });
                    })

             }catch(err){
                $scope.loadinghide();
                return $ionicPopup.alert({
                    title: 'Probl&egrave;me de connection!',
                    template: 'err'
                });
             }
        }else{
            return $ionicPopup.alert({
                title: 'Les mots de passe ne correspondent!',
                template: 'R&eacute;essayer!'
            });
        }
    };

    //Terms

    $scope.termsAccepted = function(){
        $scope.is_terms = true;
        $scope.registerDogData.terms = true;
        return $scope.closeTerms();
    }

    $scope.termsRejected = function(){
        $scope.is_terms = false;
        $scope.registerDogData.terms = null;
        return $scope.closeTerms();
    }

    $scope.saveProfile = function() {
        try {
            $http.defaults.headers.post["Content-Type"] = "application/json";
            fullURL = apiUrl + "/api/v1/user/"+$window.sessionStorage.user_id+"/?username="+$window.sessionStorage.currentUsername+"&api_key="+$window.sessionStorage.currentApi_key;
            $http.patch(fullURL, {
                "email": $scope.profileData1.email,
                "first_name": $scope.profileData1.first_name,
                "last_name": $scope.profileData1.last_name,
                "city": $scope.profileData1.city,
                "postalcode": $scope.profileData1.postalcode
            }).success(function(data, status, headers, config) {
                if (data.success||status==200) {
                $http.get(apiUrl + "/api/v1/user/?username="+$window.sessionStorage.currentUsername+"&api_key="+$window.sessionStorage.currentApi_key, {
                    headers:{
                        'Content-Type': "application/json"
                    }})
                    .success(function(data, status, headers,config){
                    if((typeof $scope.humanbase64 === 'undefined') || ($scope.humanbase64 == "")){ 
                        $http.put(apiUrl+"/api/v1/profile/"+data.objects[0].user_profile.id+"/?username="+$window.sessionStorage.currentUsername+"&api_key="+$window.sessionStorage.currentApi_key,{
                                "city": $scope.profileData1.city,
                                "postalcode": $scope.profileData1.postalcode,

                            }
                        );
                    }else{
                        $http.put(apiUrl+"/api/v1/profile/"+data.objects[0].user_profile.id+"/?username="+$window.sessionStorage.currentUsername+"&api_key="+$window.sessionStorage.currentApi_key,{
                                "base64_image": $scope.humanbase64,
                                "city": $scope.profileData1.city,
                                "postalcode": $scope.profileData1.postalcode
                            }
                        );
                    }
                    if((typeof $scope.dogbase64 === 'undefined') || ($scope.dogbase64 == "")){ 
                        vars = {
                            "name": $scope.profileData1.name,
                            "breed": $scope.profileData1.breed,
                            "age": $scope.profileData1.age,
                            "gender": $scope.profileData1.gender,
                            "description": $scope.profileData1.description
                        };
                    }
                    else{
                        vars = {
                            "name": $scope.profileData1.name,
                            "breed": $scope.profileData1.breed,
                            "age": $scope.profileData1.age,
                            "base64_image": $scope.dogbase64,
                            "gender": $scope.profileData1.gender,
                            "description": $scope.profileData1.description
                        };
                    }
                                                                // user_dog.id
                    $http.put(apiUrl + "/api/v1/dog/"+data.objects[0].user_dog.id+"/?username="+$window.sessionStorage.currentUsername+"&api_key="+$window.sessionStorage.currentApi_key, vars).success(function(data, status, headers, config) {
                        if (data.success||status==200) {
                            try {
                                $http.get(requestURL, {
                                    headers:{
                                        'Content-Type': "application/json"
                                    }})
                                    .success(function(data, status, headers,config){
                                        if(defineduserid){
                                            $rootScope.user_object = data;
                                        }
                                        else{
                                            $rootScope.user_object = data.objects[0];
                                        }
                                        $scope.defineduserid = defineduserid;
                                    });
                            } catch (err) {
                                $ionicPopup.alert({
                                    title: 'Probl&egrave;me de connection!',
                                    template: err
                                });
                            }
                            $ionicHistory.nextViewOptions({
                                disableBack: true
                            });
                            if((typeof $scope.dogbase64 === 'undefined') || ($scope.dogbase64 == "")){ 
                            }
                            else{
                                $rootScope.currentdogavatar = apiUrl+"/media/"+$rootScope.user_object.user_dog.thumbnail_picture_40;
                            }
                            $state.go("app.account", $scope, {
                                reload: 'app', 
                                inherit: false, 
                                notify: true 
                            });
                        } else {
                            $ionicPopup.alert({
                                title: 'Probl&egrave;me de sauvegarde!',
                                template: data.error_message
                            });
                        }
                    }).error(function(data) {
                        $ionicPopup.alert({
                            title: 'Probl&egrave;me de sauvegarde!',
                            template: 'R&eacute;essayer!'
                        });
                    });

                    });
                    
                } else {
                    $ionicPopup.alert({
                        title: 'Probl&egrave;me de sauvegarde!',
                        template: data.error_message
                    });
                }
            }).error(function(data) {
                $ionicPopup.alert({
                    title: 'Probl&egrave;me de sauvegarde!',
                    template: 'R&eacute;essayer!'
                });
            });
        } catch (err) {
            $ionicPopup.alert({
                title: 'Probl&egrave;me de sauvegarde!',
                template: err
            });
        }
    };
    $scope.doRegister = function() {
        try {
            $scope.loadingshow();
            $http.defaults.headers.post["Content-Type"] = "application/json";
            $http.post(apiUrl + "/api/v1/user/?username="+currentUsername+"&api_key="+currentApi_key, {
              "username"  : $scope.registerData.username,
              "password"  : $scope.registerData.password,
              "email"     : $scope.registerData.email,
              "first_name": $scope.registerData.first_name,
              "last_name" : $scope.registerData.last_name,
              "password_2": $scope.registerData.password_2,
              "postalcode" : $scope.registerData.postalcode,
              "city": $scope.registerData.city


            }).success(function(data, status, headers, config) {
                $scope.loadinghide();
                if (data.success||status==201||status==200) {
                    $window.sessionStorage.currentUsername = data.username;
                    $window.sessionStorage.currentApi_key = data.api_key;
                    $window.sessionStorage.user_id = data.id;
                    if(typeof $scope.humanbase64 !=='undefined' && $scope.humanbase64 !=''){
                        $http.put(apiUrl+"/api/v1/profile/"+data.user_profile.id+"/?username="+$window.sessionStorage.currentUsername+"&api_key="+$window.sessionStorage.currentApi_key,{
                                    "base64_image": $scope.humanbase64
                                }
                            );
                    }
                    $scope.closeRegister();
                    $scope.openDogRegister();
                } else {
                    $ionicPopup.alert({
                        title: 'Probl&egrave;me de sauvegarde!',
                        template: data.error_message
                    });
                }
            }).error(function(data, status, headers, config) {
                $scope.loadinghide();
                if(status==500||data==null){
                    $ionicPopup.alert({
                        title: 'Probl&egrave;me de sauvegarde!',
                        template: 'R&eacute;essayer!'
                    });
                }
                else{
                    $ionicPopup.alert({
                        title: 'Probl&egrave;me de sauvegarde!',
                        template: unescape(data['__all__'])
                    });
                }
            });
        } catch (err) {
            $scope.loadinghide();
            $ionicPopup.alert({
                title: 'Probl&egrave;me de sauvegarde!',
                template: err
            });
        }
      };
    $scope.doDogRegister = function() {
        try {
            $scope.loadingshow();
            $http.defaults.headers.post["Content-Type"] = "application/json";
            $http.post(apiUrl + "/api/v1/dog/?username="+$window.sessionStorage.currentUsername+"&api_key="+$window.sessionStorage.currentApi_key, {
              "name" : $scope.registerDogData.name,
              "breed" : $scope.registerDogData.breed,
              "gender" : $scope.registerDogData.gender,
              "age": $scope.registerDogData.age,
              "description": $scope.registerDogData.description,
              "base64_image": $scope.dogbase64
            }).success(function(data, status, headers, config) {
                $scope.loadinghide();
                if (data.success||status==201||status==200) {
                    $ionicHistory.nextViewOptions({
                        disableBack: true
                    });
                    // $rootScope.currentUsername = data.username
                    // $rootScope.currentApi_key = data.key
                    $scope.closeDogRegister();
                    $state.transitionTo("app.map", {}, {
                        reload: false
                    });
                } else {
                    $ionicPopup.alert({
                        title: 'Probl&egrave;me de sauvegarde!',
                        template: data.error_message
                    });
                }
            }).error(function(data, status, headers, config) {
                $scope.loadinghide();
                if(status==500){
                    $ionicPopup.alert({
                        title: 'Probl&egrave;me de sauvegarde!',
                        template: 'R&eacute;essayer!'
                    });
                }
                else{
                    $ionicPopup.alert({
                        title: 'Probl&egrave;me de sauvegarde!',
                        template: unescape(data.error)
                    });
                }
            });
        } catch (err) {
            $scope.loadinghide();
            $ionicPopup.alert({
                title: 'Probl&egrave;me de sauvegarde!',
                template: err
            });
        }
      };

    var intervalID = setInterval(function() {
        if($scope.broadcast.checked){
            navigator.geolocation.getCurrentPosition(function(pos) {
                $http.put(apiUrl + "/api/v1/coord/1/?username="+$window.sessionStorage.currentUsername+"&api_key="+$window.sessionStorage.currentApi_key, {
                    'lat': pos.coords.latitude,
                    'long': pos.coords.longitude
                }).success(function(data, status, headers, config) {
                    if (status==201||status==200) {
                    } else {
                    }
                }).error(function(data, status, headers, config) {
                });
            }, function(error) {
            });
        }
    }, 150000); //5000
    try {
        $http.get(apiUrl + "/api/v1/user/?username="+$window.sessionStorage.currentUsername+"&api_key="+$window.sessionStorage.currentApi_key, {
            headers:{
                'Content-Type': "application/json"
            }})
            .success(function(data, status, headers,config){
                $scope.profileData1 = {
                    username: data.objects[0].username,
                    email: data.objects[0].email,
                    first_name: data.objects[0].first_name,
                    last_name: data.objects[0].last_name,
                    name: data.objects[0].user_dog.name,
                    breed: data.objects[0].user_dog.breed,
                    gender: data.objects[0].user_dog.gender,
                    age: data.objects[0].user_dog.age,
                    description: data.objects[0].user_dog.description,
                    dog_thumbnail_picture: data.objects[0].user_dog.thumbnail_picture,
                    city: data.objects[0].user_profile.city,
                    postalcode: data.objects[0].user_profile.postalcode,
                    human_thumbnail_picture: data.objects[0].user_profile.thumbnail_picture
                };
            })
            .error(function(data, status, headers,config){
            })
            .then(function(result){
            });
    } catch (err) {
        $ionicPopup.alert({
            title: 'Probl&egrave;me de connection!',
            template: err
        });
    }
    var interval2ID = setInterval(function() {
        if($rootScope.destination==null){
            try{
                $rootScope.clearMarkers();
            }
            catch(err){

            }
            try{
                $rootScope.updateMarkers();
            }
            catch(err){

            }
        }
    }, 5000);

    $scope.obj;
    var pictureSource;   // picture source
    var destinationType; // sets the format of returned value
    var url;
    
    // on DeviceReady check if already logged in (in our case CODE saved)
    ionic.Platform.ready(function() {
        //console.log("ready get camera types");
        if (!navigator.camera)
            {
            // error handling
            return;
            }
        //pictureSource=navigator.camera.PictureSourceType.PHOTOLIBRARY;
        pictureSource=navigator.camera.PictureSourceType.CAMERA;
        destinationType=navigator.camera.DestinationType.FILE_URI;
        });
    
    // take picture
    $scope.takePicture = function() {
        //console.log("got camera button click");
        var options =   {
            quality: 50,
            destinationType: destinationType,
            sourceType: pictureSource,
            encodingType: 0
            };
        if (!navigator.camera)
            {
            // error handling
            return;
            }
        navigator.camera.getPicture(
            function (imageURI) {
                //console.log("got camera success ", imageURI);
                $scope.mypicture = imageURI;
                },
            function (err) {
                //console.log("got camera error ", err);
                // error handling camera plugin
                },
            options);
        };


    // do POST on upload url form by http / html form    
    $scope.update = function(obj) {
        if (!$scope.data.uploadurl)
            {
            // error handling no upload url
            return;
            }
        if (!$scope.mypicture)
            {
            // error handling no picture given
            return;
            }
        var options = new FileUploadOptions();
        options.fileKey="ffile";
        options.fileName=$scope.mypicture.substr($scope.mypicture.lastIndexOf('/')+1);
        options.mimeType="image/jpeg";
        var params = {};
        params.other = obj.text; // some other POST fields
        options.params = params;
        
        var ft = new FileTransfer();
        ft.upload($scope.mypicture, encodeURI($scope.data.uploadurl), uploadSuccess, uploadError, options);
        function uploadSuccess(r) {
            }
        function uploadError(error) {
            }
        };
        $scope.searchUser = function(){
            var requestURL = apiUrl + "/api/v1/userlist/?";
            var params = "";
            if($scope.searchData.postalcode !="" && $scope.searchData.city ==""){
                params +='user_profile__postalcode='+ $scope.searchData.postalcode;
            }else if($scope.searchData.postalcode !="" && $scope.searchData.city !=""){
                params +='user_profile__city='+ $scope.searchData.city+'&&user_profile__postalcode='+ $scope.searchData.postalcode;
            }else if($scope.searchData.postalcode =="" && $scope.searchData.city !=""){
                params +='user_profile__city='+ $scope.searchData.city;
            }else{
                params = "";
            }
            if($scope.searchData.username !="" && $scope.searchData.username !='undefined'){
                params += '&&username__contains='+ $scope.searchData.username;
            }
            $http.get(requestURL+params, {
                headers:{
                    'Content-Type': "application/json"
                }})
                .success(function(data, status, headers,config){ 
                if(typeof user_id === 'undefined'){ 
                    $rootScope.userresult = data.objects;
                    $scope.closeSearchBox();
                    return $state.go("app.userlist", {}, {reload: true});
                } else{
                    $rootScope.userresult = data.objects;
                    $scope.closeSearchBox();
                    return $state.go("app.userlist", {}, {reload: true});
                }
            });
        }

}).controller('EditaccountCtrl', function($rootScope, $window, $stateParams, $scope, $http, $ionicPopup, apiUrl, currentUsername, currentApi_key) {
    try {
        $http.get(apiUrl + "/api/v1/user/?username="+$window.sessionStorage.currentUsername+"&api_key="+$window.sessionStorage.currentApi_key, {
            headers:{
                'Content-Type': "application/json"
            }})
            .success(function(data, status, headers,config){

                $scope.profileData1 = {
                    username: data.objects[0].username,
                    email: data.objects[0].email,
                    first_name: data.objects[0].first_name,
                    last_name: data.objects[0].last_name,
                    name: data.objects[0].user_dog.name,
                    breed: data.objects[0].user_dog.breed,
                    gender: data.objects[0].user_dog.gender,
                    age: data.objects[0].user_dog.age,
                    description: data.objects[0].user_dog.description,
                    dog_thumbnail_picture: data.objects[0].user_dog.thumbnail_picture,
                    human_thumbnail_picture: data.objects[0].user_profile.thumbnail_picture
                };
            })
            .error(function(data, status, headers,config){
            })
            .then(function(result){
            });
    } catch (err) {
        $ionicPopup.alert({
            title: 'Probl&egrave;me de connection!',
            template: err
        });
    }

}).controller('AccountCtrl', function($rootScope, $window, $stateParams, $scope, $http, $ionicPopup, apiUrl, currentUsername, currentApi_key) {
    user_id = $stateParams.userid;
    $scope.apiUrl = apiUrl;

    $scope.viewImage = function(url){
        $scope.ImageView = $ionicPopup.alert({
            title: 'Image',
            template: '<img ng-src="'+apiUrl+'/static/media/'+url+'">',
            buttons: [
                {
                    text: 'Retour',
                    onTap: function (e) {
                        $scope.ImageView.close();
                    }
                }
            ]
        });
        return $scope.ImageView;
    };


    if(typeof user_id === 'undefined'){ //$scope.humanBLOBPhoto
        defineduserid = false;
        requestURL = apiUrl + "/api/v1/user/?username="+$window.sessionStorage.currentUsername+"&api_key="+$window.sessionStorage.currentApi_key;
    }
    else{
        defineduserid = true;
        requestURL = apiUrl + "/api/v1/user/"+user_id+"/?username="+$window.sessionStorage.currentUsername+"&api_key="+$window.sessionStorage.currentApi_key;
    }
    try {
        $http.get(requestURL, {
            headers:{
                'Content-Type': "application/json"
            }})
            .success(function(data, status, headers,config){
                console.log(data);

                if(defineduserid){
                    $rootScope.user_object = data;
                }
                else{
                    $rootScope.user_object = data.objects[0];
                }
                $scope.defineduserid = defineduserid;
            });
    } catch (err) {
        $ionicPopup.alert({
            title: 'Probl&egrave;me de connection!',
            template: err
        });
    }
}).controller('DogCtrl', function($stateParams, $scope) {
    $scope.currentlatlong = $stateParams.from;

//User-filtering-listing     
}).controller('UserCtrl', function($stateParams,$ionicModal, $state, $window, $rootScope, $http, $ionicPopup, apiUrl, $scope) {
    user_id = $stateParams.userid;
    $scope.users = {};
    $scope.apiUrl = apiUrl;
    $scope.inviteModel = '';
    $ionicModal.fromTemplateUrl('templates/invite-model.html', {
        scope: $scope
    }).then(function(inviteModel) {
        $scope.inviteModel = inviteModel;
    });
    $scope.viewImage = function(url){
        $scope.ImageView = $ionicPopup.alert({
            title: 'Image',
            template: '<img ng-src="'+apiUrl+'/static/'+url+'">',
            buttons: [
                {
                    text: 'Retour',
                    onTap: function (e) {
                        $scope.ImageView.close();
                    }
                }
            ]
        });
        return $scope.ImageView;
    };

    //Invite Model
     $scope.openInviteModelBox = function() {
        $scope.inviteModel.show();
    };
    $scope.closeInviteModelBox = function() {
        $scope.inviteModel.hide();
    };


    if(typeof user_id === 'undefined'){ //$scope.humanBLOBPhoto
        //requestURL = apiUrl + "/api/v1/userlist"
    }
    else{
        requestURL = apiUrl + "/api/v1/userlist/"+user_id+"/?username="+$window.sessionStorage.currentUsername+"&api_key="+$window.sessionStorage.currentApi_key;
        try {
            $http.get(requestURL, {
                headers:{
                    'Content-Type': "application/json"
                }})
                .success(function(data, status, headers,config){ 
                    if(typeof user_id === 'undefined'){ 
                        $rootScope.userresult = data.objects;
                    } else{
                        $scope.users = data;
                    }
                });
        }catch (err) {
            $ionicPopup.alert({
                title: 'Probl&egrave;me de connection!',
                template: err
            });
        }
    };
    $scope.clickinviteModel = function(userid){
        $scope.loadingshow();
        requestURL = apiUrl + "/api/v1/userlist/"+userid+"/?username="+$window.sessionStorage.currentUsername+"&api_key="+$window.sessionStorage.currentApi_key;
        try {
            $http.get(requestURL, {
                headers:{
                    'Content-Type': "application/json"
                }})
                .success(function(data, status, headers,config){ 
                    $rootScope.invite = data;
                    $scope.loadinghide();
                    return $scope.openInviteModelBox();
                });
        }catch (err) {
            $scope.loadinghide();
            $ionicPopup.alert({
                title: 'Probl&egrave;me de connection!',
                template: err
            });
        }
    };
    $scope.viewProfile = function(userid){
        $scope.closeInviteModelBox();
        return $state.go("app.viewuser", {userid:userid}, {reload: true}); 
    };
    $scope.addInvite = function(userid){
        $scope.loadingshow();
        $http.defaults.headers.post["Content-Type"] = "application/json";
        $http.post(apiUrl + "/api/v1/invite/add-invite/?username="+$window.sessionStorage.currentUsername+"&api_key="+$window.sessionStorage.currentApi_key+"&touser="+userid, {
            "touser": userid
        })
        .success(function(data){
            $scope.closeInviteModelBox();
            $scope.loadinghide();
            return $state.go("app.account", {}, {reload: true}); 
        })
        .error(function(data){
            $scope.loadinghide();
             $ionicPopup.alert({
                title: 'Probl&egrave;me de connection!',
                template: err
            });
        })
    };

}).factory('LocationService', function($q) {
    var latLong = null;
    var getLatLong = function(refresh) {
        var deferred = $q.defer();
        if (latLong === null || refresh) {
            // console.log('Getting lat long');
            navigator.geolocation.getCurrentPosition(function(pos) {
                // console.log('Position=')
                // console.log(pos);
                latLong = {
                    'lat': pos.coords.latitude,
                    'long': pos.coords.longitude
                }
                deferred.resolve(latLong);
            }, function(error) {
                latLong = null
                deferred.resolve(latLong);
            });
        } else {
            deferred.resolve(latLong);
        }
        return deferred.promise;
    };
    return {
        getLatLong: getLatLong
    }
}).controller('MapCtrl', function($scope, $window, $ionicLoading, $http, $compile, $rootScope, $stateParams, $ionicPopup, $state, $ionicHistory, LocationService, apiUrl, currentUsername, currentApi_key) {
    
    $scope.centerMap = function() {
        LocationService.getLatLong().then(function(latLong) {
            $scope.map.setCenter(new google.maps.LatLng(latLong.lat, latLong.long));
        });
    };

    $scope.reloadMap = function() {
        $scope.navigating = false;
        $rootScope.destination = null;
        $rootScope.directionsDisplay.setMap(null);
        $rootScope.directionsDisplay = null;
        $scope.duration = "";
        $rootScope.clearMarkers();
        $rootScope.updateMarkers();
    };

    function initialize() {
        var myLatlng = new google.maps.LatLng(48.8567, 2.3508);

        var mapOptions = {
            center: new google.maps.LatLng(48.8567, 2.3508),
            zoom: 16,
            streetViewControl: false,
            zoomControl: false,
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        $scope.map = map;

        $rootScope.clearMarkers = function(){
            for (var i = 0; i < $rootScope.DoggieMarkers.length; i++) {
                try{
                    $rootScope.DoggieMarkers[i].setMap(null);
                }
                catch(err){
                }
            }
        }

        $rootScope.updateMarkers = function (){
                // dev = true;
                dev = false;
                latLong = $scope.latLong; 
                if(dev){
                    for (j = 0; j < 5; j++) {
                        plusOrMinus = Math.round(Math.random());
                        minusOrPlus = Math.round(Math.random());
                        if (plusOrMinus == 1) {
                            if (minusOrPlus == 1) {
                                newlatOffset = latLong.lat - Math.round(Math.random() * 10) / 1000;
                                newlngOffset = latLong.long + Math.round(Math.random() * 10) / 1000;
                            } else {
                                newlatOffset = latLong.lat + Math.round(Math.random() * 10) / 1000;
                                newlngOffset = latLong.long - Math.round(Math.random() * 10) / 1000;
                            }
                        } else {
                            if (minusOrPlus == 1) {
                                newlatOffset = latLong.lat + Math.round(Math.random() * 10) / 1000;
                                newlngOffset = latLong.long + Math.round(Math.random() * 10) / 1000;
                            } else {
                                newlatOffset = latLong.lat - Math.round(Math.random() * 10) / 1000;
                                newlngOffset = latLong.long - Math.round(Math.random() * 10) / 1000;
                            }
                        }
                        newLatLong = new google.maps.LatLng(newlatOffset, newlngOffset);
                        dogMeeters = new google.maps.Marker({
                            position: new google.maps.LatLng(newlatOffset, newlngOffset),
                            map: map,
                            icon: apiUrl + "/media/images/pin.png",
                            title: "My Location"
                        });
                        var infowindow = new google.maps.InfoWindow();
                        google.maps.event.addListener(dogMeeters, 'click', function(event) {
                            var confirmPopup = $ionicPopup.show({
                                template: ' \
                  <img class="title-image" src="http://app.dogsmeeting.com/media/images/2015/5/24/070bc799-1f15-46ad-a272-ed4675df82dc-40.png" width="40" height="40" /> Grusha\
                  Teckel \
                  ',
                                title: 'Chien',
                                // subTitle: 'Please use normal things',
                                scope: $scope,
                                buttons: [{
                                    text: 'Annuler'
                                }, {
                                    text: '<b>Rejoindre</b>',
                                    type: 'button-positive',
                                    onTap: function(e) {
                                      $rootScope.myreLoadMap(event);
                                    }
                                }]
                            });
                        });
                        $rootScope.LatLngList.push(newLatLong);
                        $rootScope.DoggieMarkers.push(dogMeeters);
                        // console.log(dogMeeters);
                    }
                }
                else{
                    // Not dev env. load real people
                    $http.get(apiUrl + "/api/v1/coord/?username="+$window.sessionStorage.currentUsername+"&api_key="+$window.sessionStorage.currentApi_key, {
                        headers:{
                            'Content-Type': "application/json"
                        }})
                        .success(function(data, status, headers,config){
                          $scope.doggies_objects = data.objects
                          $rootScope.account_popups = {};
                          $rootScope.account_details = {};
                          $rootScope.userids = {};
                          for(var l=0; l<$scope.doggies_objects.length; l++){

                                newlatOffset = $scope.doggies_objects[l].lat;
                                newlngOffset = $scope.doggies_objects[l].long;
                                newdog_breed = $scope.doggies_objects[l].dog_breed;
                                newdog_thumb = $scope.doggies_objects[l].dog_thumb;
                                newdog_name = $scope.doggies_objects[l].dog_name;
                                newuser_id = $scope.doggies_objects[l].user_id;
                                newLatLong = new google.maps.LatLng(newlatOffset, newlngOffset);
                                dogMeeters = new google.maps.Marker({
                                    position: new google.maps.LatLng(newlatOffset, newlngOffset),
                                    map: map,
                                    icon: apiUrl + "/media/images/pin.png",
                                    title: newdog_name
                                });

                                var infowindow = new google.maps.InfoWindow();
                                $rootScope.account_details['newdog_thumb'+newuser_id] = newdog_thumb;
                                $rootScope.account_details['newdog_breed'+newuser_id] = newdog_breed;
                                $rootScope.account_details['newdog_name'+newuser_id] = newdog_name;
                                dogMeeters.set('userid', newuser_id);
                                google.maps.event.addListener(dogMeeters, 'click', function(event) {
                                    user_id = this.get('userid');
                                    // console.log(user_id);
                                    $rootScope.account_popups['confirmPopup'+user_id] = $ionicPopup.show({
                                        template: '\
                                                  <img class="title-image" src="http://app.dogsmeeting.com/media/'+$rootScope.account_details['newdog_thumb'+user_id]+'" width="40" height="40" /> '+$rootScope.account_details['newdog_name'+user_id]+'\
                                                  '+$rootScope.account_details['newdog_breed'+user_id]+' \
                                                  <input value="Profil" type="button" ng-click="openAccountId('+user_id+', $event)" class="button button-block button-balanced" />\
                                                  ',
                                        title: 'Chien',
                                        scope: $scope,
                                        buttons: [{
                                            text: 'Annuler'
                                        }, {
                                            text: '<b>Rejoindre</b>',
                                            type: 'button-positive',
                                            onTap: function(e) {
                                              $rootScope.myreLoadMap(event, user_id);
                                            }
                                        }]
                                    });
                                });
                                $rootScope.LatLngList.push(newLatLong);
                                $rootScope.DoggieMarkers.push(dogMeeters);
                          }
                        });
                }
        }
        $rootScope.myreLoadMap = function (event, user_id) {
            try{
                functionlat = event.latLng.lat();
                functionlng = event.latLng.lng();
            }
            catch (err){
                functionlat = event.lat;
                functionlng = event.lng;
            }
            $http.defaults.headers.post["Content-Type"] = "application/json";
            $http.post(apiUrl + "/api/v1/user/join/?username="+$window.sessionStorage.currentUsername+"&api_key="+$window.sessionStorage.currentApi_key, {
                "user": user_id
            });
            triggeredMaarker = new google.maps.LatLng(functionlat, functionlng);
            for (var i = 1, LtLgLen = $rootScope.LatLngList.length; i < LtLgLen; i++) {
                if (!$rootScope.LatLngList[i].equals(triggeredMaarker)){
                    $rootScope.DoggieMarkers[i].setMap(null);
                }
            }
            if($scope.walk){
                tm = google.maps.TravelMode.WALKING;
            }
            else{
                tm = google.maps.TravelMode.DRIVING;
            }
            $rootScope.destination = {
                        lat: functionlat,
                        lng: functionlng
                    };
            $scope.navigating = true;
            var DirectionsRequest = {
                origin: $rootScope.LatLngList[0],
                destination: new google.maps.LatLng(functionlat, functionlng),
                travelMode: tm,
                unitSystem: google.maps.UnitSystem.METRIC
            };
            var directionsService = new google.maps.DirectionsService();
            if($rootScope.directionsDisplay==null){
                $rootScope.directionsDisplay = new google.maps.DirectionsRenderer();
            }
            $rootScope.directionsDisplay.setMap($scope.map);
            // console.log('setdirectondisplay');
            directionsService.route(DirectionsRequest, function(response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    $rootScope.directionsDisplay.setDirections(response);
                    $scope.duration = response.routes[0].legs[0].duration.text;
                    document.getElementById('idduration').innerHTML = response.routes[0].legs[0].duration.text;
                }
            });
        }      

        // -------------------

        LocationService.getLatLong().then(function(latLong) {
            if (latLong === null){
                $ionicPopup.alert({
                    title: 'Oh non!',
                    template: 'Il faut autoriser la gÃ©olocalisation afin de pouvoir rencontrer des doggers!'
                });
                return;
            }
            function makeInfoWindowEvent(map, infowindow, contentString, marker) {
                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.setContent(contentString);
                    infowindow.open(map, marker);
                });
            }

            $scope.latLong = latLong;
            $scope.map.setCenter(new google.maps.LatLng(latLong.lat, latLong.long));

            // console.log("marker: "+ $rootScope.currentdogavatar);

            var image = {
                url: $rootScope.currentdogavatar,
                size: new google.maps.Size(60, 60)
            };

            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng($scope.latLong.lat, $scope.latLong.long),
                shape:{coords:[17,17,18],type:'circle'},
                map: $scope.map,
                icon: image,
                title: "My Location"
            });

            $rootScope.MyDoggieMarker = myLocation;

            try {
                if ($stateParams.from == null) {
                    loadmore = true;
                } else {
                    loadmore = false;
                }
            } catch (e) {
                loadmore = true;
            }

            $rootScope.LatLngList = new Array(new google.maps.LatLng(latLong.lat, latLong.long));
            $rootScope.DoggieMarkers = new Array('')
            if (!loadmore) {
                connection_coords = $stateParams.from.split(",");
                connection_coords_toadd = new google.maps.LatLng(connection_coords[0], connection_coords[1]);
                dogMeeters = new google.maps.Marker({
                    position: new google.maps.LatLng(connection_coords[0], connection_coords[1]),
                    map: $scope.map,
                    icon: "http://app.dogsmeeting.com/media/images/pin.png",
                    title: "My Location"
                });
                $rootScope.LatLngList.push(connection_coords_toadd);
                var DirectionsRequest = {
                    origin: $rootScope.LatLngList[0],
                    destination: new google.maps.LatLng(connection_coords[0], connection_coords[1]),
                    travelMode: google.maps.TravelMode.WALKING,
                    unitSystem: google.maps.UnitSystem.METRIC
                };
                var directionsService = new google.maps.DirectionsService();
                directionsDisplay = new google.maps.DirectionsRenderer();
                directionsDisplay.setMap($scope.map);
                directionsService.route(DirectionsRequest, function(response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        directionsDisplay.setDirections(response);
                    }
                });
            } else {
                // dev = true;
                dev = false;
                if(dev){
                    for (j = 0; j < 5; j++) {
                        plusOrMinus = Math.round(Math.random());
                        minusOrPlus = Math.round(Math.random());
                        if (plusOrMinus == 1) {
                            if (minusOrPlus == 1) {
                                newlatOffset = latLong.lat - Math.round(Math.random() * 10) / 1000;
                                newlngOffset = latLong.long + Math.round(Math.random() * 10) / 1000;
                            } else {
                                newlatOffset = latLong.lat + Math.round(Math.random() * 10) / 1000;
                                newlngOffset = latLong.long - Math.round(Math.random() * 10) / 1000;
                            }
                        } else {
                            if (minusOrPlus == 1) {
                                newlatOffset = latLong.lat + Math.round(Math.random() * 10) / 1000;
                                newlngOffset = latLong.long + Math.round(Math.random() * 10) / 1000;
                            } else {
                                newlatOffset = latLong.lat - Math.round(Math.random() * 10) / 1000;
                                newlngOffset = latLong.long - Math.round(Math.random() * 10) / 1000;
                            }
                        }
                        newLatLong = new google.maps.LatLng(newlatOffset, newlngOffset);
                        dogMeeters = new google.maps.Marker({
                            position: new google.maps.LatLng(newlatOffset, newlngOffset),
                            map: map,
                            icon: apiUrl + "/media/images/pin.png",
                            title: "My Location"
                        });
                        var infowindow = new google.maps.InfoWindow();
                        google.maps.event.addListener(dogMeeters, 'click', function(event) {
                            var confirmPopup = $ionicPopup.show({
                                template: ' \
                  <img class="title-image" src="http://app.dogsmeeting.com/media/images/2015/5/24/070bc799-1f15-46ad-a272-ed4675df82dc-40.png" width="40" height="40" /> Grusha\
                  Teckel \
                  ',
                                title: 'Chien',
                                // subTitle: 'Please use normal things',
                                scope: $scope,
                                buttons: [{
                                    text: 'Annuler'
                                }, {
                                    text: '<b>Rejoindre</b>',
                                    type: 'button-positive',
                                    onTap: function(e) {
                                      $rootScope.myreLoadMap(event);
                                    }
                                }]
                            });
                        });
                        $rootScope.LatLngList.push(newLatLong);
                        $rootScope.DoggieMarkers.push(dogMeeters);
                        // console.log(dogMeeters);
                    }
                }
                else{
                    // Not dev env. load real people
                    $http.get(apiUrl + "/api/v1/coord/?username="+$window.sessionStorage.currentUsername+"&api_key="+$window.sessionStorage.currentApi_key, {
                        headers:{
                            'Content-Type': "application/json"
                        }})
                        .success(function(data, status, headers,config){
                          $scope.doggies_objects = data.objects
                          $rootScope.account_popups = {};
                          $rootScope.account_details = {};
                          $rootScope.userids = {};
                          for(var l=0; l<$scope.doggies_objects.length; l++){

                                newlatOffset = $scope.doggies_objects[l].lat;
                                newlngOffset = $scope.doggies_objects[l].long;
                                newdog_breed = $scope.doggies_objects[l].dog_breed;
                                newdog_thumb = $scope.doggies_objects[l].dog_thumb;
                                newdog_name = $scope.doggies_objects[l].dog_name;
                                newuser_id = $scope.doggies_objects[l].user_id;
                                newLatLong = new google.maps.LatLng(newlatOffset, newlngOffset);
                                dogMeeters = new google.maps.Marker({
                                    position: new google.maps.LatLng(newlatOffset, newlngOffset),
                                    map: map,
                                    icon: apiUrl + "/media/images/pin.png",
                                    title: newdog_name
                                });

                                var infowindow = new google.maps.InfoWindow();
                                $rootScope.account_details['newdog_thumb'+newuser_id] = newdog_thumb;
                                $rootScope.account_details['newdog_breed'+newuser_id] = newdog_breed;
                                $rootScope.account_details['newdog_name'+newuser_id] = newdog_name;
                                dogMeeters.set('userid', newuser_id);
                                google.maps.event.addListener(dogMeeters, 'click', function(event) {
                                    user_id = this.get('userid');
                                    console.log(user_id);
                                    $rootScope.account_popups['confirmPopup'+user_id] = $ionicPopup.show({
                                        template: '\
                                                  <img class="title-image" src="http://app.dogsmeeting.com/media/'+$rootScope.account_details['newdog_thumb'+user_id]+'" width="40" height="40" /> '+$rootScope.account_details['newdog_name'+user_id]+'\
                                                  '+$rootScope.account_details['newdog_breed'+user_id]+' \
                                                  <input value="Profil" type="button" ng-click="openAccountId('+user_id+', $event)" class="button button-block button-balanced" />\
                                                  ',
                                        title: 'Chien',
                                        scope: $scope,
                                        buttons: [{
                                            text: 'Annuler'
                                        }, {
                                            text: '<b>Rejoindre</b>',
                                            type: 'button-positive',
                                            onTap: function(e) {
                                              $rootScope.myreLoadMap(event);
                                            }
                                        }]
                                    });
                                });
                                $rootScope.LatLngList.push(newLatLong);
                                $rootScope.DoggieMarkers.push(dogMeeters);
                          }
                        });
                }
            }
            //  Create a new viewpoint bound
            var bounds = new google.maps.LatLngBounds();
            //  Go through each...
            for (var i = 0, LtLgLen = $rootScope.LatLngList.length; i < LtLgLen; i++) {
                //  And increase the bounds to take this point
                bounds.extend($rootScope.LatLngList[i]);
            }
            //  Fit these bounds to the map
            $scope.map.fitBounds(bounds);
        }, function(error) {
            alert(error);
        });

        navigator.geolocation.watchPosition(function(position) {
            try{
                $scope.latLong.lat = position.coords.latitude;
                $scope.latLong.long = position.coords.longitude;
                newLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                $scope.map.setCenter(newLatLng);
                $rootScope.MyDoggieMarker.setPosition(newLatLng);
                if($rootScope.destination!=null){
                    distance = $rootScope.measure(position.coords.latitude, position.coords.longitude, $rootScope.destination.lat, $rootScope.destination.lng)
                    if (distance<5){
                        $rootScope.destination = null;
                        $rootScope.clearMarkers();
                        $rootScope.updateMarkers();
                        $scope.navigating = false;
                    }
                }
            }
            catch (err){
                // console
            }
        });

        // -------------------
    }
    if (document.readyState === "complete") {
        initialize();
        // console.log('here');
    } else {
        google.maps.event.addDomListener(window, 'load', initialize);
        // console.log('or here');
    }
});