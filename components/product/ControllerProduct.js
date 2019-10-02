import {ViewProduct} from './ViewProduct.js';
import {ModelProduct} from './ModelProduct.js';

export class ControllerProduct {
  constructor(router) {
    this.router = router;
    this.model = new ModelProduct(this);
    this.view = new ViewProduct(this);
    this.actionGetProduct();
  }

  actionGetProduct() {
    this.model.getProduct();
  }

  showProducts(data) {
    this.view.render(data);
  }

  getBuyClick(ev) {
    let targetElem = ev.target;
    if(targetElem.classList.contains('purchase')) {
      this.view.changeButtonOnClick(targetElem);
      this.router.controllerBasket.increaseCounter(ev);
    }
  }

  // getLocalStorageData() {
  //   this.model.getFromLocalStorage();
  //   // console.log(getFromLocalStorage());
  // }
}