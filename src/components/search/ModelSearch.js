export class ModelSearch {
  getSearchedData(str) {
    const data = JSON.parse(localStorage.getItem('products'));
    return data.filter(elem => elem.name.toLowerCase().startsWith(str.trim().toLowerCase()));
  }
}
