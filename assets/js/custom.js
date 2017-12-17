window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll-up").style.display = "block";
  } else {
    document.getElementById("scroll-up").style.display = "none";
  }
}

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: -6.21462, lng: 106.84513}
  });
}