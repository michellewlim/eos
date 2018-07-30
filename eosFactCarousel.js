var slideFIndex = 1;
showFDivs(slideFIndex);

function plusFDivs(m) {
  showFDivs(slideFIndex += m);
}

function showFDivs(m) {
  var t;
  var y = document.getElementsByClassName("factSlides");
  if (m > y.length) {slideFIndex = 1}    
  if (m < 1) {slideFIndex = y.length}
  for (t = 0; i < y.length; t++) {
     y[t].style.display = "none";  
  }
  y[slideFIndex-1].style.display = "block";  
}
