export class ModelBasket {
  getPurchase() {
    let data = JSON.parse(localStorage.getItem('basket'));
    return data;
  };

  getBasketData() {
    let data = this.getPurchase();
    localStorage.setItem('history', JSON.stringify(data));
  }
}