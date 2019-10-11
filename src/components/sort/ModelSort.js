export class ModelSort {
  sortByPrice(param) {
    const data = this.getData();
    if(param.classList.contains('price-down')) {
      return data.sort((a, b) => Number(b.price) - Number(a.price));
    }
    return data.sort((a, b) => Number(a.price) - Number(b.price));
  }

  sortByName(param, isAsc = true) {
    const data = this.getData();
    if(param.classList.contains('name-up')) {
      isAsc = false;
    }
    return data.sort((a, b) => {
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();
      return (nameA < nameB ? -1 : 1 ) * (isAsc ? 1 : -1);
    });
  }

  getData() {
    return JSON.parse(localStorage.getItem('products'));
  }
}
