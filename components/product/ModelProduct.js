export class ModelProduct {
  constructor() {
    let basket = localStorage.setItem('basket', JSON.stringify([]));
  };

  getProduct() {
    return fetch('./data/goods.json')
      .then(data => data.json())
      .then(productsArray => {
        this.setAllProductsToLS(productsArray);
        return productsArray;
      }
    );
  };

  setAllProductsToLS(productsArray) {
    localStorage.setItem('products', JSON.stringify(productsArray));
  };


  // setPurchaseToLS(targetElem) {
  //   const storedBasket = JSON.parse(localStorage.getItem('basket'));
  //   const allProducts = JSON.parse(localStorage.getItem('products'));

  //   const purchase = allProducts.filter(elem => elem.id === Number(targetElem.id));
  //   if(purchase[0].quantity > 0) {
  //     const actualBasket = [...storedBasket, ...purchase];
  //     localStorage.setItem('basket', JSON.stringify(actualBasket));
  //   }
  //   // console.log(JSON.parse(localStorage.getItem('basket')));
  // };
}