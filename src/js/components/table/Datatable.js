export class Datatable{
 /*
 * para funcionar corretamente é necessário colocar array no titulo, array em contets
 * que contenha uma array de propriedades, ex
 * attributo 1, atributo 2, atributo 3 
 * contents :[[atributo1,atributo2,atributo3],[atributo4, atributo5, atributo6]]...
 */
    constructor(titles, contents){
        this._titles = titles;
        this._contents = contents;
    }

    get titles(){
        return this._titles;
    }

    get contents(){
        return this._contents;
    }
}