var express = require('express');
var router = express.Router();


const anaSayfa=function(req, res, next) {
  res.render('anasayfa',{
      "baslik":"AnaSayfa",
      "sayfaBaslik":{
        "siteAd":"MekanBul",
        "slogan":"Civardaki Mekanlari Keşfet"
      },
      "mekanlar":[
        {
          "ad":"Starbuks",
          "puan":"3",
          "adres":"Centrum Garden AVM",
          "imkanlar":["Kahve","çay","Kek"],
          "mesafe":"10km"
        },
        {
          "ad":"Barida Kafe",
          "puan":"4",
          "adres":"Sdü Batı Kampüsü",
          "imkanlar":["Kahve","çay","Kek"],
          "mesafe":"1km"
        }
      ]

  });
  };

  const mekanBilgisi = function (req, res, next) {
    res.render("mekanbilgisi", {
      baslik: "Mekan Bilgisi",
      mekanBaslik: "Starbucks",
      mekanDetay: {
        ad: "Starbucks",
        puan: "4",
        adres: "Centrum Garden AVM",
        saatler: [
          {
            gunler: "Pazartesi-Cuma",
            acilis: "9:00",
            kapanis: "23:00",
            kapali: false,
          },
          {
            gunler: "Cumartesi-Pazar",
            acilis: "8:00",
            kapanis: "22:00",
            kapali: false,
          },
        ],
        imkanlar: ["Dünya Kahveleri", "Kekler", "Pastalar"],
        kordinatlar: {
          enlem: 37.78,
          boylam: 30.56,
        },
      "yorumlar":[
        {
          "yorumYapan":"Ali Kalantari",
          "yorumMetni":"Berbaaat",
          "tarih":"20 Ekim 2022",
          "puan":"1"
        },
        {
          "yorumYapan":"Sarvar Musazade",
          "yorumMetni":"Super",
          "tarih":"24 Ekim 2022",
          "puan":"5"
        }
       ],
    }
  });
  };

  const yorumEkle=function(req, res, next) {
    res.render('yorumekle', { title: 'Yorum Ekle' });
  };

  module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle,
  }