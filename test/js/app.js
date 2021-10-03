
function slider() {
  let slider = document.querySelector(".slider");
  let slider_inner = document.querySelector(".slider__inner");
  let btn_right = document.querySelector(".slider__right");
  let btn_left = document.querySelector(".slider__left");
  let slider_img = document.querySelectorAll(".slider__item");
  let dots = [...document.querySelectorAll(".slider__point")];
  let count = 0;
  let width;

  function init() {
    console.log("resize");
    width = slider.offsetWidth;
    // console.log(width);
    // console.log(slider_img.length);
    slider_inner.style.width = width * slider_img.lenght + "px";
    slider_img.forEach((item) => {
      item.style.width = width + "px";
      item.style.height = "auto";
    });
    slide();
  }

  function next_slide() {
    count--;
    if (count < 0) {
      count = slider_img.length - 1;
    }
    slide();
  }

  function prev_slide() {
    count++;
    if (count >= slider_img.length) {
      count = 0;
    }
    slide();
  }

  function slide() {
    slider_inner.style.transform = "translate(-" + count * width + "px";
  }


  function clicker(e) {
    // console.log(width / 2);
    if (e.offsetX < slider.offsetWidth/2) {
      // console.log(slider.offsetWidth/2);
      prev_slide();
    }
    if (e.offsetX > slider.offsetWidth/2) {
      // console.log(slider.offsetWidth/2);
      next_slide();
    }
  }
  function touch() {
    document.addEventListener("touchstart", handleTouchStart, false);
    document.addEventListener("touchmove", handleTouchMove, false);

    let xDown = null;
    let yDown = null;

    function getTouches(e) {
      return e.touches 
    }

    function handleTouchStart(e) {
      const firstTouch = getTouches(e)[0];
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
    }

    function handleTouchMove(event) {
      if (!xDown || !yDown) {
        return;
      }

      let xUp = event.touches[0].clientX;
      let yUp = event.touches[0].clientY;

      let xDiff = xDown - xUp;
      let yDiff = yDown - yUp;
      // console.log(yDiff);

      if (Math.abs(xDiff) > Math.abs(yDiff)) {

        if (xDiff > 0) {
          prev_slide();          
        } else {
          next_slide();
        }
      } 

      xDown = null;
      yDown = null;
    }
  }
  function dots_handler(e) {
    for (let i = 0; i < dots.length; i++) {
      dots[i];
      dots[i].addEventListener('click', (e) =>{
        // console.log(dots[i].getBoundingClientRect());
        let rect = dots[i].getBoundingClientRect()
        let x = rect.left
        let w = rect.width;
        if (x < (window.innerWidth/2) - w)
        {
          dots[i].classList.add('active')
          prev_slide();
        }
        if (x > (window.innerWidth/2)+ w)
        {
          dots[i].classList.add('active')
          next_slide();
        }
        if (x  === window.innerWidth/2){
          console.log(window.innerWidth/2);
          count +=1
        }
      })
    }
  }
  dots_handler()

  // slide_interval = setInterval(next_slide,4000);
  slider_inner.addEventListener("click", clicker);
  btn_right.addEventListener("click", prev_slide);
  btn_left.addEventListener("click", next_slide);
  window.addEventListener("resize", init);
  touch()
  init();
}
slider();
