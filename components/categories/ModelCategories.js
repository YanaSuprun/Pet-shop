export class ModelCategories {
  constructor(controller) {
    this.controller = controller;
    this.data = JSON.parse(localStorage.getItem('products'));
    this.setCategoriesToLS();
  };

  getAllCategories() {
    return [...new Set(this.data.map(elem => elem.type))];
  };

  getOneCategory(pet) {
    if(pet !== 'ALL') {
      return this.data.filter(elem => elem.type.toLowerCase() === pet.toLowerCase());
    }
    return this.data;
  };

  setCategoriesToLS() {
    const allCategories = this.getAllCategories();
    allCategories.forEach(category => {
      let categoryData = this.data.filter(elem => elem.type === category);
      localStorage.setItem(category, JSON.stringify(categoryData))
    });
  };
}
