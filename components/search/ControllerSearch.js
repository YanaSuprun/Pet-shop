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
    this.view.getInputEvent(this.showListOnInput.bind(this));
    this.eventManager.subscribe('Products ready', this.showSearch.bind(this));
  };

  showSearch() {
    this.view.renderSearch();
    this.view.getInputEvent();
  };

  showListOnInput(ev) {
    let data = this.model.getSearchedData(ev.target.value);
    this.eventManager.publish('Search started', data);
  };
}
