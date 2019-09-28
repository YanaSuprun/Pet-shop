import {ControllerProduct} from '../components/product/ControllerProduct.js';

export class Router {
  constructor() {
    this.controllerProduct = new ControllerProduct(this);
  }
}

const router = new Router();