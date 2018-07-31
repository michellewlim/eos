// VOLUNTEER CONTACT US + MAP
// Variable to hold request
var request;

// Bind to the submit event of our form
$("#voluntcontact").submit(function(event){
console.log("here");
    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
      url: "https://script.google.com/macros/s/AKfycbyaYLLE41gCTIRPaZn65xagYENQgixtxP0sFd4m7kUZ4_Od8I0/exec",
      type: "post",
      data: serializedData
      
    });
    
    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
      
      // Log a message to the console
      console.log("Hooray, it worked!");
      console.log(response);
      console.log(textStatus);
      console.log(jqXHR);
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
      
      // Log the error to the console
      console.error(
          "The following error occurred: "+
          textStatus, errorThrown
      );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
      
      // Reenable the inputs
      $inputs.prop("disabled", false);
      $('#voluntcontact input[type="text"]').val('');
      $('#voluntcontact textarea[name = "subject"]').val('');
      $('#voluntcontact input[type = "email"]').val('');
      document.getElementById("localsubmit").innerHTML = "Submission successful! Thank you for your contribution."
      //window.location = '#local';
        
    });


    // Prevent default posting of form
  
  event.preventDefault();
});



// Initialize google maps
function myMap() {
    var myCenter = new google.maps.LatLng(37.6297219,-122.1182708);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {center: myCenter, zoom: 9.5};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position:myCenter});
    //marker.setMap(map);
  
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
      content: '<h1>Lake Cunningham</h1> Cunningham Lake, San Jose, CA 95148'
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
//fact submit
// Variable to hold request
var request;

// Bind to the submit event of our form
$("#factstat").submit(function(event){

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbx7hSylk5zpYuu3YhfNWHsFGzrZEOGbe1AO-lioNwuzHIRM6ew/exec",
        type: "post",
        data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        console.log("Hooray, it worked!");
        console.log(response);
        console.log(textStatus);
        console.log(jqXHR);
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
        $('#factstat input[type="text"]').val('');
        $('#factstat textarea').val('');
        $('#factstat input[type="email"]').val('');
      //  $('#factstat input[type = "text"]').val('');
        document.getElementById("contactsubmit").innerHTML = "Submission successful! Thank you for your contribution."
    });

    // Prevent default posting of form
    event.preventDefault();
});
