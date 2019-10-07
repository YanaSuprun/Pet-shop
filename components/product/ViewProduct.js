export class ViewProduct {
  constructor() {
    this.products = document.getElementById('products');
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

  getPurchasesAction(showListOnInput) {
    document.addEventListener('input', showListOnInput);
    targetElem.classList.add('alert');
    targetElem.innerHTML = 'Added';
  };
}