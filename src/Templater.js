export class Templater {
  constructor(url){
    fetch(url).then(resp => resp.text()).then(result => {
      this.template = result;
    });
  }

  load(obj, dom) {
    let answ = this.template;
    for(let key in obj){
      answ = answ.replace(`{{ ${key} }}`, obj[key]);
    }
    dom.innerHTML += answ;
  }
}