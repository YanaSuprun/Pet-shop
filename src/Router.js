import {ControllerProduct} from '../components/product/ControllerProduct.js';
import {ControllerSearch} from '../components/search/ControllerSearch.js';
import {ControllerCategories} from '../components/categories/ControllerCategories.js';

export class Router {
  constructor() {
    this.controllerProduct = new ControllerProduct(this);
    this.controllerSearch = new ControllerSearch(this);
    this.controllerCategories = new ControllerCategories(this);
  }
}
