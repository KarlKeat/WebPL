/*
https://www.w3schools.com/w3css/w3css_slideshow.asp
*/
var slideIndex = 0;

function changeSlides(n) {
  showSlideshow(slideIndex += n);
}

function showSlideshow(index) {
  var i;
  var slideshow = document.getElementsByClassName("content");

  if (index > slideshow.length) {
    slideIndex = 1;
  }

  if (index < 1) {
    slideIndex = slideshow.length;
  }

  for (i = 0; i < slideshow.length; i++) {
     slideshow[i].style.display = "none";
  }

  slideshow[slideIndex-1].style.display = "block";
}
