let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  movingslides(slideIndex += n);
}

function currentSlide(n) {
  movingslides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if(n == NaN || n == undefined ){
    n=slideIndex;
  }
  else{
      n++;
  }

  if (n > slides.length-1) {
      slideIndex = 0;
    } 
  if (n < 1) {
      slideIndex = slides.length-1;
    }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex].style.display = "block"; 
  dots[slideIndex].className += " active";
  slideIndex++;
  setTimeout(showSlides, 4000); 
}

function movingslides(n){
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  } 
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";

}

