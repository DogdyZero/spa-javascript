import {ButtonTemplate} from './ButtonTemplate'
import {MDCRipple} from '@material/ripple';

export class ButtonComponent{

    constructor() {
        // let div = document.createElement('div');
        // div.innerHTML = ButtonTemplate.template('Enviar')
        this._template = ButtonTemplate.template('Enviar');
        this._value = null;
        // const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
      }
      
      get template() {
        return this._template;
      }
      
      append(el){
        el.innerHTML = this.template
        // el.append(this.template)
      }
}