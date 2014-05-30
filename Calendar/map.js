
function initialize() {
  var myLatlng = new google.maps.LatLng(41.222725, -111.973704);
  var mapOptions = {
    zoom: 15,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);


















/* MAP */

// jQuery to collapse the navbar on scroll
// $(window).scroll(function() {
//     if ($(".navbar").offset().top > 50) {
//         $(".navbar-fixed-top").addClass("top-nav-collapse");
//     } else {
//         $(".navbar-fixed-top").removeClass("top-nav-collapse");
//     }
// });

// jQuery for page scrolling feature - requires jQuery Easing plugin
// $(function() {
//     $('.page-scroll a').bind('click', function(event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top
//         }, 1500, 'easeInOutExpo');
//         event.preventDefault();
//     });
// });

// function initialize() {
// var myOptions = {
//     zoom: 15,
//     center: new google.maps.LatLng(53.385873, -1.471471),
//     mapTypeId: google.maps.MapTypeId.ROADMAP,
//     disableDefaultUI: true,
    
//     styles: [{
//         "featureType": "water",
//         "elementType": "geometry",
//         "stylers": [{
//             "color": "blue"
//         }, {
//             "lightness": 17
//         }]
//     }, {
//         "featureType": "landscape",
//         "elementType": "geometry",
//         "stylers": [{
//             "color": "#000000"
//         }, {
//             "lightness": 20
//         }]
//     }, {
//         "featureType": "road.highway",
//         "elementType": "geometry.fill",
//         "stylers": [{
//             "color": "#FFFFFF"
//         }, {
//             "lightness": 17
//         }]
//     }, {
//         "featureType": "road.highway",
//         "elementType": "geometry.stroke",
//         "stylers": [{
//             "color": "#000000"
//         }, {
//             "lightness": 29
//         }, {
//             "weight": 0.2
//         }]
//     }, {
//         "featureType": "road.arterial",
//         "elementType": "geometry",
//         "stylers": [{
//             "color": "#000000"
//         }, {
//             "lightness": 18
//         }]
//     }, {
//         "featureType": "road.local",
//         "elementType": "geometry",
//         "stylers": [{
//             "color": "#000000"
//         }, {
//             "lightness": 16
//         }]
//     }, {
//         "featureType": "poi",
//         "elementType": "geometry",
//         "stylers": [{
//             "color": "#000000"
//         }, {
//             "lightness": 21
//         }]
//     }, {
//         "elementType": "labels.text.stroke",
//         "stylers": [{
//             "visibility": "on"
//         }, {
//             "color": "#000000"
//         }, {
//             "lightness": 16
//         }]
//     }, {
//         "elementType": "labels.text.fill",
//         "stylers": [{
//             "saturation": 36
//         }, {
//             "color": "#000000"
//         }, {
//             "lightness": 40
//         }]
//     }, {
//         "elementType": "labels.icon",
//         "stylers": [{
//             "visibility": "off"
//         }]
//     }, {
//         "featureType": "transit",
//         "elementType": "geometry",
//         "stylers": [{
//             "color": "#000000"
//         }, {
//             "lightness": 19
//         }]
//     }, {
//         "featureType": "administrative",
//         "elementType": "geometry.fill",
//         "stylers": [{
//             "color": "#000000"
//         }, {
//             "lightness": 20
//         }]
//     }, {
//         "featureType": "administrative",
//         "elementType": "geometry.stroke",
//         "stylers": [{
//             "color": "#000000"
//         }, {
//             "lightness": 17
//         }, {
//             "weight": 1.2
//         }]
//     }]
// };

// var map = new google.maps.Map(document.getElementById('map'), myOptions);

//   var marker = new google.maps.Marker({
//       position: myLatlng,
//       map: map,
//       title: 'Hello World!'
//   });
// }

// google.maps.event.addDomListener(window, 'load', initialize);





// function initCall() {
//   console.log('Google maps api initialized.');
//   angular.bootstrap(document.getElementById('map'), ['doc.ui-map']);
// }
 
// app.controller('MapCtrl', ['$scope', function($scope) {
 
// $scope.myMarkers = [];
 
// $scope.mapOptions = {
//   center: new google.maps.LatLng(35.784, -78.670),
//   zoom: 15,
//   mapTypeId: google.maps.MapTypeId.ROADMAP
// };
 
// $scope.addMarker = function($event, $params) {
//   $scope.myMarkers.push(new google.maps.Marker({
//     map: $scope.myMap,
//     position: $params[0].latLng
//   }));
// };
 
// $scope.setZoomMessage = function(zoom) {
//   $scope.zoomMessage = 'You just zoomed to '+zoom+'!';
//   console.log(zoom,'zoomed')
// };
 
// $scope.openMarkerInfo = function(marker) {
//   $scope.currentMarker = marker;
//   $scope.currentMarkerLat = marker.getPosition().lat();
//   $scope.currentMarkerLng = marker.getPosition().lng();
//   $scope.myInfoWindow.open($scope.myMap, marker);
// };
 
// $scope.setMarkerPosition = function(marker, lat, lng) {
//   marker.setPosition(new google.maps.LatLng(lat, lng));
// };
// }]);
