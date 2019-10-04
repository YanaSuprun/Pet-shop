export class ModelCategories {
  constructor(controller) {
    this.controller = controller;
  };

  getAllCategories() {
    this.data = JSON.parse(localStorage.getItem('products'));
    return [...new Set(this.data.map(elem => elem.type))];
  };

  setCategoriesToLS(allCategories) {
    allCategories.forEach(category => {
      let categoryData = this.data.filter(elem => elem.type === category);
      localStorage.setItem(category, JSON.stringify(categoryData))
    });
  };

  getOneCategory(pet) {
    if(pet !== 'all') {
      return JSON.parse(localStorage.getItem(pet));
    } 
    return this.data;
  };
}
