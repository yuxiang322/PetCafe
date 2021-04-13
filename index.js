var slidenum = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    slidenum++;
    if (slidenum > slides.length) {slidenum = 1}    
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slidenum-1].style.display = "block";  
    dots[slidenum-1].className += " active";
    setTimeout(showSlides, 5000);
}
showSlides();