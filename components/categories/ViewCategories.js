export class ViewCategories {
  constructor(controller) {
    this.controller = controller;
    this.categories = document.getElementById('categories');
    this.categories.addEventListener('click', this.controller.showOneCategory.bind(this.controller));
  };

  renderCategories(data) {
    this.categories.innerHTML = `
      <button class="hollow button pets">ALL</button>
      ${data.map(elem => {
        return `<button class="hollow button pets">${elem}</button>`
      }).join(' ')}
    `
  };

  getTargetCategory(ev) {
    let targetElem = ev.target;
    if(targetElem.classList.contains('pets')) {
      targetElem.classList.add('active-category');
      return targetElem.textContent;
    };
  };
}