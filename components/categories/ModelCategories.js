export class ModelCategories {
  constructor(controller) {
    this.controller = controller;
    this.data = JSON.parse(localStorage.getItem('products'));
    this.setCategoriesToLS();
  };

  getAllCategories() {
    return [...new Set(this.data.map(elem => elem.type))];
  };

  setCategoriesToLS() {
    const allCategories = this.getAllCategories();
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
