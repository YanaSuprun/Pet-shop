import {ViewProduct} from './ViewProduct.js';
import {ModelProduct} from './ModelProduct.js';

export class ControllerProduct {
  constructor(eventManager) {
    this.eventManager = eventManager;
    this.model = new ModelProduct(this);
    this.view = new ViewProduct(this);

    this.eventManager.subscribe('Change product list', this.showProducts.bind(this));
    this.actionGetProduct();
  };

  actionGetProduct() {
    this.model.getProduct();
  };

  notifyAboutEvent(eventName) {
    this.eventManager.publish(eventName);
  }

  showProducts(data) {
    this.view.renderProducts(data);
  };

  // getPurchase(ev) {
  //   let targetElem = ev.target;
  //   if(targetElem.classList.contains('purchase')) {
  //     this.view.changeButtonOnClick(targetElem);
  //     this.model.setPurchaseToLS(targetElem);
  //     this.eventManager.controllerBasket.changeBasket(ev);
  //   };
  // };
}