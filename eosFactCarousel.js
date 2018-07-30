function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideFIndex = 1;
showFSlides(slideFIndex);

function plusFSlides(m) {
  showFSlides(slideFIndex += m);
}

function currentFSlide(n) {
  showFSlides(slideFIndex = m);
}

function showSlides(m) {
  var t;
  var slides = document.getElementsByClassName("factSlides");
  var circ = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (m > slides.length) {slideFIndex = 1}
  if (m < 1) {slideFIndex = slides.length}
  for (t = 0; t < slides.length; t++) {
      slides[t].style.display = "none";
  }
  for (t = 0; t < circ.length; t++) {
      circ[t].className = circ[t].className.replace(" active", "");
  }
  slides[slideFIndex-1].style.display = "block";
  circ[slideIndex-1].className += " active";
  captionText.innerHTML = circ[slideFIndex-1].alt;
}
