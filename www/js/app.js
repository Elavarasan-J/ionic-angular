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

.directive('pickDate', function($http){
	var available_days=[];
   	var dateToday = new Date();
	
	/*var apiURL = "http://ec2-54-175-185-25.compute-1.amazonaws.com/business_available.php";*/
	
	 
	// Disable days
	function DisableDays(date){
		var day = date.getDay();
		
		 // If day == 1 then it is MOnday
		 for(var i=0;i<available_days.length;i++){
			if (day == available_days[i]) {
				return [false]; 
			}
		 }
	}
	
	// Max times
	function maxTimes(end_time){
		
		if(end_time == '00:00:00'){
			hours = "23";
			minutes = "45"; 
		}else{
			time = end_time.split(':');
			hours = parseInt(time[0]);
			minutes = parseInt(time [1]);
			
			if(minutes == 00){
				minutes = '00';
				hours = hours - 1;
			}else{
				minutes = minutes - 15;
			}
		}
		
		return hours + ":" + minutes;
	}
 	
	// Round off minutes
	function round_off_minutes(hours,minutes){
		min=15*Math.round(minutes/15)
		if(min==60){
			min="00"
			hours=hours+1;
		}
		return hours+":"+min;
	}
	
	
	// Time picker initialize
	function timepicker_initialize (min_time,max_time,hide_time) {  
		
		console.info(min_time);
		
		$('#appTime').timepicker('remove');
		$('#appTime').timepicker({'step': 15, timeFormat: 'H:i','minTime': min_time,'maxTime':max_time,'disableTimeRanges': hide_time});
	}
	
	
	return{
		type : 'A',
		link : function(scope, element, attrs){
			
			var businessID = attrs.business;
			
			$http.get('http://ec2-54-175-185-25.compute-1.amazonaws.com/business_available.php?id_business='+businessID)
			.success(function(data){
				 var dayList = data.business_not_available_days;

				 if(dayList.length > 0){
						available_days = dayList;
					}else{
						console.info('Else condition');
						available_days = [0,1,2,3,4,5,6];
					}
			});
			
			$(element).datetimepicker({
				beforeShowDay: DisableDays,
				lang:'ch',
				timepicker:false,
				format:'Y-m-d',
				minDate: dateToday,
				minuteInterval:15,
				onChangeDateTime:function(currDate,$input){
					if(($input.val()) != ""){
						
						var booking_date,today,dd,mm,yy,date1,date2,date,weekdays,day,hide_time;
						
						
						console.info(businessID);
						
						booking_date = $input.val();
						$('#appTime').val("");
						
						today = new Date();
						dd = today.getDate();
						mm = today.getMonth()+1; //January is 0!
						yyyy = today.getFullYear();
						
						if(dd < 10) {
							dd='0'+dd
						} 
						if(mm < 10) {
							mm='0'+mm
						} 
						today = yyyy+'-'+mm+'-'+dd;
						
						date1 = Date.parse(booking_date);
						date2 = Date.parse(today);
						
						date = new Date(booking_date)
						
						
						weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
						day = weekdays[date.getDay()];
						
						console.info(day);
						
						hide_time = [];
						
						
						$http.get('http://ec2-54-175-185-25.compute-1.amazonaws.com/business_available.php?id_business='+businessID+'&date='+booking_date)
						.success(function(data){
            				  	 hide_time = data;
						});
						
						
						var dataSet,dataSetList,start_time,end_time,minTime,current_date,hours,minutes,seconds,current_time;
						
						$http.get('http://ec2-54-175-185-25.compute-1.amazonaws.com/business_available.php?id_business='+businessID+'&day='+day)
						.success(function(data){
            				dataSet = data[0];
							start_time = dataSet['start_time'];
							end_time = maxTimes( dataSet['end_time']);
							
							console.info('Start time : ' + start_time)
							
							if(date1 == date2){
								
								console.info('Same date')
								
								current_date = new Date();
								
								hours = current_date.getHours();
								minutes = current_date.getMinutes();
								second = current_date.getSeconds();
								
								current_time = hours + ":" + minutes + ":" + second;
								
								if(current_time > start_time && end_time > current_time){
									minTime = round_off_minutes(hours,minutes);
									timepicker_initialize(minTime,end_time,hide_time);
								}else if(current_time < start_time && end_time > current_time){
									minTime = start_time;
									timepicker_initialize(minTime,end_time,hide_time);
								}else{
									console.info('else');
								}
							}else{
								console.info('Diff Part !');
								minTime = start_time;
								timepicker_initialize(minTime,end_time,hide_time);
							}   
						});
						
					}
					
				  } // onChangeDateTime
				
			});
		}
	}
})

.directive('timePicker', function(){
	return{
		type : 'A',
		link : function(scope, element, attrs){
			$(element).timepicker('hide');
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
      url: '/book-appoinment/:businessId',
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
