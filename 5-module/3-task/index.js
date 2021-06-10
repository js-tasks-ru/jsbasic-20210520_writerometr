function initCarousel() {
  /*Обозначения*/
  let rightBtn = document.querySelector('.carousel__arrow_right');
  let leftBtn = document.querySelector('.carousel__arrow_left');
  let inner = document.querySelector('.carousel__inner');
  let slideWidth = inner.children[0].offsetWidth;
  
 inner.slideNumbers = 1;
 leftBtn.style.display = 'none';

  /*Работающая правая кнопка*/

  rightBtn.onclick = function () {


    if (inner.slideNumbers === 3) {
      rightBtn.style.display = 'none';
    }
    if (inner.slideNumbers === 1) {
      leftBtn.style.display = '';
    }
  

    inner.style.transform = 'translateX(' + (-slideWidth * (inner.slideNumbers)) + 'px'+ ')';
    inner.slideNumbers +=1;

  }
  /*Работающая левая кнопка*/
  leftBtn.onclick = function () {

    if (inner.slideNumbers === 2) {
      leftBtn.style.display = 'none';
    }
    if (inner.slideNumbers === 4){
      rightBtn.style.display = '';
    }


    inner.style.transform = 'translateX(' + (-slideWidth * (inner.slideNumbers - 2))+ 'px' + ')';
    inner.slideNumbers -=1;
  }
}