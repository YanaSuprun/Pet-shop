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
    this.search.addEventListener('input', (ev) => {
      showListOnInput(ev.target.value)
    });

    return () => {
      this.search.removeEventListener('input', showListOnInput);
    };
  };
}
