import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.elem = document.createElement('div')
    this.elem.classList.add('products-grid')
    let inner = document.createElement('div')
    inner.classList.add('products-grid__inner')
    this.elem.append(inner)
    this.render(products)
  }
  render(products){
    let inner = this.elem.querySelector('.products-grid__inner');
    inner.innerHTML = '';
    for (let i=0; i < products.length; i++){
      let card = new ProductCard (products[i])
      inner.appendChild(card.elem);
    }
  }
  
  updateFilter(filters) {
    this.filters = Object.assign(this.filters, filters);
   console.log(this.filters);

    let result = this.products;

    if (this.filters.category) {
      result = result.filter(product => product.category === this.filters.category);
    }
    if (this.filters.maxSpiciness) {
      result = result.filter(product => product.spiciness <= this.filters.maxSpiciness);
    }
    if (this.filters.noNuts) {
      result = result.filter(product => product.nuts != this.filters.noNuts);
    }
    if (this.filters.vegeterianOnly) {
      result = result.filter(product => product.vegeterian === this.filters.vegeterianOnly);
    }

return this.render(result);


    }
       }   
      


   
 

