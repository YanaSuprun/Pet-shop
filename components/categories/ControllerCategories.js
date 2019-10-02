import {ViewCategories} from './ViewCategories.js';
import {ModelCategories} from './ModelCategories.js';

export class ControllerCategories {
  constructor(router) {
    this.router = router;
    this.model = new ModelCategories(this);
    this.view = new ViewCategories(this);
    this.showCategories();
  };

  showCategories() {
    const categories = this.model.getAllCategories();
    this.view.renderCategories(categories);
  };

  showOneCategory(ev) {
    let pet = this.view.getTargetCategory(ev);
    let data = this.model.getOneCategory(pet);
    this.router.controllerProduct.showProducts(data);
  };
}