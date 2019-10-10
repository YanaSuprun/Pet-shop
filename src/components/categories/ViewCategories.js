export class ViewCategories {
  constructor() {
    this.categories = document.getElementById('categories');
  };

  renderCategories(data) {
    this.categories.innerHTML = `
      <button class="hollow button pets">ALL</button>
      ${data.map(elem => {
        return `<button class="hollow button pets">${elem.toUpperCase()}</button>`
      }).join(' ')}
    `
  };

  getChosenCategory(showOneCategory) {
    this.categories.addEventListener('click', (ev) => {
      let targetElem = ev.target;
      if(targetElem.classList.contains('pets')) {
        targetElem.classList.add('active-category');
        showOneCategory(targetElem.textContent.toLowerCase());
      };
    });
  };
}