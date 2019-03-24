var check = 0;
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
        cell1.innerHTML = '<td class="tdBest">' + v1 + '</td>';
        cell2.innerHTML = '<td class="tdBest">' + v2 + '</td>';
        cell3.innerHTML = '<td class="tdBest"><center><a onclick="deleteToTable(this)" class="button delete">ลบ</a></center></td>';
        check = check + 1;
    } else {
        window.alert("กรุณากรอกข้อมูลให้ถูกต้องและครบถ้วน")
    }

}

function deleteToTable(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("listTable").deleteRow(i);
}