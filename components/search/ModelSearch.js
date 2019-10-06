export class ModelSearch {
  // getSearchedData(searchParam, productsCategory) {

  // return !searchParam ? productsCategory : productsCategory.filter(
  //   elem => elem.name.toLowerCase().includes( searchParam.trim().toLowerCase() ))
  // };

  getSearchedData(str) {
    const data = JSON.parse(localStorage.getItem('products'));
    return data.filter(elem => elem.name.toLowerCase().startsWith(str.trim().toLowerCase()));
  };
}
