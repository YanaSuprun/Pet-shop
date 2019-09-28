import {ViewProduct} from './ViewProduct.js';
import {ModelProduct} from './ModelProduct.js';

export class ControllerProduct {
  constructor() {
    this.model = new ModelProduct(this);
    this.view = new ViewProduct(this);
    this.getProduct();
  }

  getProduct() {
    this.model.getProductJSON();
  }

  showProduct(data) {
    this.view.render(data);
  }

}