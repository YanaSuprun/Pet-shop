export class ModelSearch {
  constructor(controller) {
    this.controller = controller;
  };

  getSearchedData(str) {
    const data = JSON.parse(localStorage.getItem('products'));
    const val = str.trim();

    if (val !== '') {
      return data.filter(elem => elem.name.toLowerCase().startsWith(val.toLowerCase()));
    }
    return data;
  };
}
