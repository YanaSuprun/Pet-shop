import {ViewSearch} from './ViewSearch.js';
import {ModelSearch} from './ModelSearch.js';

export class ControllerSearch {
  constructor(router) {
    this.router = router;
    this.model = new ModelSearch(this);
    this.view = new ViewSearch(this);
    this.showSearch();
  };

  showSearch() {
    this.view.renderSearch();
    this.view.getInputEvent();
  };

  showListOnInput(ev) {
    let data = this.model.getSearchedData(ev.target.value);
    this.router.controllerProduct.showProducts(data);
  };
}
