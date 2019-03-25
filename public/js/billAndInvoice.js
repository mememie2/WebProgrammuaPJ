function getTableBill() {
    var json = '{ "bill" : [' +
        '{ "ID_TRN_buy_bill": 1101101 , "model":"R10" ,"license_plate":"กกต 6001","ID_MST_stock":"201TH001","weight":"-" },' +
        '{ "ID_TRN_buy_bill": 1101101 , "model":"R10" ,"license_plate":"กกต 6001","ID_MST_stock":"201TH001","weight":"-"},' +
        '{ "ID_TRN_buy_bill": 1101101 , "model":"R10" ,"license_plate":"กกต 6001","ID_MST_stock":"201TH001","weight":"-"} ]}';


    var parsed = JSON.parse(json);

    var count = Object.keys(parsed.bill).length;

    /**************** css*////************** */
    var td = "BVtd"
    var th = "BVth"
    var table = "BVtable"
    var tr = "BVtr"
    /**************** *////************** */
    var tableHeader = "<table class=" + table + "><tr><th class=" + th + ">รหัสรถยนต์</th ><th class=" + th + ">ชื่อรถยนต์/รุ่น</th><th class=" + th + ">เลขทะเบียน</th><th class=" + th + ">เลขเครื่อง</th><th class=" + th + ">น้ำหนัก</th></tr>";
    var tableContent = "";



    for (i = 0; i < count; i++) {
        tableContent = tableContent + "<tr class=" + tr + ">"
            + "<td class=" + td + ">" + parsed.bill[i].ID_TRN_buy_bill +
            "</td> <td class=" + td + ">" + parsed.bill[i].model +
            "</td> <td class=" + td + ">" + parsed.bill[i].license_plate +
            "</td> <td class=" + td + ">" + parsed.bill[i].ID_MST_stock +
            "</td> <td class=" + td + ">  " + parsed.bill[i].weight +
            "</tr>";
    }

    var tableFooter = "</table>";
    document.getElementById("BVtable").innerHTML = tableHeader + tableContent + tableFooter;

    ////query
    document.getElementById("priceHeader").innerHTML = "30000"
    document.getElementById("invB").innerHTML = " -"
    document.getElementById("invH").innerHTML = "0.5"
    document.getElementById("priceH2").innerHTML = "3000"
    document.getElementById("total").innerHTML = " 31500"
    document.getElementById("date").innerHTML = " 22/06/2019"
    document.getElementById("customer").innerHTML = "นาย สมยศ จริงจริง"
}

function getTableInvoice() {

    // var query = location.search.substring(1);
    // var ID_TRN_buy_bill = query.split("%20")
    var id = {
        id: "BYB00010"
    }

      

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "http://localhost:3000/api/buy/invoice/getItem",
        data: JSON.stringify(id),
        dataType: 'json',
        success: function (res) {
            console.log(res.length)


            bill = res[0];
            customer = res[2];
            stock = res[4];

        var vat = parseInt(bill[0].VAT) ;
        var table = {
            ID_TRN_taxlnvoice:"1",
            license_plate:stock[0].license_plate,
            type:stock[0].model,
            color:stock[0].color,
            price:stock[0].price
        }
            var json = []
            json.push(table)
        
            var td = "BVtd"
            var th = "BVth"
            var table = "BVtable"
            var tr = "BVtr"

            var tableHeader = "<table class=" + table + "><tr><th class=" + th + ">ลำดับที่</th ><th class=" + th + ">เลขทะเบียน</th><th class=" + th + ">ประเภทรถ</th><th class=" + th + ">สี</th><th class=" + th + ">ราคา</th></tr>";
            var tableContent = "";

            var pr = 0;
            var  p ;
            for (i = 0; i < json.length; i++) {
                tableContent = tableContent + "<tr class=" + tr + ">"
                    + "<td class=" + td + ">" + json[i].ID_TRN_taxlnvoice +
                    "</td> <td class=" + td + ">" + json[i].license_plate +
                    "</td> <td class=" + td + ">" +json[i].type +
                    "</td> <td class=" + td + ">" + json[i].color +
                    "</td> <td class=" + td + ">  " + json[i].price +
                    "</tr>";
                    
                     p = json[i].price.split(",")
                     var x ="";
                     for(var i=0;i<p.length;i++){
                         x = x + p[i]
                     }
                     pr = parseInt(x);
            
            }
            
        
            var tableFooter = "</table>";
            document.getElementById("BVtable").innerHTML = tableHeader + tableContent + tableFooter;
           
            document.getElementById("priceAll").innerHTML = pr;
            var inv = vat
            document.getElementById("inv").innerHTML = inv;

            var pri = pr + inv
            document.getElementById("priceAddinv").innerHTML = pri;  
        },
        error: function (e) {
            console.log("ERROR: ", e);
        }
    });

}

function insertItemBill() {

}