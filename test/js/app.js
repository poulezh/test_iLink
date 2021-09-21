console.log(1);
let arr = [...document.querySelectorAll('.slider__item')]
let arrow = [...document.querySelectorAll('.slider__arrow')]

arrow.forEach(elem =>{
    elem.addEventListener('click',(e)=>{
        // console.log(e.target);
        if(elem.classList.contains('slider__left')){
            console.log(e.target);
            minusSlide()
        }
        if(elem.classList.contains('slider__right')){
            console.log(e.target);
            plusSlide()
        }
    })
})

let index = 1;
showSlides(index);


function plusSlide() {
    showSlides(index += 1);
}


function minusSlide() {
    showSlides(index -= 1);  
}

function currentSlide(n) {
    showSlides(index = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider__item");
    var dots = document.getElementsByClassName("slider__point");
    if (n > slides.length) {
        index = 1
    }
    if (n < 1) {
        index = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        // slides[i].style.transform = 'translateX(100)'
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index - 1].style.display = "block";
    // slides[index - 1].style.transform = 'translateX(-100)';
    dots[index - 1].className += " active";
}