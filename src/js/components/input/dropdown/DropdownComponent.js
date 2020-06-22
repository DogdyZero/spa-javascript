import { MDCSelect } from '@material/select';
import mdcAutoInit from '@material/auto-init';

import { DropdownTemplate } from './DropdownTemplate';

export class DropdownComponent {

  constructor(titulo, lista) {
    let div = document.createElement('div');
    div.innerHTML = DropdownTemplate.template(titulo,lista)
    this._template = div;
    mdcAutoInit.register('MDCSelect', MDCSelect);
    this._value = null;
  }
  
  get template() {
    return this._template;
  }
  
  append(el){
    el.append(this.template)
    this._select = new MDCSelect(document.querySelector('.mdc-select'));
    this._startComponent()
  }
  _startComponent(){
    this._select.listen('MDCSelect:change', () => {
      this._value = this._select.value;
    });
  }
  
  get value(){
    return this._value;
  }
}