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
    this.eventManager.subscribe('Products ready', this.showCategories.bind(this));
    this.view.getChosenCategory(this.showOneCategory.bind(this));
  };

  showCategories() {
    const categories = this.model.getAllCategories();
    this.model.setCategoriesToLS(categories);
    this.view.renderCategories(categories);
  };

  showOneCategory(ev) {
    let pet = this.view.getTargetCategory(ev);
    let data = this.model.getOneCategory(pet);
    this.eventManager.publish('Category selected', data);
  };
}