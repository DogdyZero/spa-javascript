import { HeaderTemplate } from "./HeaderTemplate";

export class HeaderComponent{

    constructor(){

        let div = document.createElement('div');
        div.setAttribute('id','header');
        div.innerHTML = HeaderTemplate.template()
        this._header = div;
    }

    template(){
        return this._header ;
    }
}