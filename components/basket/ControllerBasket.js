import {ModelBasket} from './ModelBasket.js';
import {ViewBasket} from './ViewBasket.js';

export class ControllerBasket {
  constructor(eventManager) {
    this.eventManager = eventManager;
    this.view = new ViewBasket(this);
    this.model = new ModelBasket(this);
    // this.eventManager.subscribe('Products ready', this.changeBasket.bind(this));
    this.productCounter = 0;
  };

  changeBasketView() {
    let basketData = 'ok';
    let counter = 0;
    
    this.view.renderNewBasket(basketData, counter);
  }

  // showBasket() {
  //   let basketData = this.model.getPurchase();
  //   // console.log(basketData);
  //   this.view.renderBasket(basketData);
  // };

  // changeBasket(event) {
  //   this.view.changeCounter(this.productCounter+=1);
  //   let basketData = this.model.getPurchase();
  // };

}