import { FactoryTerritoryWarRegistry } from "../factory/FactoryTerritoryWarRegistry";
import { PesquisaService } from "./service/PesquisaService";
import { Chart } from 'chart.js'

export class PesquisaController {

    constructor() {
        // this._doc = document.createElement('div');
        // document.body.append(this._doc)
        this._init()
    }

    _init() {

        document.querySelector("#formularioPesquisa").addEventListener('submit', e => {
            e.preventDefault()
            // salvando a primeira variavel q no caso é a do combobox
            let parametro = e.target[0].value

            let factory = new FactoryTerritoryWarRegistry();
            let resultado = factory.create(parametro)
            let service = new PesquisaService();
            // service.createTabela(resultado)

            service.createGraphics(resultado)
            // let doc = document.querySelector('#resultado')
            

        })
    }

    request() {
    }
    set lista(lista) {
        this._lista = lista;
    }
    get lista() {
        return this._lista;
    }
}