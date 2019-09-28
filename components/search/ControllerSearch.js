import {ViewSearch} from './ViewSearch.js';
import {ModelSearch} from './ModelSearch.js';

export class ControllerSearch {
  constructor(router) {
    this.router = router;
    this.model = new ModelSearch(this);
    this.view = new ViewSearch(this);
    this.showSearch();
  }

  showSearch() {
    this.view.render();
    this.view.changeOnInput();
  }

  showSortOnInput(ev) {
    this.model.sortOnInput(ev.target.value);
  }

  changeProductList(data) {
    this.router.controllerProduct.showProduct(data);
  }
}
