'use strict';

angular.module('jo-cobo', ['ui.router', 'firebase']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/',
    templateUrl: '../views/homeTmp.html'
  }).state('fix', {
    url: '/fix',
    templateUrl: '../views/fixTmp.html'
  }).state('about', {
    url: '/about',
    templateUrl: '../views/aboutTmp.html'
  });

  $urlRouterProvider.otherwise('/');
});
"use strict";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBV6-PWjpvb9eYxQxKS_ZcFPlBBlM2tFfQ",
  authDomain: "jo-cobo.firebaseapp.com",
  databaseURL: "https://jo-cobo.firebaseio.com",
  projectId: "jo-cobo",
  storageBucket: "jo-cobo.appspot.com",
  messagingSenderId: "759348389666"
};
firebase.initializeApp(config);

// let homeText = document.getElementById('home-text')
// let dbRef = firebase.database().ref().child('homeText')
// dbRef.on('value', snap => homeText.innerText = snap.val())

var cCell1 = document.getElementById('img1');
var imgRef1 = firebase.database().ref().child('img1');
imgRef1.on('value', function (snap) {
  return cCell1.src = snap.val();
});

var cCell2 = document.getElementById('img2');
var imgRef2 = firebase.database().ref().child('img2');
imgRef2.on('value', function (snap) {
  return cCell2.src = snap.val();
});

var cCell3 = document.getElementById('img3');
var imgRef3 = firebase.database().ref().child('img3');
imgRef3.on('value', function (snap) {
  return cCell3.src = snap.val();
});

// let cCell3 = document.getElementById('img3')
// let imgRef3 = firebase.database().ref().child('img3')
// imgRef3.on('value', snap => cCell3.src = snap.val())
// var flickCarousel = document.getElementById('carousel');
// flickCarousel.style.prevNextButtons = false;
"use strict";
'use strict';

angular.module('jo-cobo').controller('mainCtrl', function ($scope, $firebaseObject, mainService) {

  $scope.getServiceData = function () {
    mainService.getData().then(function (response) {
      console.log(response);
      $scope.serviceData = response;
    });
  };

  $scope.getServiceData();

  $scope.getServiceProductData = function () {
    mainService.getProductData().then(function (response) {
      console.log(response);
      $scope.productData = response;
    });
  };

  $scope.getServiceProductData();

  $scope.menuStatus = false;
  $scope.carouselStatus = true;

  // $scope.flickCarousel = document.getElementById('carousel');
  // $scope.flickCarousel.style.prevNextButtons = false;
});
'use strict';

angular.module('jo-cobo').service('mainService', function ($http) {

  this.getData = function () {
    return $http.get('../storage.json').then(function (response) {
      return response.data;
    });
  };

  this.getData();

  this.getProductData = function () {
    return $http.get('../products.json').then(function (response) {
      // console.log(response.data)
      return response.data;
    });
  };

  this.getProductData();
});
//# sourceMappingURL=bundle.js.map
