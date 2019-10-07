import {ModelBasket} from './ModelBasket.js';
import {ViewBasket} from './ViewBasket.js';

export class ControllerBasket {
  constructor(eventManager) {
    this.eventManager = eventManager;
    this.view = new ViewBasket();
    this.model = new ModelBasket();
    this.init();
    
    // this.productCounter = 0;
  };

  init() {
    this.eventManager.subscribe('productsReady', this.showBasket.bind(this));
    this.eventManager.subscribe('addedPurchase', this.showBasket.bind(this));
  }

  // changeBasketView() {
  //   let basketData = 'ok';
  //   let counter = 0;
    
  //   this.view.renderNewBasket(basketData, counter);
  // }

  showBasket() {
    this.view.renderBasket();
  };

  // changeBasket(event) {
  //   this.view.changeCounter(this.productCounter+=1);
  //   let basketData = this.model.getPurchase();
  // };

}