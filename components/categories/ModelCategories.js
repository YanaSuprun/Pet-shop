export class ModelCategories {
  getAllCategories(productsReady) {
    this.data = productsReady;
    return [...new Set(productsReady.map(elem => elem.type))];
  };

  getChoosenCategory(pet) {
    if(pet !== 'all') {
      let choosenCategory = this.data.filter(elem => elem.type === pet);
      return choosenCategory;
    }
    return this.data;
  };
}


