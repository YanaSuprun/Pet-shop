export class ViewBasket {
  constructor(controller) {
    this.controller = controller;
    this.basket = document.getElementById('basket');
  };

  render(quant = 0) {
    this.basket.innerHTML = `
    <button type="button" data-open="exampleModal1" class="button alert">
      <i class="fas fa-shopping-cart"></i> 
      <span id="quantity">${quant}</span>
    </button>
    <div class="reveal" id="exampleModal1" data-reveal>
      <h1>Your purchases</h1>
      <p class="lead">Your couch. It is mine.</p>
      <p>I'm a cool paragraph that lives inside of an even cooler modal. Wins!</p>

      <button class="close-button" data-close aria-label="Close modal" type="button">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    `
  };

  changeCounter(counter) {
    console.log(counter);
    let count = document.getElementById('quantity');
    count.innerHTML = `${counter}`;
  }

}