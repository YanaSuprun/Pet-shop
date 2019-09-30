import {ViewProduct} from './ViewProduct.js';
import {ModelProduct} from './ModelProduct.js';

export class ControllerProduct {
  constructor() {
    this.model = new ModelProduct(this);
    this.view = new ViewProduct(this);
    this.actionGetProduct();
  }

  actionGetProduct() {
    this.model.getProduct();
  }

  showProduct(data) {
    this.view.render(data);
  }

  actionAddToBasket(ev) {
    this.view.addToBasket(ev);
  }

  getLocalStorageData() {
    this.model.getFromLocalStorage();
    console.log(getFromLocalStorage());
  }
}