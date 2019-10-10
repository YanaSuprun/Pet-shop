export class ModelProduct {
  constructor() {
    // let basket = localStorage.setItem('basket', JSON.stringify([]));
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
  };


  setPurchaseToLS(targetElem) {
    let storedBasket = JSON.parse(localStorage.getItem('basket')) || [];
    const allProducts = JSON.parse(localStorage.getItem('products'));

    allProducts.forEach(elem => {
      if(elem.id === Number(targetElem.id) && elem.quantity > 0) {
        if(elem.purchase) {
          elem.purchase += 1;
          storedBasket.forEach(el => el.id === elem.id && ++el.purchase);
        } else {
          elem.purchase = 1;
          storedBasket.push(elem);
        };

        localStorage.setItem('basket', JSON.stringify(storedBasket));
        elem.quantity -=1;
        localStorage.setItem('products', JSON.stringify(allProducts));
      };
    });
  };
}
