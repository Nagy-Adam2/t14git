//1. érték: Csapat neve (nev)
//2. érték: Csapat helyezése (helyezes)
//3. érték: Csapat helyének változása (valtozas)
//4. érték: Csapat Pontszama (pont)

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
];
    
    
    

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

function csapatokSzama(csapatAdatObjektum) {
    return csapatAdatObjektum.length;
}

function csapatokSzamaKiir() {
    let csapatSzam = csapatokSzama(csapatAdatObjektum);
    document.querySelector("#f1").innerHTML = "A ranglistán szereplő csapatok száma: " + csapatSzam;
}

let f1eventGomb = document.querySelector("#f1feladat");
f1eventGomb.addEventListener("click", csapatokSzamaKiir);




// 2. feladat

function pontszamokAtlaga(csapatAdatObjektum) {
    let osszeg = 0;
    for(let i = 0; i < csapatAdatObjektum.length; i++){
        osszeg += csapatAdatObjektum[i].csapatokPontjai;
    }
    return parseInt(osszeg / csapatAdatObjektum.length);
}

function pontszamokAtlagaKiir() {
    atlagPontszam = pontszamokAtlaga(csapatAdatObjektum);
    document.querySelector("#f2").innerHTML = "A ranglistában szereplő csapatok átlagos pontszáma: " + atlagPontszam;
}

let f2eventGomb = document.querySelector("#f2feladat");
f2eventGomb.addEventListener("click", pontszamokAtlagaKiir);




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

function atlagFelettiekListKiir() {
    let atlagFelettiekList = atlagFelettiek(csapatAdatObjektum);
    let atlagFelettiekListTarolo = "";
    for(let i = 0; i < atlagFelettiekList.length; i++){
        atlagFelettiekListTarolo += `<li>${atlagFelettiekList[i]}</li>`;
    }
    document.querySelector("#f3l").innerHTML = "<ul> <p>Átlag feletti pontszámos csapatok:</p>" +
    atlagFelettiekListTarolo + "</ul>";
}

let f3leventGomb = document.querySelector("#f3feladatlist");
f3leventGomb.addEventListener("click", atlagFelettiekListKiir);




// Fejlesztési lehetőség

function atlagFelettiekTableKiir() {
    let atlagFelettiekTable = atlagFelettiek(csapatAdatObjektum);
    let atlagFelettiekTableTarolo = "";
    for(let i = 0; i < atlagFelettiekTable.length; i++){
        atlagFelettiekTableTarolo += `<tr><td>${atlagFelettiekTable[i]}</td></tr>`;
    }
    document.querySelector("#f3t").innerHTML = "<table class='table table-dark table-striped table-bordered table-sm' <caption>Átlag feletti pontszámos csapatok:</caption>" +
    atlagFelettiekTableTarolo + "</table>"
}

let f3teventGomb = document.querySelector("#f3feladattable");
f3teventGomb.addEventListener("click", atlagFelettiekTableKiir);




// 4. feladat

function legtobbetJavitoIndex(csapatAdatObjektum) {
    let kivalasztottCsapatIndex = 0;
    for(let i = 0; i < csapatAdatObjektum.length; i++){
        if(csapatAdatObjektum[i].csapatokValtozasai > csapatAdatObjektum[kivalasztottCsapatIndex].csapatokValtozasai){
            kivalasztottCsapatIndex = i;
        }
    }
    return kivalasztottCsapatIndex;
}

function legtobbetJavitoIndexKiir(){
    let kivalasztottCsapatIndex = legtobbetJavitoIndex(csapatAdatObjektum);
    document.querySelector("#f4").innerHTML = "A legtöbbet javító csapat neve: " + csapatAdatObjektum[kivalasztottCsapatIndex].csapatokNevei +
    "<br /> A legtöbbet javító csapat helyezése: " + csapatAdatObjektum[kivalasztottCsapatIndex].csapatokHelyezesei +
    "<br /> A legtöbbet javító csapat változása: " + csapatAdatObjektum[kivalasztottCsapatIndex].csapatokValtozasai +
    "<br /> A legtöbbet javító csapat pontszáma: " + csapatAdatObjektum[kivalasztottCsapatIndex].csapatokPontjai;
}

let f4eventGomb = document.querySelector("#f4feladat");
f4eventGomb.addEventListener("click", legtobbetJavitoIndexKiir);




// 5. feladat

function szerepelEMagyarorszag(csapatAdatObjektum) {
    for(let i = 0; i < csapatAdatObjektum.length; i++){
        if(csapatAdatObjektum[i].csapatokNevei == "Magyarország") {
            return true;
        }
    }
    return false;
}

function szerepelEMagyarorszagKiir() {
    let szerepelEMagyarorszagMegj = szerepelEMagyarorszag(csapatAdatObjektum);
    if(szerepelEMagyarorszagMegj == true){
        document.querySelector("#f5").innerHTML = "Az országok között szerepel Magyarország";
    }
    else{
        document.querySelector("#f5").innerHTML = "Az országok között NEM szerepel Magyarország";
    }
}

let f5eventGomb = document.querySelector("#f5feladat");
f5eventGomb.addEventListener("click", szerepelEMagyarorszagKiir);




// Fejlesztési lehetőség

function NevKiolvaso() {
    let orszagNev = document.querySelector("#orszagNeve").value;
    return orszagNev;
}

function szerepelEBarmelyikOrszag(csapatAdatObjektum, orszagNeve) {
    for(let i = 0; i < csapatAdatObjektum.length; i++){
        if(csapatAdatObjektum[i].csapatokNevei == orszagNeve){
            return true;
        }
    }
    return false;
}

function szerepelEBarmelyikOrszagKiir() {
    let adottorszagNeve = NevKiolvaso();
    let barmelyikOrszagSzerepelE = szerepelEBarmelyikOrszag(csapatAdatObjektum, adottorszagNeve);
    if(barmelyikOrszagSzerepelE == true){
        document.querySelector("#f5b").innerHTML = "Az országok között szerepel " + adottorszagNeve;
    }
    else{
        document.querySelector("#f5b").innerHTML = "Az országok között NEM szerepel " + adottorszagNeve;
    }
}

let f5beventGomb = document.querySelector("#f5feladatbarmi");
f5beventGomb.addEventListener("click", szerepelEBarmelyikOrszagKiir);




// 6. feladat

function csapatokValtozasTipusok(csapatAdatObjektum){
    let valtozasTipusok = [];
    for(let i = 0; i < csapatAdatObjektum.length; i++){
        let szerepelE = false;
        for(let j = 0; j < valtozasTipusok.length; j++){
        if(csapatAdatObjektum[i].csapatokValtozasai == valtozasTipusok[j]) {
            szerepelE = true;
            }
        }
        if(szerepelE == false){
        valtozasTipusok.push(csapatAdatObjektum[i].csapatokValtozasai);
        }
    }
    return valtozasTipusok;
}

function csapatokHelyezesenekValtozasai(csapatAdatObjektum) {
    let csapatokValtozasTipusokMegj = csapatokValtozasTipusok(csapatAdatObjektum);
    let valtozasMennyisegek = [];
    let valtozasMennyisegekTarolo = [];
    for(let i = 0; i < csapatokValtozasTipusokMegj.length; i++){
        valtozasMennyisegek.push(0);
    }
    for(let i = 0;i < csapatAdatObjektum.length; i++){
        for(let j = 0; j < csapatokValtozasTipusokMegj.length; j++){
            if(csapatAdatObjektum[i].csapatokValtozasai == csapatokValtozasTipusokMegj[j]) {
                valtozasMennyisegek[j]++;
            }
        }
    }
    for(let i = 0; i < csapatokValtozasTipusokMegj.length; i++){
        if(valtozasMennyisegek[i] > 1){
        valtozasMennyisegek[i] = " " + valtozasMennyisegek[i];
        valtozasMennyisegekTarolo += valtozasMennyisegek[i];
        }
    }
    return valtozasMennyisegekTarolo;
}

function csapatokHelyezesenekValtozasaiListaKiir() {
    let csapatokValtozasMegj = csapatokHelyezesenekValtozasai(csapatAdatObjektum);
    let csapatokValtozasListaTarolo = "";
    for(let i = 0; i < csapatokValtozasMegj.length; i++){
        if(csapatokValtozasMegj[i] > 1) {
            csapatokValtozasListaTarolo += `<li>${csapatokValtozasMegj[i]}</li>`;
        }
    }
    document.querySelector("#f6l").innerHTML = "<ul>" +
    csapatokValtozasListaTarolo + "</ul>";
}

let f6leventGomb = document.querySelector("#f6feladatlist");
f6leventGomb.addEventListener("click", csapatokHelyezesenekValtozasaiListaKiir);
  
  


// Fejlesztési lehetőség

function statisztikaKiirTablazat() {
    let csapatokValtozasTipusokMegj = csapatokValtozasTipusok(csapatAdatObjektum);
    let csapatokValtozasMegj = csapatokHelyezesenekValtozasai(csapatAdatObjektum);
    let csapatokValtozasListaTarolo = "";
    for(let i = 0; i < csapatokValtozasTipusokMegj.length; i++){
      if(csapatokValtozasMegj[i] > 1){
            csapatokValtozasListaTarolo += `<tr><td>${csapatokValtozasTipusokMegj[i]}</td><td>${csapatokValtozasMegj[i]}</td></tr>`;
        }
    }
    document.querySelector("#f6t").innerHTML = "<tr><th>Változás</th><th>Mennyisége</th></tr>" +
    csapatokValtozasListaTarolo;
}

let f6teventGomb = document.querySelector("#f6feladattable");
f6teventGomb.addEventListener("click",  statisztikaKiirTablazat);