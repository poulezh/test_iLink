console.log(1);
let arr = [...document.querySelectorAll('.slider__item')]
let arrow = [...document.querySelectorAll('.slider__arrow')]
let slides = document.querySelectorAll(".slider__item");
let point = [...document.querySelectorAll(".slider__point")];

arrow.forEach(elem =>{
    elem.addEventListener('click',(e)=>{
        // console.log(e.target);
        if(elem.classList.contains('slider__left')){
            // console.log(e.target);
            minusSlide()
        }
        if(elem.classList.contains('slider__right')){
            // console.log(e.target);
            plusSlide()
        }
    })
})
// point.forEach(elem =>{
//     elem.addEventListener('click', (e)=>{
//         console.log(elem[0]);
//     })
// })
for (let i = 0; i < point.length; i++) {
    point[i];

    point[i].addEventListener('click', (e)=>{
        if(i == 0){currentSlide(1)}
        if(i == 1){currentSlide(2)}
        if(i == 2){currentSlide(3)}
    })
    
}


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
    let i
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
    for (i = 0; i < point.length; i++) {
        // console.log(point[i].className);
        point[i].className = point[i].className.replace(" active", "");
    }
    slides[index - 1].style.display = "block";
    // slides[index - 1].style.transform = 'translateX(-100)';
    point[index - 1].className += " active";
}

const screenWidth = window.screen.width
console.log(screenWidth);
const screenHeight = window.screen.height
console.log(screenHeight);