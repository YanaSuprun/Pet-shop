import {ViewProduct} from './ViewProduct.js';
import {ModelProduct} from './ModelProduct.js';

export class ControllerProduct {
  constructor(eventManager) {
    this.eventManager = eventManager;
    this.model = new ModelProduct();
    this.view = new ViewProduct();
    this.init();
  };

  init() {
    this.eventManager.subscribe('categorySelected', this.showProducts.bind(this));
    this.eventManager.subscribe('searchStarted', this.showProducts.bind(this));
    this.eventManager.subscribe('sorted', this.showProducts.bind(this));
    this.eventManager.subscribe('productsRendered', this.getPurchaseAction.bind(this));
    // this.eventManager.subscribe('productsRendered', this.view.getPurchasesEvent());
    this.actionGetProduct();
  }

  actionGetProduct() {
    this.model.getProduct().then(arr => {
      this.eventManager.publish('productsReady', arr);
      this.showProducts(arr);
      this.eventManager.publish('productsRendered', arr);
    });
  };

  showProducts(data) {
    this.view.renderProducts(data);
  };

  getPurchaseAction() {
    this.view.getPurchasesEvent(this.getPurchaseData.bind(this));
  };

  getPurchaseData(targetElem) {
    this.model.setPurchaseToLS(targetElem);
    this.eventManager.publish('productAddedToBasket');
    // let targetElem = ev.target;
    // if(targetElem.classList.contains('purchase')) {
    //   this.view.changeButtonOnClick(targetElem);
    //   this.model.setPurchaseToLS(targetElem);
    //   this.eventManager.controllerBasket.changeBasket(ev);
    // };
  };
}