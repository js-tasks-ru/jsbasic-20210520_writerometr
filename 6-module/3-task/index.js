import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    let body = document.querySelector('body');
    let fullCarousel = document.createElement('div');
    fullCarousel.className = "carousel";
    let crsInner = fullCarousel.appendChild(document.createElement('div'));
    crsInner.className= "carousel__inner";
    this.elem = fullCarousel; //!!!!!!! Внимание сюда если опять хрень с elem 
    this.slides = slides;
    let slLength = this.slides.length;
    crsInner.slideNumbers = 1;
    

 




/*Слайды*/ 
for (let i = 0; i < slides.length; i++) {

  let sld = crsInner.appendChild(document.createElement('div'))
    sld.className = 'carousel__slide';
    this.id = slides[i].id;
    sld.dataset.id = this.id;

    let mg = sld.appendChild(document.createElement('img'));
      mg.className = "carousel__img";
      mg.alt = "slide";
      this.image = slides[i].image;
      mg.src = "/assets/images/carousel/" + this.image;

    let crsCap = sld.appendChild(document.createElement('div'));
      crsCap.className = "carousel__caption";

      let crsSpan = crsCap.appendChild(document.createElement('span'));
        crsSpan.className="carousel__price";
        this.price = slides[i].price.toFixed(2);
        crsSpan.textContent ="€" + this.price;

      let crsTitle = crsCap.appendChild(document.createElement('div'));
        crsTitle.className = "carousel__title";
        this.name = slides[i].name;
        crsTitle.textContent = this.name;

      let btnCrsAdd = crsCap.appendChild(document.createElement('button')); 
        btnCrsAdd.type ="button";
        btnCrsAdd.className = "carousel__button";

        let btnMg = btnCrsAdd.appendChild(document.createElement('img'));
          btnMg.alt = "icon";
          btnMg.src="/assets/images/icons/plus-icon.svg";

/*Кнопка "добавить"*/
let event = new CustomEvent('product-add', {
  detail: this.id,
  bubbles: true
})
btnCrsAdd.addEventListener('click', function(){
  btnCrsAdd.dispatchEvent(event);
})
}
/*Кнопки*/
/*В право*/
let rightBtn = fullCarousel.appendChild(document.createElement('div'));
rightBtn.className="carousel__arrow carousel__arrow_right";
let rightBtnMg = rightBtn.appendChild(document.createElement('img'));
rightBtnMg.alt = "icon";
rightBtnMg.src="/assets/images/icons/angle-icon.svg";

/*В лево*/
let leftBtn = fullCarousel.appendChild(document.createElement('div'));
leftBtn.className="carousel__arrow carousel__arrow_left";
let leftBtnMg = leftBtn.appendChild(document.createElement('img'));
leftBtnMg.alt = "icon";
leftBtnMg.src="/assets/images/icons/angle-left-icon.svg";
leftBtn.style.display = 'none'; 

/* функционал*/

rightBtn.addEventListener('click', function (){
  let width = document.querySelector('.carousel__img').offsetWidth;

  if (crsInner.slideNumbers === slLength - 1) {
    rightBtn.style.display = 'none';
  }
  if (crsInner.slideNumbers === 1) {
    leftBtn.style.display = '';
  }

  crsInner.style.transform = 'translateX(' + (-width * (crsInner.slideNumbers)) + 'px'+ ')';
  crsInner.slideNumbers +=1;
})


leftBtn.addEventListener('click', function (){
  let width = document.querySelector('.carousel__img').offsetWidth;

  
  if (crsInner.slideNumbers === 2) {
    leftBtn.style.display = 'none';
  }
  if (crsInner.slideNumbers === slLength){
    rightBtn.style.display = '';
  }

  crsInner.style.transform = 'translateX(' + (-width * (crsInner.slideNumbers - 2))+ 'px' + ')';
  crsInner.slideNumbers -=1;
})

}

}