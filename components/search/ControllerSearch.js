import {ViewSearch} from './ViewSearch.js';
import {ModelSearch} from './ModelSearch.js';

export class ControllerSearch {
  constructor(eventManager) {
    this.eventManager = eventManager;
    this.model = new ModelSearch();
    this.view = new ViewSearch();
    this.init();
  };

  // init() {
  //   this.view.renderSearch();
  //   this.view.getInput(this.showListOnInput.bind(this));
  //   this.eventManager.subscribe('categorySelected', this.showListWithCategories.bind(this));
  // };

  // showListOnInput(searchParam) {
  //   this.searchParam = searchParam;
  //   let data = this.model.getSearchedData(this.searchParam, this.productsCategory);
  //   this.eventManager.publish('search', data);
  // };

  // showListWithCategories(productsCategory) {
  //   this.productsCategory = productsCategory;
  //   let data = this.model.getSearchedData(this.searchParam, this.productsCategory);
  //   this.eventManager.publish('searchInCategories', data)
  // };

  init() {
    this.view.renderSearch();
    this.eventManager.subscribe('categorySelected', this.changeProducts.bind(this));
    this.view.getInput(this.changeProducts.bind(this));
  };

  changeProducts(searchParam = 0, productsCategory) {
    // console.log(this);
    this.searchParam = searchParam;
    this.productsCategory = productsCategory;
    let data = this.model.getSearchedData(this.searchParam, this.productsCategory);
    this.eventManager.publish('search', data);
  }

  // showListOnInput(searchParam) {
  //   this.searchParam = searchParam;
  //   let data = this.model.getSearchedData(this.searchParam, this.productsCategory);
  //   this.eventManager.publish('search', data);
  // };

  // showListWithCategories(productsCategory) {
  //   this.productsCategory = productsCategory;
  //   let data = this.model.getSearchedData(this.searchParam, this.productsCategory);
  //   this.eventManager.publish('searchInCategories', data)
  // };
}
