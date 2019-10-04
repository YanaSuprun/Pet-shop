export class ModelBasket {
  constructor(controller) {
    this.controller = controller;
    // this.basket = JSON.parse(localStorage.getItem('basket'));
  };

  getPurchase() {
    let data = JSON.parse(localStorage.getItem('basket'));
    return data;
  };

}