export class ViewSearch {
  constructor(controller) {
    this.controller = controller;
    this.search = document.getElementById('search');
  }

  render() {
    this.search.innerHTML = `
      <div class="columns medium-6">
        <input type="text" placeholder="Search">
      </div>
    `
  }
}