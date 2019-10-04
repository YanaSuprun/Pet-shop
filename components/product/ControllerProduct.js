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
    this.eventManager.subscribe('Category selected', this.showProducts.bind(this));
    this.eventManager.subscribe('Search started', this.showProducts.bind(this));
    
    // this.eventManager.subscribe('Category selected', (selectedCategory) => {
    //   this.selectedCategory = selectedCategory;
      
    // });
    this.actionGetProduct();
  }

  actionGetProduct() {
    this.model.getProduct().then(arr => {
      this.eventManager.publish('Products ready');
      this.showProducts(arr);
    });
  };

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