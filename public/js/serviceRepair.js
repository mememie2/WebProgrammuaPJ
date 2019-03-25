var check = 0;
//addRow
function addToTable() {
    var v1 = document.getElementById("nameSpare").value;
    var v2 = document.getElementById("priceSpare").value;

    if (v1 !== "" && v2 !== "") {
        if (check == 0) {
            document.getElementById("listTable").deleteRow(1);
            document.getElementById("listTable").deleteRow(1);
        }
        var table = document.getElementById("listTable");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = '<td >' + v1 + '</td>';
        cell2.innerHTML = '<td >' + v2 + '</td>';
        cell3.innerHTML = '<td ><center><a onclick="deleteToTable()" class="button delete">ลบ</a></center></td>';
        check = check + 1;

    } else {
        window.alert("กรุณากรอกข้อมูลให้ถูกต้องและครบถ้วน")
    }

}

//deleteRow
function deleteToTable() {
    var index, table = document.getElementById('listTable');
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].cells[2].onclick = function () {

            index = this.parentElement.rowIndex;
            table.deleteRow(index);
            console.log(index);
        };

    }
}


//connect DB
function connectDB() {

}