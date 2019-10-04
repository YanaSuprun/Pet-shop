export class ViewBasket {
  constructor(controller) {
    this.controller = controller;
    this.basket = document.getElementById('basket');
  };

  renderNewBasket(data) {

  }

  // renderBasket(quant = 0, basketData) {
  //   this.basket.innerHTML = `
  //   <button type="button" data-open="exampleModal1" class="button alert">
  //     <i class="fas fa-shopping-cart"></i> 
  //     <span id="quantity">${quant}</span>
  //   </button>
  //   <div class="reveal" id="exampleModal1" data-reveal>
  //     <h1>Your purchases</h1>
  //     <p>Items reserved for limited time only</p>
  //     <div class = 

  //     <button class="close-button" data-close aria-label="Close modal" type="button">
  //       <span aria-hidden="true">&times;</span>
  //     </button>
  //   </div>
  //   `
  // };

  // changeCounter(counter) {
  //   let count = document.getElementById('quantity');
  //   count.innerHTML = `${counter}`;
  // };

}