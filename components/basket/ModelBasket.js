export class ModelBasket {
  constructor(controller) {
    this.controller = controller;
    // this.basket = {};
  };

  getPurchase() {
    let data = JSON.parse(localStorage.getItem('productsBasket'));
    // console.log(data);
    return data;
  };

}