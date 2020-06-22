export class TerritoryWarRegister{
    constructor(id,cliente, offense, defense){
        this._id = id;
        this._cliente=cliente;
        this._offense = offense;
        this._defense = defense;
    }

    get id(){
        return this._id;
    }
    get cliente(){
        return this._cliente;
    }

    get offense(){
        return this._offense;
    }
    
    get defense(){
        return this._defense;
    }
}