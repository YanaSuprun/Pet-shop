export class ViewProduct {
  constructor() {
    this.products = document.getElementById('products');
    // this.products.addEventListener('click', this.controller.getPurchase.bind(this.controller));
  }

  renderProducts(data) {
    this.products.innerHTML = `
      ${data.map(elem => {
        return `<div class="columns medium-3">
          <div class="card">
            <img src="${elem.url}">
            <div class="card-section">
              <h5 class="product-name">${elem.name}</h5>
              <h5 class="product-price">Price: ${elem.price}$</h5>
              <p>Quantity: ${elem.quantity}</p>
              <p>Color: ${elem.color}</p>
            </div>
            <button elem="${elem}" id="${elem.id}"class="purchase hollow button">Add to basket</button>
          </div>
        </div>`
      }).join('')}
    `
  };

  getPurchasevent(showListOnInput) {
    document.addEventListener('input', showListOnInput);
  };

  // changeButtonOnClick(targetElem) {
  //   targetElem.classList.add('alert');
  //   targetElem.innerHTML = 'Added';
  // }
}