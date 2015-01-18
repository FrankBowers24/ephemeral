angular.module('radar')

.factory('MapStyle', function() {

  return [{"featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [{"color": "#444444"}]},
      {"featureType": "administrative.country",
          "elementType": "geometry.fill",
          "stylers": [{"visibility": "off"}]},
      {"featureType": "administrative.country",
          "elementType": "geometry.stroke",
          "stylers": [{"visibility": "off"}]},
      {"featureType": "administrative.country",
          "elementType": "labels.text",
          "stylers": [{"visibility": "off"}]},
      {"featureType": "administrative.country",
          "elementType": "labels.text.fill",
          "stylers": [{"visibility": "off"}]},
      {"featureType": "administrative.country",
          "elementType": "labels.text.stroke",
          "stylers": [{"visibility": "off"}]},
      {"featureType": "administrative.country",
          "elementType": "labels.icon",
          "stylers": [{"visibility": "off"}]},
      {"featureType": "administrative.province",
          "elementType": "geometry.stroke",
          "stylers": [{"visibility": "off"}]},
      {"featureType": "administrative.province",
          "elementType": "labels.text",
          "stylers": [{"visibility": "off"}]},
      {"featureType": "administrative.locality",
          "elementType": "labels.text",
          "stylers": [{"visibility": "off"}]},
      {"featureType": "landscape",
          "elementType": "all",
          "stylers": [{"color": "#f2f2f2"}]},
      {"featureType": "poi",
          "elementType": "all",
          "stylers": [{"visibility": "off"}]},
      {"featureType": "poi.attraction",
          "elementType": "labels",
          "stylers": [{"visibility": "on"}]},
      {"featureType": "poi.business",
          "elementType": "labels",
          "stylers": [{"visibility": "off"}]},
      {"featureType": "poi.business",
          "elementType": "labels.icon",
          "stylers": [{"visibility": "off"}]},
      {"featureType": "poi.park",
          "elementType": "all",
          "stylers": [{"visibility": "on"}]},
      {"featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [{"color": "#81bb78"},
              {"lightness": "25"},
              {"saturation": "1"}]},
      {"featureType": "road",
          "elementType": "all",
          "stylers": [{"saturation": -100},
              {"lightness": 45}]},
      {"featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [{"visibility": "on"},
              {"lightness": "-7"}]},
      {"featureType": "road",
          "elementType": "labels.text.stroke",
          "stylers": [{"visibility": "on"}]},
      {"featureType": "road.highway",
          "elementType": "all",
          "stylers": [{"visibility": "simplified"}]},
      {"featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{"visibility": "on"},
              {"saturation": "52"},
              {"color": "#ecf949"},
              {"lightness": "-20"}]},
      {"featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{"visibility": "on"},
              {"lightness": "44"}]},
      {"featureType": "road.highway",
          "elementType": "labels.text",
          "stylers": [{"visibility": "off"}]},
      {"featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [{"visibility": "off"}]},
      {"featureType": "transit",
          "elementType": "all",
          "stylers": [{"visibility": "on"}]},
      {"featureType": "transit",
          "elementType": "labels.text",
          "stylers": [{"visibility": "off"}]},
      {"featureType": "transit.station",
          "elementType": "all",
          "stylers": [{"visibility": "on"}]},
      {"featureType": "transit.station",
          "elementType": "labels.text",
          "stylers": [{"visibility": "off"}]},
      {"featureType": "water",
          "elementType": "all",
          "stylers": [{"color": "#5177af"},
              {"visibility": "on"}]}];
});
