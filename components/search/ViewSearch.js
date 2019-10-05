export class ViewSearch {
  constructor() {
    this.search = document.getElementById('search');
  };

  renderSearch() {
    this.search.innerHTML = `
      <input id="search-input" type="search" placeholder="Search">
    `
  };

  getInput(showListOnInput) {
    document.addEventListener('input', (ev) => {
      showListOnInput(ev.target.value)
    });
  };
}