import {TerritoryWarRegister} from '../models/TerritoryWarRegister'
export class FactoryTerritoryWarRegistry{

    constructor(){

    }

    create(param){
        return gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: '1FJo4EHFqJZ5wglQaGo1V_lh21wooP_08b53oS4Rhv_c',
            range: 'A1:D500',
        }).then(response =>{
            var range = response.result;
            let lista = []
            if (range.values.length > 0) {
                for (let i = 0; i < range.values.length; i++) {
                    if(range.values[i][1].includes(param)){
                        let register = new TerritoryWarRegister(
                            range.values[i][0],
                            range.values[i][1],
                            range.values[i][2],
                            range.values[i][3]
                        )
                        lista.push(register)
                    }
                }
            }
            return lista;
        })
    }
}