function PrintDiv() {
    var divToPrint = document.getElementById('print'); // เลือก div id ที่เราต้องการพิมพ์
    var html = '<html>' + // 
        '<head>' +
        '<link href="print.css" rel="stylesheet" type="text/css">' +
        '<link rel="stylesheet" href="./../../css/style.css" />' +
        '</head>' +
        '<body onload="window.print(); window.close();">' + divToPrint.innerHTML + '</body>' +
        '</html>';

    var popupWin = window.open();
    popupWin.document.open();
    popupWin.document.write(html); //โหลด print.css ให้ทำงานก่อนสั่งพิมพ์
    popupWin.document.close();
}

function showPdf(){
    document.getElementById("pdf_location").textContent = document.getElementById("location").value
    document.getElementById("pdf_date").textContent = document.getElementById("date").value
    document.getElementById("pdf_name").textContent = document.getElementById("name").value
    document.getElementById("pdf_emp").textContent = document.getElementById("emp").value
    document.getElementById("pdf_address").textContent = document.getElementById("address").value
    document.getElementById("pdf_type").textContent = document.getElementById("type").value
    document.getElementById("pdf_license").textContent = document.getElementById("license").value
    document.getElementById("pdf_gen").textContent = document.getElementById("gen").value
    document.getElementById("pdf_color").textContent = document.getElementById("color").value
    document.getElementById("pdf_money").textContent = document.getElementById("money").value
}