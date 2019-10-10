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
    this.eventManager.subscribe('productAddedToBasket', this.startDeal.bind(this));
  };

  showBasket() {
    this.view.renderBasket();
  };

  changeBasket(event) {
    let data = this.model.getPurchase();
    let counter = data.map(a => a.purchase).reduce((a, b) => a + b);
    this.view.changeCounter(counter);
    this.view.renderProductList(data);
  };

  startDeal() {
    this.view.getBuyEvent(this.getBasket.bind(this));
  }

  getBasket(ev) {
    this.model.getBasketData();
  }
}