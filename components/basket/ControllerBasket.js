import {ModelBasket} from './ModelBasket.js';
import {ViewBasket} from './ViewBasket.js';

export class ControllerBasket {
  constructor(eventManager) {
    this.eventManager = eventManager;
    this.view = new ViewBasket();
    this.model = new ModelBasket();
    this.init();
    this.productCounter = 0;
  };

  init() {
    this.eventManager.subscribe('productAddedToBasket', this.changeBasket.bind(this));
  };

  showBasket() {
    this.view.renderBasket();
  };

  changeBasket(event) {
    this.view.changeCounter(++this.productCounter);
    let data = this.model.getPurchase();
    this.view.renderProductList(data);
  };
}