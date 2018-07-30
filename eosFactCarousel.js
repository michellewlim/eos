var slideFIndex = 1;
showSlides(slideFIndex);

function plusFSlides(n) {
showSlides(slideFIndex += n);
}

function currentFSlide(n) {
showSlides(slideFIndex = n);
}

function showFSlides(n) {
var i;
var slides = document.getElementsByClassName("factSlides");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideFIndex = 1}
if (n < 1) {slideFIndex = slides.length}
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideFIndex-1].style.display = "block";
dots[slideFIndex-1].className += " active";
}
