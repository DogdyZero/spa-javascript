import { ButtonComponent } from "../components/button/ButtonComponent";
import { HeaderComponent } from "../components/header/HeaderComponent";
import { DropdownComponent } from "../components/input/dropdown/DropdownComponent";
import { PesquisaController } from "../controller/PesquisaController";
import { PesquisaTemplate } from "./PesquisaTemplate";
import { PlayerMock } from "../models/mock/PlayerMock";


export class PesquisaComponent{
    constructor(dom){
        this._dom = dom;
        let div = document.createElement('div');
        div.innerHTML = PesquisaTemplate.template();
        this._template = div;
    }
    template(){
        let header = new HeaderComponent();
        this._dom.append(header.template())
        this._dom.append(this._template)
        let comboComponent = new DropdownComponent('nome', new PlayerMock().allPlayers)
        let combo = document.querySelector('#combo')
        comboComponent.append(combo)

        document.querySelector('#resultado').innerHTML = comboComponent.value
        
        let buttonComponent = new ButtonComponent()
        buttonComponent.append(document.querySelector('#button'))
        let controller = new PesquisaController();
        // app.append(header.template())
        // app.append(this._template);
    }
}