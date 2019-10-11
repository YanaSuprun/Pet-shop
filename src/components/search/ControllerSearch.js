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
    this.view.renderSearch();
    this.eventManager.subscribe('productsReady', this.startSearch.bind(this));
  }

  startSearch() {
    this.view.getInput(this.showListOnInput.bind(this));
  }

  showListOnInput(searchParam) {
    this.searchParam = searchParam;
    let data = this.model.getSearchedData(searchParam);
    this.eventManager.publish('searchStarted', data);
  }
}
