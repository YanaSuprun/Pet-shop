export class ModelBasket {
  getPurchase() {
    let data = JSON.parse(localStorage.getItem('basket'));
    return data;
  };
}