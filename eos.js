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
  var options= {
    center:new google.maps.LatLng(38,238),
    zoom:8
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),options);

  //function to add a Marker

  addMarker({coords:{lat:37.5578,lng:-121.9737},
    content: '<h1>Tule Ponds</h1> 1999 Walnut Ave, Fremont, CA 94536<br>510) 790-6284'
  });
  addMarker({coords:{lat:37.4309,lng:-122.1033},
    content: '<h1>Grassroots Ecology</h1> 3921 E Bayshore Rd, Palo Alto, CA 94303<br>(650) 419-9880'
  });
  addMarker({coords:{lat:37.804363,lng:-122.271111},
    content: '<h1>Save the Bay</h1> 1330 Broadway, Oakland, CA 94612<br>(510) 463-6850'
  });
  addMarker({coords:{lat:37.3361,lng:-121.8100},
    content: '<h1>Lake Cunningham</h1>'
  });
  addMarker({coords:{lat:37.3632,lng:-121.8652},
    content: '<h1>Our City Forest</h1> 646 N King Rd, San Jose, CA 95133<br>(408) 998-7337'
  });
  addMarker({coords:{lat:37.7592,lng:-122.4636},
    content: '<h1>Garden for the Environment</h1> 1590 7th Ave, San Francisco, CA 94122<br>(415) 558-8246'
  });

  function addMarker(props){
    var marker = new google.maps.Marker({
      position:props.coords,
      map:map
    });
    if (props.content){
      var infoWindow = new google.maps.InfoWindow({
        content: props.content
      });
      marker.addListener('click', function(){
        infoWindow.open(map,marker);
      });
    }
  }
}
