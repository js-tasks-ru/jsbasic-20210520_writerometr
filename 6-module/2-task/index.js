import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {

let body = document.querySelector('body');
  /*let holdr = body.appendChild(document.createElement('div'));
holdr.className="container";
holdr.id="holder";*/
   let crd = (document.createElement('div'));
   crd.className="card";
   this.elem = crd;
   this.image = '/assets/images/products/' + product.image;
   this.price = '€' + product.price.toFixed(2);
   this.category = product.category;
   this.name = product.name;

/*Создаем тело*/
     let top = crd.appendChild(document.createElement('div'));
     top.className = 'card__top';
     let bod = crd.appendChild(document.createElement('div'));
     bod.className ='card__body';
/*Верх тела*/

/*Создаем раздел с картинкой*/
     let img = top.appendChild(document.createElement('img'));
     img.className ='card__image';
     img.alt ="product";
     img.src = this.image;
    
  /*Раздел цены*/
  let spn = top.appendChild(document.createElement('span'));
  spn.className = 'card__price';
  spn.textContent = this.price;
      
/*Низ тела*/

    let titl = bod.appendChild(document.createElement('div'));
    titl.className = 'card__title';
    titl.textContent = this.name;

    let buttonAdd = bod.appendChild(document.createElement('button'));
    buttonAdd.type = 'button';
    buttonAdd.className = 'card__button';
    let btnImg = buttonAdd.appendChild(document.createElement('img'));
    btnImg.alt = 'icon';
    btnImg.src = '/assets/images/icons/plus-icon.svg';
    
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
       