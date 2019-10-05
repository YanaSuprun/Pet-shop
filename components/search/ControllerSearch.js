import {ViewSearch} from './ViewSearch.js';
import {ModelSearch} from './ModelSearch.js';

export class ControllerSearch {
  constructor(eventManager) {
    this.eventManager = eventManager;
    this.model = new ModelSearch();
    this.view = new ViewSearch();
    this.init();
  };

  init() {
    this.view.renderSearch();
    this.view.getInput(this.showListOnInput.bind(this));
    this.eventManager.subscribe('categorySelected', this.showListWithCategories.bind(this));
  };

  showListOnInput(searchParam) {
    this.searchParam = searchParam;
    let data = this.model.getSearchedData(this.searchParam, this.productsCategory);
    this.eventManager.publish('search', data);
  };

  showListWithCategories(productsCategory) {
    this.productsCategory = productsCategory;
    let data = this.model.getSearchedData(this.searchParam, this.productsCategory);
    this.eventManager.publish('searchInCategories', data)
  };
}
