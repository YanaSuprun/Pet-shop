import {ControllerProduct} from '../components/product/ControllerProduct.js';
import {ControllerSearch} from '../components/search/ControllerSearch.js';

export class Router {
  constructor() {
    this.controllerProduct = new ControllerProduct(this);
    this.controllerSearch = new ControllerSearch(this);
  }
}
