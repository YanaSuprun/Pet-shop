export class ViewSearch {
  constructor(controller) {
    this.controller = controller;
    this.search = document.getElementById('search');
  }

  render() {
    this.search.innerHTML = `
      <input id="search-input" type="search" placeholder="Search">
    `
  }

  changeOnInput() {
    document.addEventListener('input', this.controller.showListOnInput.bind(this.controller));
  }
}