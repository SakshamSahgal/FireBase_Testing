function insert_row_with_data(data, id) //function that inserts a row with passed data
{
    var table = document.getElementById(id);
    var row = table.insertRow(1); //inserting at the first index (since index 0 is heading)
    var cell = row.insertCell(0); //inserting at the 0th col (starting)
    cell.innerHTML = data;
}