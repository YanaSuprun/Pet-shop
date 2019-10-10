import {ViewCategories} from './ViewCategories.js';
import {ModelCategories} from './ModelCategories.js';

export class ControllerCategories {
  constructor(eventManager) {
    this.eventManager = eventManager;
    this.model = new ModelCategories();
    this.view = new ViewCategories();
    this.init();
  };

  init() {
    this.eventManager.subscribe('productsReady', this.showCategories.bind(this));
    this.view.getChosenCategory(this.showOneCategory.bind(this));
  };

  showCategories(productsReady) {
    const categories = this.model.getAllCategories(productsReady);
    this.view.renderCategories(categories);
  };

  showOneCategory(pet) {
    let data = this.model.getChoosenCategory(pet);
    this.eventManager.publish('categorySelected', data)
  };
}