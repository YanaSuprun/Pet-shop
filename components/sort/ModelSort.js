export class ModelSort {
  sortByPrice(param) {
    this.data = JSON.parse(localStorage.getItem('products'))
    if(param.classList.contains('price-down')) {
      return this.data.sort((a, b) => Number(b.price) - Number(a.price));
    };
    return this.data.sort((a, b) => Number(a.price) - Number(b.price));
  };

  sortByName(param, isAsc = true) {
    if(param.classList.contains('name-up')) {
      isAsc = false;
    };
    return this.data.sort((a, b) => {
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();
      return (nameA < nameB ? -1: 1 ) * (isAsc ? 1 : -1);
    });
  };
}