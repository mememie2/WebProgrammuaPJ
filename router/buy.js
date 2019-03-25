const express = require('express');
const app = express.Router();
var bodyParser = require('body-parser')
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = "mongodb://gigabug:gigabug1234@ds141351.mlab.com:41351/gigabug";
app.use(bodyParser.json());

app.get("/api/buy/invoice/getItem", (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("gigabug");
      
        var id ={
            ID_TRN_buy_contract:req.body.id
        }
      
        console.log(user)
        dbo.collection('TRN_buy_contract').find(id).count((err, result) => {
            if (err) {
                res.sendStatus(404)
            } else {
                console.log(result)
                if (result > 0) {
                
                    res.send('true')


                } else {
                  
                    res.send('false')
                }

            }

        })

    });
})
module.exports = app;