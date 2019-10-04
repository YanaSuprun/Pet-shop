import {ViewCategories} from './ViewCategories.js';
import {ModelCategories} from './ModelCategories.js';

export class ControllerCategories {
  constructor(eventManager) {
    this.eventManager = eventManager;
    this.model = new ModelCategories(this);
    this.view = new ViewCategories(this);
    this.eventManager.subscribe('Products ready', this.showCategories.bind(this));
  };

  showCategories() {
    const categories = this.model.getAllCategories();
    this.model.setCategoriesToLS(categories);
    this.view.renderCategories(categories);
  };

  showOneCategory(ev) {
    let pet = this.view.getTargetCategory(ev);
    let data = this.model.getOneCategory(pet);
    this.eventManager.publish('Change product list', data);
  };
}