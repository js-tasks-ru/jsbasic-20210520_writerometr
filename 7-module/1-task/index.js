import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
   let body = document.querySelector('body');
   let rib = body.appendChild(document.createElement('div'));
   rib.className = 'ribbon';
   this.elem = rib;



//Ссылки на категории
  let nav = document.querySelector('.ribbon').appendChild(document.createElement('nav'));
  nav.className = "ribbon__inner";
  let ribbonInner = document.querySelector('.ribbon__inner');

 for (let i = 0; i < categories.length; i++) {
   let item = ribbonInner.appendChild(document.createElement('a'));
  item.className = "ribbon__item";
  
//ribbon__item источник
  item.href ="#";
  this.id = categories[i].id;
  item.dataset.id =  this.id;
//ribbon__item id
  
//ribbon__item name
  this.textContent = categories[i].name;
  item.textContent = this.textContent;

  let event = new CustomEvent('ribbon-select', {
    detail: this.id,
    bubbles: true
  })

  item.addEventListener('click', function(){
    item.dispatchEvent(event);
  })
}


//Кнопка прокрутки влево
let leftButton = document.querySelector('.ribbon').appendChild(document.createElement('button'));
leftButton.className = "ribbon__arrow ribbon__arrow_left ribbon__arrow_visible";
let imgLeftButton = document.querySelector('.ribbon__arrow_left').appendChild(document.createElement('img'));
imgLeftButton.alt = "icon";
imgLeftButton.src = "/assets/images/icons/angle-icon.svg";

//Кнопка прокрутки вправо
let rightButton = document.querySelector('.ribbon').appendChild(document.createElement('button'));
rightButton.className = "ribbon__arrow ribbon__arrow_right ribbon__arrow_visible";
let imgRightButton = document.querySelector('.ribbon__arrow_right').appendChild(document.createElement('img'));
imgRightButton.alt = "icon";
imgRightButton.src = "/assets/images/icons/angle-icon.svg";


//Прокрутка влево
document.querySelector('.ribbon__arrow_left').addEventListener('click' , function () {
  ribbonInner.scrollBy(-350, 0);
});


//Прокрутка вправо
document.querySelector('.ribbon__arrow_right').addEventListener('click', function (){
  ribbonInner.scrollBy(350, 0);
});

//visible/invisible left button
document.querySelector('.ribbon__arrow_left').classList.remove('ribbon__arrow_visible');
ribbonInner.addEventListener('scroll' , function () {
  if (ribbonInner.scrollLeft == 0) {
    document.querySelector('.ribbon__arrow_left').classList.remove('ribbon__arrow_visible');
  }
  else {
    document.querySelector('.ribbon__arrow_left').classList.add('ribbon__arrow_visible');
  }
});

//visible/ibvisible right button
ribbonInner.addEventListener('scroll' , function () {
  let visibleScroll = ribbonInner.clientWidth;
  let hiddenScroll = ribbonInner.scrollLeft;
  let allScroll = ribbonInner.scrollWidth;
  let scrollRight = allScroll - hiddenScroll - visibleScroll;
  if (scrollRight == 0) {
    document.querySelector('.ribbon__arrow_right').classList.remove('ribbon__arrow_visible');
  }
  else {
    document.querySelector('.ribbon__arrow_right').classList.add('ribbon__arrow_visible');
  }
});

//Добавление 
let allLinks = document.querySelectorAll('.ribbon__item');

for (let link of allLinks){
  link.addEventListener('click', function (event){
    event.preventDefault();
  }) 

  link.addEventListener('click', function(){
    for (let i =0; i < allLinks.length; i++) {
      if (allLinks[i].classList.contains('ribbon__item_active')) {
        allLinks[i].classList.remove('ribbon__item_active');
      }
    }
    })

    link.addEventListener('click', function(){
      this.classList.add('ribbon__item_active');
    })
}


}
}