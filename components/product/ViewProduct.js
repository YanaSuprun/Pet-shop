export class ViewProduct {
  constructor(controller) {
    this.controller = controller;
    this.products = document.getElementById('products');
    this.products.addEventListener('click', this.controller.getBuyClick.bind(this.controller));
  }

  render(data) {
    this.products.innerHTML = `
      ${data.map(elem => {
        return `<div class="columns medium-3">
          <div class="card">
            <img src="${elem.url}">
            <div class="card-section">
              <h4>${elem.name}</h4>
              <p>It has an easy to override visual style, and is appropriately subdued.</p>
            </div>
            <button elem="${elem}" class="purchase hollow button">Add to basket</button>
          </div>
        </div>`
      }).join('')}
    `
  }

  changeButtonOnClick(ev, targetElem) {
    targetElem.classList.toggle('alert');
    targetElem.innerHTML = 'Added';
    console.log(targetElem.parentNode);
  }
}