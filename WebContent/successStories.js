/*
https://www.w3schools.com/w3css/w3css_slideshow.asp
*/
var slideIndex = 0; // initial index is 0

// function that is called upon press; either changes the slides' index +1 (forward)
// or -1 (backwards)
function changeSlides(n) {
  showSlideshow(slideIndex += n);
}

function showSlideshow(index) {
  var i;
  var slideshow = document.getElementsByClassName("content");

  if (index > slideshow.length) { // if index > length of slideshow
    slideIndex = 1; // wrap back to the first index
  }

  if (index < 1) { // if index < 1
    slideIndex = slideshow.length; // loop back to the end of the slideshow
  }

  for (i = 0; i < slideshow.length; i++) {
     slideshow[i].style.display = "none"; // set all of the elements called "content" to display = "none"
  }

  slideshow[slideIndex-1].style.display = "block"; // set the one slide index to display
}
