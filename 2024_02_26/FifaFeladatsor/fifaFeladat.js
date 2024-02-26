const csapatAdat = [
    "Anglia;4;0;1662", 
    "Argentína;10;0;1614", 
    "Belgium;1;0;1752", 
    "Brazília;3;-1;1719", 
    "Chile;17;-3;1576", 
    "Dánia;14;-1;1584", 
    "Franciaország;2;1;1725", 
    "Hollandia;13;3;1586", 
    "Horvátország;8;-1;1625", 
    "Kolumbia;9;-1;1622", 
    "Mexikó;12;0;1603", 
    "Németország;16;-1;1580", 
    "Olaszország;15;1;1583", 
    "Peru;19;0;1551", 
    "Portugália;5;1;1643", 
    "Spanyolország;7;2;1631", 
    "Svájc;11;0;1604", 
    "Svédország;18;0;1560", 
    "Szenegál;20;0;1546", 
    "Uruguay;6;-1;1639"
    ]
    
    
    
    //0. feladat
    
    function csapatAdatObjektumban(csapatAdat) {
        let beolvasottAdatok = [];
        for(let i = 0; i < csapatAdat.length; i++){
            let objektum={};
            let daraboltSor = csapatAdat[i].split(";");
            objektum.csapatokNevei = daraboltSor[0];
            objektum.csapatokHelyezesei = Number(daraboltSor[1]);
            objektum.csapatokValtozasai = Number(daraboltSor[2]);
            objektum.csapatokPontjai = Number(daraboltSor[3]);
            beolvasottAdatok.push(objektum);
        }
        return beolvasottAdatok;
    }
    
    let csapatAdatObjektum = csapatAdatObjektumban(csapatAdat);
    
    
    
    // 1. feladat
    
    function csapatokSzama(csapatAdatObjektum){
        return csapatAdatObjektum.length;
    }
    
    function csapatokSzamaKiir(kiirandoErtek){
        return "A ranglistán szereplő csapatok száma: " + kiirandoErtek + " db <hr />";
    }
    
    let csapatokSzamaKiirEredmeny = csapatokSzamaKiir(csapatokSzama(csapatAdatObjektum));
    document.write(csapatokSzamaKiirEredmeny);
    
    
    
    // 2. feladat
    
    function pontszamokAtlaga(csapatAdatObjektum){
        let osszeg = 0;
        for(let i = 0; i < csapatAdatObjektum.length; i++){
            osszeg += csapatAdatObjektum[i].csapatokPontjai;
        }
        return parseInt(osszeg / csapatAdatObjektum.length);
    }
    
    function pontszamokAtlagaKiir(kiirandoErtek){
        return "A ranglistában szereplő csapatok átlagos pontszáma: " + kiirandoErtek;
    }
    
    let pontszamokAtlagaKiirEredmeny = pontszamokAtlagaKiir(pontszamokAtlaga(csapatAdatObjektum));
    document.write(pontszamokAtlagaKiirEredmeny + "<hr />");
    
    
    
    // 3. feladat
    
    function atlagFelettiek(csapatAdatObjektum) {
        let atlagPont = pontszamokAtlaga(csapatAdatObjektum);
        let atlagFelettiek = [];
        for(let i = 0; i < csapatAdatObjektum.length; i++){
            if(csapatAdatObjektum[i].csapatokPontjai > atlagPont){
                atlagFelettiek.push(" " + csapatAdatObjektum[i].csapatokNevei);
            }
        }
        return atlagFelettiek;
    }
    let atlagFelettiekEredmeny = atlagFelettiek(csapatAdatObjektum);
    document.write(atlagFelettiekEredmeny + "<hr />");
    
    

    // Fejlesztési lehetőség
    
    function atlagFelettiekKiir(csapatAdatObjektum){
        document.write("<table border='1' <caption>Átlag feletti pontszámos csapatok</caption>");
        for(let i = 0; i < csapatAdatObjektum.length; i++){
            document.write(`<tr><td>${csapatAdatObjektum[i]}</td></tr>`);
        }
        document.write("</table>");
    }
    atlagFelettiekKiir(atlagFelettiek(csapatAdatObjektum));
    document.write("<hr />")
    
    
    
    // 4. feladat
    
    function legtobbetJavitoIndex(csapatAdatObjektum){
        let kivalasztottCsapatIndex = 0;
        for(let i = 0; i < csapatAdatObjektum.length; i++){
            if(csapatAdatObjektum[i].csapatokValtozasai > csapatAdatObjektum[kivalasztottCsapatIndex].csapatokValtozasai){
                kivalasztottCsapatIndex = i;
            }
        }
        return kivalasztottCsapatIndex;
    }
    
    function legtobbetJavitoIndexKiir(kivalasztottCsapatIndex){
        return "A legtöbbet javító csapat neve: " + csapatAdatObjektum[kivalasztottCsapatIndex].csapatokNevei +
        "<br /> A legtöbbet javító csapat helyezése: " + csapatAdatObjektum[kivalasztottCsapatIndex].csapatokHelyezesei +
        "<br /> A legtöbbet javító csapat változása: " + csapatAdatObjektum[kivalasztottCsapatIndex].csapatokValtozasai +
        "<br /> A legtöbbet javító csapat pontszáma: " + csapatAdatObjektum[kivalasztottCsapatIndex].csapatokPontjai;
    }
    let legtobbetJavitoIndexKiirEredmeny = legtobbetJavitoIndexKiir(legtobbetJavitoIndex(csapatAdatObjektum));
    document.write(legtobbetJavitoIndexKiirEredmeny + "<hr />");
    
    
    
    // 5. feladat
    
    function szerepelEMagyarorszag(csapatAdatObjektum) {
        for(let i = 0; i < csapatAdatObjektum.length; i++){
            if(csapatAdatObjektum[i].csapatokNevei == "Magyarország") {
                return true;
            }
        }
        return false;
    }
    
    function szerepelEMagyarorszagKiir(vizsgalatEredmenye){
        if(vizsgalatEredmenye == true){
            return "Az országok között szerepel Magyarország";
        }
        else{
            return "Az országok között NEM szerepel Magyarország";
        }
    }
    let szerepelEMagyarorszagKiirEredmeny = szerepelEMagyarorszagKiir(szerepelEMagyarorszag(csapatAdatObjektum));
    document.write(szerepelEMagyarorszagKiirEredmeny + "<hr />")
    
    
    
    // Fejlesztési lehetőség
    
    function szerepelEAdottOrszag(csapatAdatObjektum, orszagNeve){
        for(let i = 0; i < csapatAdatObjektum.length; i++){
            if(csapatAdatObjektum[i].csapatokNevei == orszagNeve) {
                return true;
            }
        }
        return false;
    }
    
    function szerepelEAdottOrszagKiir(csapatAdatObjektum, orszagNeve){
        if(csapatAdatObjektum == true){
            return `Az ${orszagNeve} szerepel a fifa ranglistán`;
        }
        else{
            return `Az ${orszagNeve} NEM szerepel a fifa ranglistán`;
        }
    }
    let szerepelEAdottOrszagKiirEredmeny = szerepelEAdottOrszagKiir(szerepelEAdottOrszag(csapatAdatObjektum, "Franciaország"), "Franciaország");
    document.write(szerepelEAdottOrszagKiirEredmeny + "<br />");
    let szerepelEAdottOrszagKiirEtiopiaEredmeny = szerepelEAdottOrszagKiir(szerepelEAdottOrszag(csapatAdatObjektum, "Etiópia"), "Etiópia");
    document.write(szerepelEAdottOrszagKiirEtiopiaEredmeny + "<hr />");
    
    

    // 6. feladat
    
    function csapatokValtozasTipusok(csapatAdatObjektum){
      let valtozasTipusok = [];
        for(let i = 0; i < csapatAdatObjektum.length; i++){
          let szerepelE=false;
            for(let j = 0; j < valtozasTipusok.length; j++){
              if(csapatAdatObjektum[i].csapatokValtozasai == valtozasTipusok[j]) {
                  szerepelE=true;
                }
            }
            if(szerepelE == false){
              valtozasTipusok.push(csapatAdatObjektum[i].csapatokValtozasai);
            }
        }
        return valtozasTipusok;
    }
    function csapatokHelyezesenekValtozasai(csapatAdatObjektum, valtozasTipusok) {
      let valtozasMennyisegek = [];
      let valtozasMennyisegekTarolo = [];
      for(let i = 0; i < valtozasTipusok.length; i++){
        valtozasMennyisegek.push(0);
      }
      for(let i = 0;i < csapatAdatObjektum.length; i++){
          for(let j = 0; j < valtozasTipusok.length; j++){
            if(csapatAdatObjektum[i].csapatokValtozasai == valtozasTipusok[j]) {
                valtozasMennyisegek[j]++;
              }
          }
      }
      for(let i = 0; i < valtozasTipusok.length; i++){
        if(valtozasMennyisegek[i] > 1){
          valtozasMennyisegek[i] = " " + valtozasMennyisegek[i];
          valtozasMennyisegekTarolo += valtozasMennyisegek[i];
        }
      }
      return valtozasMennyisegekTarolo;
    }
    
    let csapatokValtozasTipusokEredmeny = csapatokValtozasTipusok(csapatAdatObjektum)
    let csapatokHelyezesenekValtozasaiEredmeny = csapatokHelyezesenekValtozasai(csapatAdatObjektum, csapatokValtozasTipusokEredmeny);
    document.write(csapatokHelyezesenekValtozasaiEredmeny + "<hr />");
    


    // Fejlesztési lehetőség

    function statisztikaKiirTablazat(valtozasok, mennyisegek) {
      document.write("<table border='1' <caption>Statisztika</caption>");
      document.write("<tr><th>Változás</th><th>Mennyisége</th></tr>");
      for(let i = 0; i < valtozasok.length; i++){
        if(mennyisegek[i] > 1){
            document.write(`<tr><td>${valtozasok[i]}</td><td>${mennyisegek[i]}</td></tr>`);
          }
      }
      document.write("</table>");
    }

    statisztikaKiirTablazat(csapatokValtozasTipusokEredmeny, csapatokHelyezesenekValtozasaiEredmeny);