function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideFIndex = 1;
slideFSlides(slideFIndex);

function plusSlides(m) {
  slideFSlides(slideFIndex += m);
}

function currentFSlides(m) {
  slideFSlides(slideFIndex = m);
}

function slideFSlides(m) {
  var t;
  var slides = document.getElementsByClassName("factSlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (m > slides.length) {slideFIndex = 1}
  if (m < 1) {slideFIndex = slides.length}
  for (t = 0; t < slides.length; t++) {
      slides[t].style.display = "none";
  }
  for (t = 0; t < dots.length; t++) {
      dots[t].className = dots[t].className.replace(" active", "");
  }
  slides[slideFIndex-1].style.display = "block";
  dots[slideFIndex-1].className += " active";
  captionText.innerHTML = dots[slideFIndex-1].alt;
}
