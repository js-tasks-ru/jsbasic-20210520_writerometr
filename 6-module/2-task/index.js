import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {

let body = document.querySelector('body');
  /*let holdr = body.appendChild(document.createElement('div'));
holdr.className="container";
holdr.id="holder";*/
   let crd = document.querySelector('body').appendChild(document.createElement('div'));
   crd.className="card";
   this.elem = crd;
  
   

/*Создаем тело*/
     crd.insertAdjacentHTML('afterbegin', '<div class="card__top"></div>');
     crd.insertAdjacentHTML('beforeend', '<div class="card__body"></div>');
/*Верх тела*/

/*Создаем раздел с картинкой*/
     document.querySelector('.card__top').insertAdjacentHTML('afterbegin', '<img class="card__image" alt="product" src=""></img>');
      this.image = product.image;
      document.querySelector('.card__image').src = "/assets/images/products/" + this.image;
  /*Раздел цены*/
      document.querySelector('.card__top').insertAdjacentHTML('beforeend', '<span class="card__price"></span>');
      this.price = '€' + product.price.toFixed(2);
      document.querySelector('.card__price').textContent = this.price;
/*Низ тела*/

    /*Название*/
      document.querySelector('.card__body').insertAdjacentHTML('afterbegin', '<div class="card__title"></div>');
      this.name = product.name;
      document.querySelector('.card__title').textContent = this.name;
      /*Кнопка добавить*/
      document.querySelector('.card__body').insertAdjacentHTML('beforeend', '<button type="button" class="card__button"></button>');
      let buttonAdd =  document.querySelector('.card__button');
      buttonAdd.insertAdjacentHTML('afterbegin', '<img src="/assets/images/icons/plus-icon.svg" alt="icon"></img>');
        /*Функционал кнопки*/
        this.id = product.id;
        let event = new CustomEvent('product-add', {
          detail: this.id,
          bubbles: true
        })
        buttonAdd.addEventListener("click", function(){
          buttonAdd.dispatchEvent(event);
        })
      
      }
    }
       