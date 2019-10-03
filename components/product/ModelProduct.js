export class ModelProduct {
  constructor(controller) {
    this.controller = controller;
    this.api = 'https://gentle-coast-49966.herokuapp.com/get-goods';
    this.noCors = 'https://cors-anywhere.herokuapp.com/';
    let basket = localStorage.setItem('basket', JSON.stringify([]));
  };

  getProduct() {
    // fetch(this.noCors + this.api).then(data => data.json()).then(arr => {
    fetch('./data/goods.json').then(data => data.json()).then(arr => {
      this.setAllProductsToLS(arr);
      this.controller.showProducts(arr);
    });
  };

  setAllProductsToLS(arr) {
    localStorage.setItem('products', JSON.stringify(arr));
  };

  setPurchaseToLS(targetElem) {
    const storedBasket = JSON.parse(localStorage.getItem('basket'));
    const allProducts = JSON.parse(localStorage.getItem('products'));

    const purchase = allProducts.filter(elem => elem.id === Number(targetElem.id));
    if(purchase[0].quantity > 0) {
      const actualBasket = [...storedBasket, ...purchase];
      localStorage.setItem('basket', JSON.stringify(actualBasket));
    }
    // console.log(JSON.parse(localStorage.getItem('basket')));
  };
}