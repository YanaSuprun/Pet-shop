import {ViewSearch} from './ViewSearch.js';
import {ModelSearch} from './ModelSearch.js';

export class ControllerSearch {
  constructor() {
    this.model = new ModelSearch(this);
    this.view = new ViewSearch(this);
    this.showSearch();
  }

  showSearch() {
    this.view.render();
  }
}