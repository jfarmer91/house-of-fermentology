/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});

// Google Maps Scripts
var map = null;
var map2 = null;
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(new google.maps.LatLng(44.457959, -73.214811));
    mapFoam.setCenter(new google.maps.LatLng(44.479085, -73.219984));
});

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(44.457959, -73.214811), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
          {
              "featureType": "water",
              "elementType": "all",
              "stylers": [
                  {
                      "hue": "#1CB2BD"
                  },
                  {
                      "saturation": 53
                  },
                  {
                      "lightness": -44
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "all",
              "stylers": [
                  {
                      "hue": "#1CB2BD"
                  },
                  {
                      "saturation": 40
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "all",
              "stylers": [
                  {
                      "hue": "#BBDC00"
                  },
                  {
                      "saturation": 80
                  },
                  {
                      "lightness": -20
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
            featureType: "poi",
            stylers: [
              {visibility: "off"}
            ]
          }
      ]
    };

    var mapOptions2 = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(44.479085, -73.219984), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
          {
              "featureType": "water",
              "elementType": "all",
              "stylers": [
                  {
                      "hue": "#1CB2BD"
                  },
                  {
                      "saturation": 53
                  },
                  {
                      "lightness": -44
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "all",
              "stylers": [
                  {
                      "hue": "#1CB2BD"
                  },
                  {
                      "saturation": 40
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "all",
              "stylers": [
                  {
                      "hue": "#BBDC00"
                  },
                  {
                      "saturation": 80
                  },
                  {
                      "lightness": -20
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
            featureType: "poi",
            stylers: [
              {visibility: "off"}
            ]
          }
      ]
    };


    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');
    var mapElement2 = document.getElementById('map2');


    // Create the Google Map using out element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);
    map2 = new google.maps.Map(mapElement2, mapOptions2);


    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = {
      url: 'HOF_WEB/HOF_WEB/House_Logo_black_54.png',
      // size: new google.maps.Size(32,32),
      origin: new google.maps.Point(0, 0),
      // anchor: new google.maps.Point(0, 32)
    };
    var image2 = {
      url: 'img/icon/FOAM_ICON_FAVICON-compressor.png',
      // size: new google.maps.Size(32,32),
      origin: new google.maps.Point(0, 0),
      // anchor: new google.maps.Point(0, 32)
    };



    var myLatLng = new google.maps.LatLng(44.457959, -73.214811);
    var myLatLng2 = new google.maps.LatLng(44.479085, -73.219984);


    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image,
    });
    var marker2 = new google.maps.Marker({
        position: myLatLng2,
        map: map2,
        icon: image2,
    });


    google.maps.event.addListener(marker, 'click', function() {
      window.open('https://www.google.com/maps/place/777+Pine+St,+Burlington,+VT+05401/@44.4579589,-73.2169994,17z/data=!3m1!4b1!4m2!3m1!1s0x4cca7ba8ad01ba29:0xb07b66b2c7ad4cae');
    });
    google.maps.event.addListener(marker2, 'click', function() {
      window.open('https://www.google.com/maps/place/Foam+Brewers/@44.4790851,-73.2199836,15z/data=!4m2!3m1!1s0x0:0xe1cbdbe52021ef94');
    });
}
