export class ModelCategories {
  constructor(controller) {
    this.controller = controller;
    this.data = JSON.parse(localStorage.getItem('products'));
  };

  getAllCategories() {
    return [...new Set(this.data.map(elem => elem.type.toUpperCase()))];
  };

  getOneCategory(pet) {
    if(pet !== 'ALL') {
      return this.data.filter(elem => elem.type.toLowerCase() === pet.toLowerCase());
    }
    return this.data;
  };
}
