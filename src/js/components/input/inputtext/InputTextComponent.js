import {MDCTextField} from '@material/textfield';
import mdcAutoInit from '@material/auto-init';


export class InputTextComponent{

    constructor(){
        mdcAutoInit.register('MDCTextField', MDCTextField);
    }

    template(name){
        return `
        <label class="mdc-text-field mdc-text-field--filled" data-mdc-auto-init="MDCTextField" >
            <span class="mdc-text-field__ripple"></span>
            <input class="mdc-text-field__input" type="text" aria-labelledby="my-label-id">
            <span class="mdc-floating-label" id="my-label-id">${name}</span>
            <span class="mdc-line-ripple"></span>
        </label>
    
        `
    }
    init(){
        // mdcAutoInit.register('MDCTextField', MDCTextField);
    //    return new MDCTextField(document.querySelector('.mdc-text-field'));
    }
}