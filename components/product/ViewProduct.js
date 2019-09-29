// Templater doesn't work yet ----import { Templater } from '/src/Templater.js';

export class ViewProduct {
  constructor(controller) {
    this.controller = controller;
    // this.templater = new Templater('../components/product/Product.html')
    this.products = document.getElementById('products');
    // this.addToBasket();
    this.products.addEventListener('click', this.addToBasket.bind(this.controller));
    // this.purchase = document.getElementById('purchase');
  }

  // render(data) {
  //   this.products.innerHTML = `
  //   hello
  //   ${data.map(elem => {
  //     return this.templater.load(elem, products)
  //   })}
  //   `
  // }

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

  addToBasket(ev) {
    let target = ev.target;
    if(target.classList.contains('purchase')) {
      this.actionGetToBasket(target.getAttribute('elem'));
    }
    // this.purchase = document.querySelectorAll('.purchase');
    // console.log('hello');
    // console.log(purchase);
    // this.products.addEventListener('click', this.controller.actionGetToBasket.bind(this.controller));
    // console.log('ok')
  }
}