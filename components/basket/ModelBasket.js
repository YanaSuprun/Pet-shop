export class ModelBasket {
  constructor(controller) {
    this.controller = controller;
    // this.basket = JSON.parse(localStorage.getItem('basket'));
  };

  getPurchase() {
    console.log(JSON.parse(localStorage.getItem('basket')))
  };

}