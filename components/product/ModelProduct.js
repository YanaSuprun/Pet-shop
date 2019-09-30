export class ModelProduct {
  constructor(controller) {
    this.controller = controller;
    this.api = 'https://gentle-coast-49966.herokuapp.com/get-goods';
    this.noCors = 'https://cors-anywhere.herokuapp.com/';
  }

  getProduct() {
    // fetch(this.noCors + this.api).then(data => data.json()).then(arr => {
    fetch('./data/goods.json').then(data => data.json()).then(arr => {
      this.setToLocalStorage(arr);
      this.controller.showProduct(arr);
    });
  }

  setToLocalStorage(arr) {
    localStorage.setItem('products', JSON.stringify(arr))
  }

  getFromLocalStorage() {
    return JSON.parse(localStorage.getItem('products'));
  }
}