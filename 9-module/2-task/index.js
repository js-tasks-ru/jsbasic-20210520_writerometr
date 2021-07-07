import Carousel from '../../6-module/3-task/index.js';
import slides from '../../6-module/3-task/slides.js';

import RibbonMenu from '../../7-module/1-task/index.js';
import categories from '../../7-module/1-task/categories.js';

import StepSlider from '../../7-module/4-task/index.js';
import ProductsGrid from '../../8-module/2-task/index.js';

import CartIcon from '../../8-module/1-task/index.js';
import Cart from '../../8-module/4-task/index.js';

export default class Main {

  constructor() {
  }

  async render() {
///Carousel
    this.carousel = new Carousel(slides);
    document.querySelector('[data-carousel-holder]').append(this.carousel.elem);

///RibbonMenu
    this.ribbonMenu = new RibbonMenu(categories);
    document.querySelector('[data-ribbon-holder]').append(this.ribbonMenu.elem);

///stepSlider
    this.stepSlider = new StepSlider({
      steps: 5,
      value: 3
    });
    document.querySelector('[data-slider-holder]').append(this.stepSlider.elem);

///cartIcon
    this.cartIcon = new CartIcon();
    document.querySelector('[data-cart-icon-holder]').append(this.cartIcon.elem);

///Cart
    this.cart = new Cart(this.cartIcon);

///Запрос за товарами
    this.response = await fetch('products.json');
    this.list = await this.response.json();

///productsGrid
    this.productsGrid = new ProductsGrid(this.list);
    document.querySelector('[data-products-grid-holder]').innerHTML = '';
    document.querySelector('[data-products-grid-holder]').append(this.productsGrid.elem);

///productsGrid.updateFilter
    this.productsGrid.updateFilter({
      noNuts: document.getElementById('nuts-checkbox').checked,
      vegeterianOnly: document.getElementById('vegeterian-checkbox').checked,
      maxSpiciness: this.stepSlider.value,
      category: this.ribbonMenu.value
    });

///Обработчики событий
    //product-add
document.body.addEventListener('product-add', (event) => {
  let productId = event.detail
  this.cart.addProduct(this.list.find(product => product.id == productId));
})

    //slider-change
this.stepSlider.elem.addEventListener('slider-change', (event) => {
  let value = event.detail
  this.productsGrid.updateFilter({
    maxSpiciness: value 
  });
})

  //ribbon-select
this.ribbonMenu.elem.addEventListener('ribbon-select', (event) => {
  let categoryId = event.detail;
  this.productsGrid.updateFilter({
    category: categoryId
  });
})

document.getElementById('nuts-checkbox').addEventListener('change', (event) =>{
  this.productsGrid.updateFilter({
    noNuts: event.target.checked 
  });
})
document.getElementById('vegeterian-checkbox').addEventListener('change', (event) =>{
  this.productsGrid.updateFilter({
    vegeterianOnly: event.target.checked 
  });
})
  }
}
