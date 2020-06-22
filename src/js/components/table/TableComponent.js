import {TableTemplate} from './TableTemplate'

export class TableComponent{
    constructor(idTable,titulos, conteudos) {
        let div = document.createElement('div');
        div.innerHTML = TableTemplate.template(idTable,titulos, conteudos)
        this._template = div;
      }
      
      get template() {
        return this._template;
      }
      
      append(el){
        el.append(this.template)
      }
      remove(el){
        
      }
}