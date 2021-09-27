// function slider() {
//   let arrow = [...document.querySelectorAll(".slider__arrow")];
//   let slides = [...document.querySelectorAll(".slider__item")];
//   let point = [...document.querySelectorAll(".slider__point")];
//   let inner = document.querySelector(".slider__inner");
//   let width = document.querySelector('.slider').clientWidth
//   console.log(width);

//   let index = 0

//   const list_slides = (n) => { debugger
//     if (n > slides.length) {
//         // если н больше трех индекс скидываем
//       index = 1;
//     }
//     if (n < 1) {
//       index = slides.length;
//     }
//     let offset = 0
//     offset = offset + 1400; 
//     if (offset > 1400) {
//         offset = 0; 
//     }    

//     for (let i = 0; i < slides.length; i++) {

//       slides[i].style.display = "none";
//       // slides[i].style.left = -width - 64 + 'px';

   
//     }
//     for (i = 0; i < point.length; i++) {
//       point[i].classList.remove("active");
//     }
//     slides[index - 1].style.display = "block";
//     // slides[index - 1].style.left = width + 70 + 'px';
//     point[index - 1].classList.add("active");
//   };

//   const next_slide = () => {
//     list_slides((index += 1));
//   };
//   const prew_slide = () => {
//     list_slides((index -= 1));
//   };
//   const current_slide = (n) => {
//     list_slides((index = n));
//   };

//   const point_slide = () => {
//     for (let i = 0; i < point.length; i++) {
//       point[i].addEventListener("click", (e) => {
//         if (index == point[i]) {
//           console.log(index)
//           console.log(point[i]);
//           current_slide(index);

//         }
//       });
//     }
//   };
//   const arrow_click = (elem) => {
//     if (elem.classList.contains("slider__left")) {
//       //   console.log(e.target);
//       prew_slide();
//     }
//     if (elem.classList.contains("slider__right")) {
//       next_slide();
//     }
//   };
//   arrow.forEach((elem) => {elem.addEventListener("click", arrow_click(elem))});
//   inner.addEventListener("click", (e) =>{
//     if (e.offsetX < 655) {
//         prew_slide();
//       }
//       if (e.offsetX > 655) {
//         next_slide();
//       }
//   });
//   point_slide();

//   list_slides(index);
// }
// slider();







// console.log(btn);
// btn.addEventListener('click', (e)=>{
//   console.log('click');
// })


let offset = 0;
let slider = document.querySelector('.slider')
let slider_inner = document.querySelector('.slider__inner')
let btn_right = document.querySelector('.slider__right')
let btn_left = document.querySelector('.slider__left')
let slider_img = document.querySelectorAll('.slider__item')
let btn = document.querySelector('.btn')
let count = 0;
let width;

function init(){
  console.log('resize');
  width = slider.offsetWidth
  console.log(width);
  console.log(slider_img.length);
  slider_inner.style.width = width * slider_img.lenght + 'px'
  slider_img.forEach(item =>{
    item.style.width = width + 'px'
    item.style.height = 'auto'
    
  })
  slide()
}

btn_left.addEventListener('click', (e)=>{
  count--
  if(count < 0){
    count = slider_img.length -1
  }
  slide()
})
btn_right.addEventListener('click', (e)=>{
  count++
  if(count >= slider_img.length){
    count = 0
  }
  slide()
})
function slide(){
  
  slider_inner.style.transform = 'translate(-' + count * width + 'px'

}
window.addEventListener('resize', init)
init()