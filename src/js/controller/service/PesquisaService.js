import { Datatable } from "../../components/table/Datatable";
import { TableComponent } from "../../components/table/TableComponent";

export class PesquisaService {
    constructor() {
    }

    createTabela(resultado) {
        if (document.querySelector('#tabela-TerritoryWar')) {
            document.querySelector('#tabela-TerritoryWar').remove()
        }
        resultado.then(res => {
            let titulos = ['ID', 'Player', 'Attack', 'Defense']

            let contents = []

            res.map(m => {
                let labels = []
                labels.push(m.id, m.cliente, m.offense, m.defense)
                contents.push(labels)
            })

            let dataTable = new Datatable(titulos, contents)
            let table = new TableComponent('tabela-TerritoryWar', dataTable);
            table.append(document.querySelector('#resultado'))
        })
    }

    createGraphics(resultado) {
        let attack = []
        let defense = []
        let ids = []
        resultado.then(res => {
            res.map(m => {
                attack.push(parseInt(m.offense))
                defense.push(parseInt(m.defense))
                ids.push(m.id)
            })

            var ctx = document.getElementById('chart').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ids,
                    datasets: [{
                        label: 'Attack',
                        data: attack,
                        borderWidth: 1,
                        backgroundColor:['rgba(255, 99, 132, 0.2)'],
                        borderColor:['rgba(255, 99, 132, 1)']
                    },
                    {
                        label: 'Defense',
                        data: defense,
                        borderWidth: 1,
                        backgroundColor:['rgba(54, 162, 235, 0.2)'],
                        borderColor:['rgba(54, 162, 235, 1)']
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            stacked: true
                        }]
                    }
                }
            });
        })
    }
}