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
    this.eventManager.subscribe('categorySelected', this.showProducts.bind(this), this.changeLS.bind(this));
    this.eventManager.subscribe('searchStarted', this.showProducts.bind(this));
    this.eventManager.subscribe('sorted', this.showProducts.bind(this));
    
    // this.eventManager.subscribe('Category selected', (selectedCategory) => {
    //   this.selectedCategory = selectedCategory;
      
    // });
    this.actionGetProduct();
  }

  actionGetProduct() {
    this.model.getProduct().then(arr => {
      this.eventManager.publish('productsReady', arr);
      this.showProducts(arr);
    });
  };

  showProducts(data) {
    this.view.renderProducts(data);
  };

  changeLS(data) {
    console.log('ls')
    this.model.setAllProductsToLS(data)
  }

  // getPurchase(ev) {
  //   let targetElem = ev.target;
  //   if(targetElem.classList.contains('purchase')) {
  //     this.view.changeButtonOnClick(targetElem);
  //     this.model.setPurchaseToLS(targetElem);
  //     this.eventManager.controllerBasket.changeBasket(ev);
  //   };
  // };
}