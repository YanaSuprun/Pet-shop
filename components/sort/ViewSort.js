export class ViewSort {
  constructor() {
    this.sort = document.getElementById('sort');
  };

  renderSort() {
    this.sort.innerHTML = `
      <button class="hollow button sort-by-price price-down">Price <i class="fas fa-arrow-down"></i></button>
      <button class="hollow button sort-by-name name-down">Name <i class="fas fa-sort-alpha-down"></i></button>
    `;
  };

  getChoosenSort(startSort) {
    this.sort.addEventListener('click', (ev) => {
      startSort(ev.target);

      if (ev.target.classList.contains('sort-by-price')) {
        ev.target.classList.toggle('price-down');
        ev.target.classList.toggle('price-up');
        ev.target.lastChild.classList.toggle('fa-arrow-down');
        ev.target.lastChild.classList.toggle('fa-arrow-up')
      };

      if (ev.target.classList.contains('sort-by-name')) {
        ev.target.classList.toggle('name-down');
        ev.target.classList.toggle('name-up');
        ev.target.lastChild.classList.toggle('fa-sort-alpha-down');
        ev.target.lastChild.classList.toggle('fa-sort-alpha-up')
      };
    });
  };
}