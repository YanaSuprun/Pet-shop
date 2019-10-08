export class ViewBasket {
  constructor() {
    this.basket = document.getElementById('basket');
  };

  changeCounter(counter) {
    let count = document.getElementById('quantity');
    count.innerHTML = `${counter}`;
  };

  renderProductList(data) {
    let purchases = document.getElementById('purchases');
    purchases.innerHTML = `
    <p>Items reserved for limited time only</p>
    <table>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Add</th>
        <th>Quantity</th>
        <th>Remove</th>
        <th>Price</th>
        <th>Total price</th>
      </tr>
      
      ${data.map(elem => {
        return `<tr>
          <th><img src='${elem.url}'></th>
          <th>${elem.name}</th>
          <th><button>+</button></th>
          <th>1</th>
          <th><button>-</button></th>
          <th>${elem.price}</th>
          <th>${elem.quantity * elem.price}</th>
        </tr>
        `
      }).join('')}
    </table>
    `
  };
}