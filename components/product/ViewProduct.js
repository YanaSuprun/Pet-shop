export class ViewProduct {
  constructor(controller) {
    this.controller = controller;
    this.products = document.getElementById('products');
    this.products.addEventListener('click', this.controller.getBuyClick.bind(this.controller));
  }

  renderProducts(data) {
    this.products.innerHTML = `
      ${data.map(elem => {
        return `<div class="columns medium-3">
          <div class="card">
            <img src="${elem.url}">
            <div class="card-section">
              <h4>${elem.name}</h4>
              <h5>Price: ${elem.price}$</h5>
              <p>Quantity: ${elem.quantity}</p>
              <p>Color: ${elem.color}</p>
            </div>
            <button elem="${elem}" id="${elem.id}"class="purchase hollow button">Add to basket</button>
          </div>
        </div>`
      }).join('')}
    `
  }

  changeButtonOnClick(targetElem) {
    targetElem.classList.add('alert');
    targetElem.innerHTML = 'Added';
    console.log(targetElem);
  }
}