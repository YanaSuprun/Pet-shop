import {ViewSort} from './ViewSort.js';
import {ModelSort} from './ModelSort.js';

export class ControllerSort {
  constructor(eventManager) {
    this.eventManager = eventManager;
    this.model = new ModelSort();
    this.view = new ViewSort();
    this.init();
  };

  init() {
    this.view.renderSort();
    this.eventManager.subscribe('productsReady', this.getSort.bind(this));
  };

  getSort() {
    this.view.getChoosenSort(this.startSort.bind(this));
  };

  startSort(targetButton) {
    let data;
    if(targetButton.classList.contains('sort-by-price')) {
      data = this.model.sortByPrice(targetButton);
    } else if(targetButton.classList.contains('sort-by-name')) {
      data = this.model.sortByName(targetButton);
    };
    this.eventManager.publish('sorted', data);
  };
}