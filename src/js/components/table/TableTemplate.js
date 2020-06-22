
export class TableTemplate{
    static template(idTable,dataTable){
        return `
        <div class="mdc-data-table">
            <table id="${idTable}" class="mdc-data-table__table" aria-label="Dessert calories">
            <thead>
                <tr class="mdc-data-table__header-row">
                ${dataTable.titles.map(m => `
                    <th class="mdc-data-table__header-cell" role="columnheader" scope="col">${m}</th>
                `).join('')}
                </tr>
            </thead>
            <tbody class="mdc-data-table__content">
            ${dataTable.contents.map(m => `
                <tr class="mdc-data-table__row">
                    ${m.map(element =>  `
                    
                        <td class="mdc-data-table__cell">${element}</td>
                    
                    `).join('')}
                </tr>
                `).join('')}
            </tbody>
            </table>
        </div>
        
        `
    }
}