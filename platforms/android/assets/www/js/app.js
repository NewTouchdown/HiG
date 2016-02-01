// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','firebase', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
 
  $stateProvider
  .state('login', {
    url: '/',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'LoginCtrl'
  })
  .state('signin', {
    url: '/signin',
    templateUrl: 'templates/signin.html',
    controller: 'LoginCtrl'
  });
 
  $urlRouterProvider.otherwise("/");
 
})

/*.factory('Auth', function($firebaseAuth) {
 var endpoint = "https://test-123-1.firebaseio.com";
 var usersRef = new Firebase (endpoint);

return $firebaseAuth(usersRef);
})*/

.controller('LoginCtrl', function($scope, $state, $cordovaFacebook) {
 
/*Auth.$onAuth(function(authData){
  if (authData === null) {
    console.log("usuario não autenticado");
  } else {
    console.log ("usuario está autenticado");
    console.log(authData);
  }

  $scope.authData = authData;
});*/

  $scope.data = {};
 
 $scope.signupEmail = function(){  
 
    var ref = new Firebase("https://test-123-2.firebaseio.com");
   
    ref.createUser({
      email    : $scope.data.email,
      password : $scope.data.password
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
        window.location.href='/www/templates/success.html';
      }
    });
  };
 
  $scope.loginEmail = function(){
 
    var ref = new Firebase("https://test-123-2.firebaseio.com");
   
    ref.authWithPassword({
      email    : $scope.data.email,
      password : $scope.data.password
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        window.location.href='/www/templates/success.html';
      }
    }); 
  };

  $scope.loginFacebook = function(){
 
  /*  Auth.$authWithOAuthRedirect(authMethod).then(function(authData) {

    }).catch(function(error) {
      if (error.code == 'TRANSPORT_UNAVAILABLE'){
        Auth.$authWithOAuthPopup(authMethod).then(function(authData){});
      }else{
        console.log(error);
      }
    });
};*/

  var ref = new Firebase("https://test-123-2.firebaseio.com");
 
 
  if(ionic.Platform.isWebView()){
 
    $cordovaFacebook.login(["public_profile", "email"]).then(function(success){
 
      console.log(success);
 
      ref.authWithOAuthToken("facebook", success.authResponse.accessToken, function(error, authData) {
        if (error) {
          console.log('Firebase login failed!', error);
        } else {
          console.log('Authenticated successfully with payload:', authData);
        }
      });
 
    }, function(error){
      console.log(error);
    });        
 
  }
  else {
 
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        window.location.href='/www/templates/success.html';
      }
    });
 
  }
 
};
 
});
