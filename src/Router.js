import {ControllerProduct} from '../components/product/ControllerProduct.js';
import {EventManager} from './EventManager.js';
import {ControllerSearch} from '../components/search/ControllerSearch.js';
import {ControllerSort} from '../components/sort/ControllerSort.js';
import {ControllerCategories} from '../components/categories/ControllerCategories.js';
import {ControllerBasket} from '../components/basket/ControllerBasket.js';

export class AppController {
  constructor() {
    this.eventManager = new EventManager();
    this.controllerProduct = new ControllerProduct(this.eventManager);
    this.controllerSearch = new ControllerSearch(this.eventManager);
    this.controllerSort = new ControllerSort(this.eventManager);
    this.controllerCategories = new ControllerCategories(this.eventManager);
    this.controllerBasket = new ControllerBasket(this.eventManager);
  };
}
