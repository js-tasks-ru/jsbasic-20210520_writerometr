export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    if (!product || product == null) {
      return;
    }
    let exist = this.cartItems.find(el => el.product.id === product.id);
		let newItem;
		if (!exist) {
			newItem = {
				product: product,
				count: 1,
			}
			this.cartItems.push(newItem);
		} else {
			exist.count++;
		}

		this.onProductUpdate(newItem);
  }

  updateProductCount(productId, amount) {
    let exist = this.cartItems.find(el => el.product.id == productId);

		if (exist && exist.count > 0) {
			exist.count += amount;
		}
		if (exist.count === 0) {
			this.cartItems.splice(this.cartItems.indexOf(exist), 1);
		}

		this.onProductUpdate(exist);
  }

  isEmpty() {
    if (this.cartItems.length === 0) {
      return true;
    } 
    else {
      return false;
    }
  }

  getTotalCount() {
     let res = this.cartItems.map(item => item.count).reduce((total, current) => total + current, 0);
     return res;
    
  }

  getTotalPrice() {
      let res = this.cartItems.reduce((total, current) => total + current.product.price * current.count, 0);
      return res;
      
    
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

