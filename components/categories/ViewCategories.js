export class ViewCategories {
  constructor(controller) {
    this.controller = controller;
    this.categories = document.getElementById('categories');
    this.categories.addEventListener('click', this.controller.actionShowCategory.bind(this.controller));
  };

  render(data) {
    this.categories.innerHTML = `
      <button class="hollow button">ALL</button>
      ${data.map(elem => {
        return `<button class="hollow button">${elem}</button>`
      }).join(' ')}
    `
  };

  showCategory(ev) {
    let targetElem = ev.target;
    if(targetElem.classList.contains('button')) {
      targetElem.classList.add('active-category');
      return targetElem.textContent;
    };
  };
}