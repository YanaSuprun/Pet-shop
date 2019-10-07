export class ModelBasket {
  constructor(controller) {
    // this.controller = controller;
    this.basket = {
      counter: 0,
      purchases: []
    }
  };

  getPurchase() {
    let data = JSON.parse(localStorage.getItem('basket'));
    return data;
  };

}