const express = require('express');
const app = express();

app.get('/',function(req,res){
    res.send("Ini adalah Halaman home");
});

app.get('/product',function(req,res){
    res.send("Ini adalah Halaman Produk");
});

app.get('/detailproduct',function(req,res){
    res.send("Ini adalah Halaman Detail Produk Toko Anda");
});

app.listen('8000',function(){
    console.log("Open localhost:8000");
});