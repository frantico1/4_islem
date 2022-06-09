const express = require('express');
const path = require('path');
const server = express();
let veri = require('./sonuclar.js');


server.use(express.json());
server.listen(5000, (req, res) => {
    console.log("5000 portu dinleniyor...");
    
});

server.get('/', (req, res)=> {
    // res.send('<h1>Anasayfa</h1>');
    // res.sendFile(path.join(__filename,'../index.html'));,
    res.status(200).json(veri);

});

server.post('/islemler.js', (req,res) => {
    console.log("Veri gönderme istendi!");
    let sonuc = req.body;
   console.log('req.body',req.body);
   let sayi1 = req.body.sayi1;
   let sayi2 = req.body.sayi2;
   Number(sayi1);
   Number(sayi2);
    
    let toplam = Number(sayi1) + Number(sayi2);
    let fark = sayi1 - sayi2;
    let carpim = sayi1 * sayi2;
    let bolum = sayi1 / sayi2;
    
  // res.send("Sayıların toplamı: "+toplam+"<br>Farkı: "+fark+"<br>Çarpımı: "+carpim+"<br>bolum: "+bolum);
    
    sonuc.toplam = toplam;
    sonuc.fark = fark;
    sonuc.carpim = carpim;
    sonuc.bolum = bolum;

    veri.push(sonuc);
    res.status(201).json(sonuc);

   console.log("Hesaplama başarılı!");
   


});


