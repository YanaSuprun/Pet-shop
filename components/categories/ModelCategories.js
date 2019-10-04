export class ModelCategories {
  getAllCategories(productsReady) {
    this.data = productsReady;
    return [...new Set(productsReady.map(elem => elem.type))];
  };

  // getChoosenCategory(pet) {
  //   // this.data = JSON.parse(localStorage.getItem('products'));
  //   // console.log(data)
  //   let result = this.data.filter(elem => {
  //     elem.type === pet;
  //   })
  //   console.log(result);
  // }

  // setCategoriesToLS(allCategories) {
  //   allCategories.forEach(category => {
  //     let categoryData = this.data.filter(elem => elem.type === category);
  //     localStorage.setItem(category, JSON.stringify(categoryData))
  //   });
  // };

  // getOneCategory(pet) {
  //   if(pet !== 'all') {
  //     return JSON.parse(localStorage.getItem(pet));
  //   } 
  //   return this.data;
  // };

  getChoosenCategory(pet) {
    if(pet !== 'all') {
      let choosenCategory = this.data.filter(elem => elem.type.toLowerCase() === pet.toLowerCase());
      return choosenCategory;
    }
    return this.data;
  };
}


