export class ModelSearch {
  constructor(controller) {
    this.controller = controller;
  }

  sortOnInput(str) {
    const data = JSON.parse(localStorage.getItem('products'));
    const val = str.trim();
    const result = [];

    if (val !== '') {
      data.forEach(elem => {
        if(elem.name.toLowerCase().startsWith(val.toLowerCase())) {
          result.push(elem);
        };
      });
    } else {
      data.forEach(elem => {
        result.push(elem);
      });
    };

    this.controller.changeProductList(result);
  };
};
