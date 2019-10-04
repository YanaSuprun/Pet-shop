import {ViewSearch} from './ViewSearch.js';
import {ModelSearch} from './ModelSearch.js';

export class ControllerSearch {
  constructor(eventManager) {
    this.eventManager = eventManager;
    this.model = new ModelSearch();
    this.view = new ViewSearch();
    this.init();
  }

  init() {
    this.searchParam = '';
    this.view.getInputEvent(this.showListOnInput.bind(this));
    this.view.renderSearch();
    this.view.getInputEvent();
    this.eventManager.subscribe('productsSearch', this.showSearch.bind(this));
  };

  showSearch(productsCategory) {
    this.productsCategory = productsCategory;
    let data = this.model.getSearchedData(this.searchParam, productsCategory);
    this.eventManager.publish('productsForRender', data)
  };

  showListOnInput(ev) {
    this.searchParam = ev.target.value;
    let data = this.model.getSearchedData(this.searchParam, this.productsCategory);
    this.eventManager.publish('productsForRender', data)

    // this.eventManager.publish('Search started', data);
  };
}
