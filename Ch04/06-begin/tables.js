"use strict";


let tableData = [];

const collectTableData = function(myTable) {
    const body = myTable.tBodies[0];

    let tableData = [];

    for (const row of body.rows) {
        const cells = row.cells;
        let dataRow = [cells[0].innerText, cells[1].innerText];
        dataRow[2] = parseInt(cells[2].innerText, 10);
        dataRow[3] = parseInt(cells[3].innerText, 10);

        tableData.push(dataRow);
    }

    return tableData;
}

window.addEventListener('DOMContentLoaded', () => {
    // collect table data into an array
    const myTable = document.querySelector('.content table');

    tableData = collectTableData(myTable);

    console.log('data collected', [].concat(tableData));

    const tableHeader = document.querySelector('table thead');

    tableHeader.addEventListener('click', evt => {
       const target = evt.target;
       const targetId = target.id;
       const targetElement = document.getElementById(targetId);

       if (!targetElement.matches('.sortable')) {
           return;
       }

       let sortKey;
       let sortType = 'alpha';
       let sortDirection;

        switch (targetId) {
            case 'header-name':
                sortKey = 0;
                break;
        }

        let currentSortDirection = targetElement.getAttribute('aria-sort');
        switch (currentSortDirection) {
            case 'ascending':
                sortDirection = 'descending';
                break;
            case 'descending':
            default:
                sortDirection = 'ascending';
                break;
        }

        tableData.sort((a, b) => {
            if (a[sortKey] === b[sortKey]) {
                return 0;
            }

            if (sortDirection === 'ascending') {
                if (a[sortKey] < b[sortKey]) {
                    return -1;
                } else if (a[sortKey] > b[sortKey]) {
                    return 1;
                }
            } else {
                if (b[sortKey] < a[sortKey]) {
                    return -1;
                } else if (b[sortKey] > a[sortKey]) {
                    return 1;
                }
            }
        });

        console.log('data sorted', tableData);

        // Now replace the table data with the sorted data
        const myTable = document.querySelector('.content table');

        const body = myTable.tBodies[0];

        for (let r = 0; r < body.rows.length; r++) {
            body.deleteRow(r);
            let newRow = body.insertRow(r)

            for (let c = 0; c < tableData[r].length; c++) {
                let newCell = newRow.insertCell(c);
                let cellText = document.createTextNode(tableData[r][c]);
                newCell.appendChild(cellText);
            }
        }

        // Update the table header with current sort information and style
        const currentSortElement = document.querySelector('.content table thead th[aria-sort]');
        if (currentSortElement) {
            currentSortElement.removeAttribute('aria-sort');
        }
        targetElement.setAttribute('aria-sort', sortDirection);
    });
});
