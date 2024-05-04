;
var csapatAdat = [
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
function ObjektumFeltolto(feltoltendoElem) {
    var beolvasottAdatok = [];
    for (var i = 0; i < feltoltendoElem.length; i++) {
        var objektum = {};
        var daraboltSor = feltoltendoElem[i].split(";");
        objektum.nev = daraboltSor[0];
        objektum.helyezes = Number(daraboltSor[1]);
        objektum.valtozas = Number(daraboltSor[2]);
        objektum.pont = Number(daraboltSor[3]);
        beolvasottAdatok.push(objektum);
    }
    return beolvasottAdatok;
}
var fifaAdatok = ObjektumFeltolto(csapatAdat);
function fifaTablazatGenerator(adatTabla) {
    var tabla = document.querySelector("#fifaTabla");
    for (var i = adatTabla.length - 1; i >= 0; i--) {
        var adatSor = tabla.insertRow(1);
        var orszagNev = adatSor.insertCell(0);
        var helyezes = adatSor.insertCell(1);
        var rangValtozas = adatSor.insertCell(2);
        var pontszam = adatSor.insertCell(3);
        orszagNev.innerHTML = adatTabla[i].nev;
        helyezes.innerHTML = adatTabla[i].helyezes;
        rangValtozas.innerHTML = adatTabla[i].valtozas;
        pontszam.innerHTML = adatTabla[i].pont;
    }
}
fifaTablazatGenerator(fifaAdatok);
//1. feladat - Adja meg aktuálisan hány csapat szerepel a ranglistán
//Eredmény kiszámolása
function CsapatokSzama(vizsgaltTomb) {
    return vizsgaltTomb.length;
}
//Eredmény megjelenítése
function CsapatokSzamaKiir() {
    var csapatokSzama = document.querySelector("#f1");
    var kiirandoErtek = CsapatokSzama(fifaAdatok);
    csapatokSzama.innerHTML = "A ranglistában szereplő csapatok mennyisége: " + kiirandoErtek;
}
//Esemény hozzárendelése
var f1eventGomb = document.querySelector("#f1feladat");
f1eventGomb.addEventListener("click", CsapatokSzamaKiir);
//2. feladat - Írja ki mennyi a résztvevő csapatok átlagpontszáma
//Eredmény kiszámolása
function PontszamokAtlaga(vizsgaltTomb) {
    var osszeg = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        osszeg += vizsgaltTomb[i].pont;
    }
    return Math.round(osszeg / vizsgaltTomb.length);
}
//Eredmény megjelenítése
function PontszamokAtlagaKiir() {
    var pontszamokAtlaga = document.querySelector("#f2");
    var kiirandoErtek = PontszamokAtlaga(fifaAdatok);
    pontszamokAtlaga.innerHTML = "A ranglistán szereplő csapatok átlagos pontszáma: " + kiirandoErtek;
}
//Esemény hozzárendelése
var f2eventGomb = document.querySelector("#f2feladat");
f2eventGomb.addEventListener("click", PontszamokAtlagaKiir);
//3. feladat - Listázza ki azokat a csapatokat, akik az átlagnál több pontot értek el!
//Eredmény kiszámolása
function AtlagFelettiek(vizsgaltTomb) {
    var atlagPont = PontszamokAtlaga(fifaAdatok);
    var atlagFelettiek = [];
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].pont > atlagPont) {
            var aktCsapatInfo = {};
            aktCsapatInfo.neve = vizsgaltTomb[i].nev;
            aktCsapatInfo.helyezese = vizsgaltTomb[i].helyezes;
            aktCsapatInfo.rangja = vizsgaltTomb[i].valtozas;
            aktCsapatInfo.pontja = vizsgaltTomb[i].pont;
            atlagFelettiek.push(aktCsapatInfo);
        }
    }
    return atlagFelettiek;
}
//Eredmény megjelenítése
function AtlagFelettiTablazatGenerator() {
    var atlagFelettiekTabla = AtlagFelettiek(fifaAdatok);
    var tabla = document.querySelector("#atlagTabla");
    for (var i = atlagFelettiekTabla.length - 1; i >= 0; i--) {
        var adatSor = tabla.insertRow(1);
        var orszagNev = adatSor.insertCell(0);
        var helyezes = adatSor.insertCell(1);
        var rangValtozas = adatSor.insertCell(2);
        var pontszam = adatSor.insertCell(3);
        orszagNev.innerHTML = atlagFelettiekTabla[i].neve;
        helyezes.innerHTML = atlagFelettiekTabla[i].helyezese;
        rangValtozas.innerHTML = atlagFelettiekTabla[i].rangja;
        pontszam.innerHTML = atlagFelettiekTabla[i].pontja;
    }
}
//Esemény hozzárendelése
var f3eventGomb = document.querySelector("#f3feladat");
f3eventGomb.addEventListener("click", AtlagFelettiTablazatGenerator);
//4. feladat - Írja ki a legtöbbet javító csapat adatait: Helyezés, CsapatNeve, Pontszáma
//Eredmény kiszámolása
function LegtobbetJavitoIndex(vizsgaltTomb) {
    var kivalasztottCsapatIndex = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].valtozas > vizsgaltTomb[kivalasztottCsapatIndex].valtozas) {
            kivalasztottCsapatIndex = i;
        }
    }
    return kivalasztottCsapatIndex;
}
//Eredmény megjelenítése
function LegtobbetJavitoIndexKiir() {
    var legtobbetJavitoIndex = document.querySelector("#f4");
    var kiirandoErtek = LegtobbetJavitoIndex(fifaAdatok);
    legtobbetJavitoIndex.innerHTML = "A legt\u00F6bbet jav\u00EDt\u00F3 csapat: ".concat(fifaAdatok[kiirandoErtek].helyezes, ". ").concat(fifaAdatok[kiirandoErtek].nev, " (").concat(fifaAdatok[kiirandoErtek].pont, ")");
}
//Esemény hozzárendelése
var f4eventGomb = document.querySelector("#f4feladat");
f4eventGomb.addEventListener("click", LegtobbetJavitoIndexKiir);
//5. feladat -Határozza meg a adatok közöt megtalálható-e Magyarország csapata! 
//Adat kiolvasása
function OrszagNevKiolvas() {
    var _a;
    var orszagNev = (_a = document.querySelector("#orszagNeve")) === null || _a === void 0 ? void 0 : _a.nodeValue;
    return orszagNev;
}
//Eredmény kiszámolása
//Fejlesztési lehetőség: Bármely csapatot megnézni, szerepelt-e a listán
function SzerepelEAdottOrszag(vizsgaltTomb, orszagNeve) {
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].nev == orszagNeve) {
            return true;
        }
    }
    return false;
}
//Eredmény megjelenítése
function SzerepelEAdottOrszagKiir() {
    var keresettOrszag = OrszagNevKiolvas();
    var szerepeltE = SzerepelEAdottOrszag(fifaAdatok, keresettOrszag);
    if (szerepeltE == true) {
        var szerepelEOrszag = document.querySelector("#f5");
        szerepelEOrszag.innerHTML = "".concat(keresettOrszag, " szerepel a fifa ranglist\u00E1n");
    }
    else {
        var szerepelEOrszag = document.querySelector("#f5");
        szerepelEOrszag.innerHTML = "".concat(keresettOrszag, " NEM szerepel a fifa ranglist\u00E1n");
    }
}
//Esemény hozzárendelése
var f5eventGomb = document.querySelector("#f5feladat");
f5eventGomb.addEventListener("click", SzerepelEAdottOrszagKiir);
//6. feladat - Készítsen  statisztikát  a  helyezések  változása  (Valtozas)  alapján  csoportosítva  a  csapatok számáról!
//Eredmény kiszámolása
function ValtozasTipusok(vizsgaltTomb) {
    var valtozasTipusok = [];
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        var szerepelE = false;
        for (var j = 0; j < valtozasTipusok.length; j++) {
            if (vizsgaltTomb[i].valtozas == valtozasTipusok[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            valtozasTipusok.push(vizsgaltTomb[i].valtozas);
        }
    }
    return valtozasTipusok;
}
function ValtozasMennyisegek(vizsgaltTomb, valtozasTipusok) {
    var valtozasMennyisegek = [];
    for (var i = 0; i < valtozasTipusok.length; i++) {
        valtozasMennyisegek.push(0);
    }
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        for (var j = 0; j < valtozasTipusok.length; j++) {
            if (vizsgaltTomb[i].valtozas == valtozasTipusok[j]) {
                valtozasMennyisegek[j]++;
            }
        }
    }
    return valtozasMennyisegek;
}
//Eredmény megjelenítése
function StatitsztikaTablazatGenerator() {
    var valtozasok = ValtozasTipusok(fifaAdatok);
    var valtozasokMennyisege = ValtozasMennyisegek(fifaAdatok, valtozasok);
    var tabla = document.querySelector("#statisztikaTabla");
    for (var i = valtozasok.length - 1; i >= 0; i--) {
        var adatSor = tabla.insertRow(1);
        var valtozasokErtek = adatSor.insertCell(0);
        var valtozasokMennyiseg = adatSor.insertCell(1);
        valtozasokErtek.innerHTML = valtozasok[i];
        valtozasokMennyiseg.innerHTML = valtozasokMennyisege[i];
    }
}
//Esemény hozzárendelése
var f6eventGomb = document.querySelector("#f6feladat");
f6eventGomb.addEventListener("click", StatitsztikaTablazatGenerator);
//NAVIGÁCIÓS SÁV-ot MŰKÖDTETŐ ELEMEK
function feladatMutat(feladatAzonosito) {
    for (var i = 0; i <= 6; i++) {
        if (i != feladatAzonosito) {
            var navigaciotMegjelenit = document.querySelector("#feladatBlokk0".concat(i));
            navigaciotMegjelenit.style.display = "none";
        }
        else {
            var navigaciotMegjelenit = document.querySelector("#feladatBlokk0".concat(i));
            navigaciotMegjelenit.style.display = "block";
        }
    }
}
function F0mutat() {
    feladatMutat(0);
}
var g0event = document.querySelector("#g0");
g0event.addEventListener("click", F0mutat);
function F1mutat() {
    feladatMutat(1);
}
var g1event = document.querySelector("#g1");
g1event.addEventListener("click", F1mutat);
function F2mutat() {
    feladatMutat(2);
}
var g2event = document.querySelector("#g2");
g2event.addEventListener("click", F2mutat);
function F3mutat() {
    feladatMutat(3);
}
var g3event = document.querySelector("#g3");
g3event.addEventListener("click", F3mutat);
function F4mutat() {
    feladatMutat(4);
}
var g4event = document.querySelector("#g4");
g4event.addEventListener("click", F4mutat);
function F5mutat() {
    feladatMutat(5);
}
var g5event = document.querySelector("#g5");
g5event.addEventListener("click", F5mutat);
function F6mutat() {
    feladatMutat(6);
}
var g6event = document.querySelector("#g6");
g6event.addEventListener("click", F6mutat);
