export class ModelProduct {
  constructor(controller) {
    this.controller = controller;
  }

  getProductJSON() {
    fetch('../data/goods.json').then(data => data.json()).then(arr => {
      this.setToLocalStorage(arr);
      this.controller.showProduct(arr);
    });
  }

  setToLocalStorage(arr) {
    localStorage.setItem('products', JSON.stringify(arr))
  }
}