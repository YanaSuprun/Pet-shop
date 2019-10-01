import {ModelBasket} from './ModelBasket.js';
import {ViewBasket} from './ViewBasket.js';

export class ControllerBasket {
  constructor() {
    this.view = new ViewBasket(this);
    this.model = new ModelBasket(this);
    this.showBasket();
    this.productCounter = 0;
  };

  showBasket() {
    let basketData = this.model.getPurchase();
    this.view.render();
  };

  increaseCounter(event) {
    this.view.changeCounter(this.productCounter+=1);
  };

}