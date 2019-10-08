export class ModelProduct {
  constructor() {
    let basket = localStorage.setItem('basket', JSON.stringify([]));
  };

  getProduct() {
    return fetch('./data/goods.json', {cache: 'force-cache'})
      .then(data => data.json())
      .then(productsArray => {
        this.setAllProductsToLS(productsArray);
        return productsArray;
      }
    );
  };

  setAllProductsToLS(productsArray) {
    localStorage.setItem('products', JSON.stringify(productsArray));
    this.createProductsForBasket();
  };


  setPurchaseToLS(targetElem) {
    const storedBasket = JSON.parse(localStorage.getItem('basket'));
    const allProducts = JSON.parse(localStorage.getItem('productsForBasket'));
    const purchase = allProducts.filter(elem => elem.id === Number(targetElem.id));
    let actualBasket = [...storedBasket, ...purchase];
    localStorage.setItem('basket', JSON.stringify(actualBasket));
  };

  createProductsForBasket() {
    let data =  JSON.parse(localStorage.getItem('products'));
    localStorage.setItem('productsForBasket', JSON.stringify(data));
  }
}