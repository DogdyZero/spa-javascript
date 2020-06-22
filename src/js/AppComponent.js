import { InstanceOfGoogleSheetsApi } from './config/GoogleSheetsConfig';
import { PesquisaComponent } from './template/PesquisaComponent';

let instance;

export function AppComponentInstance(){
    if(!instance){
        instance = new AppComponent()
    }
    return instance;
}

class AppComponent{
    constructor(){
        this._dom = document.body;
        this.startApp()
    }  

    startApp(){
        let pesquisa = new PesquisaComponent(this._dom)
        pesquisa.template()
        InstanceOfGoogleSheetsApi();
    }

    append(element){
        return this._dom.append(element);
    }
}