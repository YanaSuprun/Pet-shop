export class ModelSearch {
  getSearchedData(seachParam, productsCategory) {

  return !seachParam ? productsCategory : productsCategory.filter(
    elem => elem.name.toLowerCase().startsWith( seachParam.trim().toLowerCase() ))
  };
}
