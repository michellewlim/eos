src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"

var slideIndex = 0;
showDivs(slideIndex);
carousel();

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-white";
}

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-white";
    setTimeout(carousel, 5000); // Change image every 5 seconds
}


// map
function myMap() {
var mapProp= {
  center:new google.maps.LatLng(38,238),
  zoom:8
};

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
var marker = new google.maps.Marker({
  position:{lat:37.5578,lng:-121.9737},
  map:map
});

var infoWindow = new google.maps.InfoWindow({
  content : '<h1>Tule Ponds</h1>'
});
var marker = new google.maps.Marker({
  position:{lat:39,lng:-128},
  map:map
});

var infoWindow = new google.maps.InfoWindow({
  content : '<h1>Tule Ponds</h1>'
});
}
