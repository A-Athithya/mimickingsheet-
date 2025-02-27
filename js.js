function format(command) {
    document.execCommand(command, false, null);
}

function changeColor(color) {
    document.execCommand('foreColor', false, color);
}

// Add row functionality
function addRow() {
    const table = document.getElementById('spreadsheet').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const newCellHeader = newRow.insertCell(0);
    newCellHeader.outerHTML = '<th></th>'; // Empty header cell

    for (let i = 1; i <= table.rows[0].cells.length - 1; i++) {
        const newCell = newRow.insertCell(i);
        newCell.contentEditable = "true";
    }
}

// Add column functionality
function addColumn() {
    const table = document.getElementById('spreadsheet');
    const headerRow = table.getElementsByTagName('thead')[0].rows[0];
    const newHeaderCell =