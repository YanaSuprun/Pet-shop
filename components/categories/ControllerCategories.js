import {ViewCategories} from './ViewCategories.js';
import {ModelCategories} from './ModelCategories.js';

export class ControllerCategories {
  constructor(router) {
    this.router = router;
    this.model = new ModelCategories(this);
    this.view = new ViewCategories(this);
    this.actionGetCategories();
  };

  actionGetCategories() {
    const categories = this.model.getAllCategories();
    this.view.render(categories);
  };

  actionShowCategory(ev) {
    let pet = this.view.showCategory(ev);
    let data = this.model.getCategory(pet);
    this.router.controllerProduct.showProduct(data);
  };
}