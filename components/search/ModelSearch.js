export class ModelSearch {
  getSearchedData(seachParam, productsCategory) {
    // const data = JSON.parse(localStorage.getItem('products'));
    // const val = str.trim();

    return !seachParam ? productsCategory : productsCategory.filter(
      elem => elem.name.toLowerCase().startsWith( seachParam.trim().toLowerCase() ))
    }
}
