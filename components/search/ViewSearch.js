export class ViewSearch {
  constructor(controller) {
    this.controller = controller;
    this.search = document.getElementById('search');
  }

  render() {
    this.search.innerHTML = `
      <div class="columns medium-6">
        <input id="search-input" type="search" placeholder="Search">
      </div>
    `
  }

  changeOnInput() {
    document.getElementById('search-input');
    document.addEventListener('input', this.controller.showListOnInput.bind(this.controller));
  }
}