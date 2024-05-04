interface FifaAdat {
    nev: string;
    helyezes: number;
    valtozas: number;
    pont: number
};

const csapatAdat: any[] = [
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

function ObjektumFeltolto(feltoltendoElem: any[]) {
    let beolvasottAdatok: any[] = [];
    for (let i = 0; i < feltoltendoElem.length; i++) {
        let objektum: FifaAdat | any = {};
        let daraboltSor = feltoltendoElem[i].split(";");
        objektum.nev = daraboltSor[0];
        objektum.helyezes = Number(daraboltSor[1]);
        objektum.valtozas = Number(daraboltSor[2]);
        objektum.pont = Number(daraboltSor[3]);
        beolvasottAdatok.push(objektum);
    }
    return beolvasottAdatok;
}

const fifaAdatok = ObjektumFeltolto(csapatAdat);


function fifaTablazatGenerator(adatTabla: any) {
    let tabla: any = document.querySelector("#fifaTabla");
    for (let i = adatTabla.length - 1; i >= 0; i--) {
        var adatSor = tabla.insertRow(1);
        let orszagNev = adatSor.insertCell(0);
        let helyezes = adatSor.insertCell(1);
        let rangValtozas = adatSor.insertCell(2);
        let pontszam = adatSor.insertCell(3);
        orszagNev.innerHTML = adatTabla[i].nev;
        helyezes.innerHTML = adatTabla[i].helyezes;
        rangValtozas.innerHTML = adatTabla[i].valtozas;
        pontszam.innerHTML = adatTabla[i].pont;
    }
}
fifaTablazatGenerator(fifaAdatok);

//1. feladat - Adja meg aktuálisan hány csapat szerepel a ranglistán
//Eredmény kiszámolása
function CsapatokSzama(vizsgaltTomb: any[]) {
    return vizsgaltTomb.length;
}
//Eredmény megjelenítése
function CsapatokSzamaKiir() {
    let csapatokSzama: HTMLElement | any = document.querySelector("#f1");
    let kiirandoErtek = CsapatokSzama(fifaAdatok);
    csapatokSzama.innerHTML = "A ranglistában szereplő csapatok mennyisége: " + kiirandoErtek;
}
//Esemény hozzárendelése
let f1eventGomb: HTMLElement | any = document.querySelector("#f1feladat");
f1eventGomb.addEventListener("click", CsapatokSzamaKiir);




//2. feladat - Írja ki mennyi a résztvevő csapatok átlagpontszáma
//Eredmény kiszámolása
function PontszamokAtlaga(vizsgaltTomb: any[]) {
    let osszeg: number = 0;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        osszeg += vizsgaltTomb[i].pont;
    }
    return Math.round(osszeg / vizsgaltTomb.length);
}
//Eredmény megjelenítése
function PontszamokAtlagaKiir() {
    let pontszamokAtlaga: HTMLElement | any = document.querySelector("#f2");
    let kiirandoErtek = PontszamokAtlaga(fifaAdatok);
    pontszamokAtlaga.innerHTML = "A ranglistán szereplő csapatok átlagos pontszáma: " + kiirandoErtek;
}
//Esemény hozzárendelése
let f2eventGomb: HTMLElement | any = document.querySelector("#f2feladat");
f2eventGomb.addEventListener("click", PontszamokAtlagaKiir);




//3. feladat - Listázza ki azokat a csapatokat, akik az átlagnál több pontot értek el!

//Eredmény kiszámolása
function AtlagFelettiek(vizsgaltTomb: any) {
    let atlagPont: any = PontszamokAtlaga(fifaAdatok);
    let atlagFelettiek: any[] = [];
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].pont > atlagPont) {
            let aktCsapatInfo: FifaAdat | any = {};
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
    let atlagFelettiekTabla: any = AtlagFelettiek(fifaAdatok);
    let tabla: HTMLElement | any = document.querySelector("#atlagTabla");

    for (let i = atlagFelettiekTabla.length - 1; i >= 0; i--) {
        var adatSor = tabla.insertRow(1);
        let orszagNev = adatSor.insertCell(0);
        let helyezes = adatSor.insertCell(1);
        let rangValtozas = adatSor.insertCell(2);
        let pontszam = adatSor.insertCell(3);
        orszagNev.innerHTML = atlagFelettiekTabla[i].neve;
        helyezes.innerHTML = atlagFelettiekTabla[i].helyezese;
        rangValtozas.innerHTML = atlagFelettiekTabla[i].rangja;
        pontszam.innerHTML = atlagFelettiekTabla[i].pontja;
    }
}
//Esemény hozzárendelése
let f3eventGomb: HTMLElement | any = document.querySelector("#f3feladat");
f3eventGomb.addEventListener("click", AtlagFelettiTablazatGenerator);




//4. feladat - Írja ki a legtöbbet javító csapat adatait: Helyezés, CsapatNeve, Pontszáma
//Eredmény kiszámolása

function LegtobbetJavitoIndex(vizsgaltTomb: any) {
    let kivalasztottCsapatIndex: number = 0;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].valtozas > vizsgaltTomb[kivalasztottCsapatIndex].valtozas) {
            kivalasztottCsapatIndex = i;
        }
    }
    return kivalasztottCsapatIndex;
}
//Eredmény megjelenítése
function LegtobbetJavitoIndexKiir() {
    let legtobbetJavitoIndex: HTMLElement | any = document.querySelector("#f4");
    let kiirandoErtek: any = LegtobbetJavitoIndex(fifaAdatok);
    legtobbetJavitoIndex.innerHTML = `A legtöbbet javító csapat: ${fifaAdatok[kiirandoErtek].helyezes}. ${fifaAdatok[kiirandoErtek].nev} (${fifaAdatok[kiirandoErtek].pont})`;
}
//Esemény hozzárendelése
let f4eventGomb: HTMLElement | any  = document.querySelector("#f4feladat");
f4eventGomb.addEventListener("click", LegtobbetJavitoIndexKiir);

//5. feladat -Határozza meg a adatok közöt megtalálható-e Magyarország csapata! 

//Adat kiolvasása
function OrszagNevKiolvas() {
    let orszagNev: HTMLInputElement | any = document.querySelector("#orszagNeve")?.nodeValue;
    return orszagNev;
}

//Eredmény kiszámolása
//Fejlesztési lehetőség: Bármely csapatot megnézni, szerepelt-e a listán
function SzerepelEAdottOrszag(vizsgaltTomb: any, orszagNeve: any) {
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].nev == orszagNeve) {
            return true;
        }
    }
    return false;
}

//Eredmény megjelenítése
function SzerepelEAdottOrszagKiir() {
    let keresettOrszag: any = OrszagNevKiolvas();
    let szerepeltE: any = SzerepelEAdottOrszag(fifaAdatok, keresettOrszag);
    if (szerepeltE == true) {
        let szerepelEOrszag: HTMLElement | any = document.querySelector("#f5");
        szerepelEOrszag.innerHTML = `${keresettOrszag} szerepel a fifa ranglistán`;
    }
    else {
        let szerepelEOrszag: HTMLElement | any = document.querySelector("#f5");
        szerepelEOrszag.innerHTML = `${keresettOrszag} NEM szerepel a fifa ranglistán`;
    }
}

//Esemény hozzárendelése
let f5eventGomb: HTMLElement | any = document.querySelector("#f5feladat");
f5eventGomb.addEventListener("click", SzerepelEAdottOrszagKiir);


//6. feladat - Készítsen  statisztikát  a  helyezések  változása  (Valtozas)  alapján  csoportosítva  a  csapatok számáról!

//Eredmény kiszámolása
function ValtozasTipusok(vizsgaltTomb: any[]) {
    let valtozasTipusok: any[] = [];
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        let szerepelE: boolean = false;
        for (let j = 0; j < valtozasTipusok.length; j++) {
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
function ValtozasMennyisegek(vizsgaltTomb: any[], valtozasTipusok: any[]) {
    let valtozasMennyisegek: any[] = [];
    for (let i = 0; i < valtozasTipusok.length; i++) {
        valtozasMennyisegek.push(0);
    }
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        for (let j = 0; j < valtozasTipusok.length; j++) {
            if (vizsgaltTomb[i].valtozas == valtozasTipusok[j]) {
                valtozasMennyisegek[j]++;
            }
        }
    }
    return valtozasMennyisegek;
}


//Eredmény megjelenítése
function StatitsztikaTablazatGenerator() {
    let valtozasok: any = ValtozasTipusok(fifaAdatok);
    let valtozasokMennyisege: any = ValtozasMennyisegek(fifaAdatok, valtozasok);

    let tabla: HTMLElement | any = document.querySelector("#statisztikaTabla");

    for (let i = valtozasok.length - 1; i >= 0; i--) {
        var adatSor = tabla.insertRow(1);
        let valtozasokErtek = adatSor.insertCell(0);
        let valtozasokMennyiseg = adatSor.insertCell(1);
        valtozasokErtek.innerHTML = valtozasok[i];
        valtozasokMennyiseg.innerHTML = valtozasokMennyisege[i];
    }
}

//Esemény hozzárendelése
let f6eventGomb: HTMLElement | any = document.querySelector("#f6feladat");
f6eventGomb.addEventListener("click", StatitsztikaTablazatGenerator);


//NAVIGÁCIÓS SÁV-ot MŰKÖDTETŐ ELEMEK

function feladatMutat(feladatAzonosito: any) {
    for (let i = 0; i <= 6; i++) {
        if (i != feladatAzonosito) {
            let navigaciotMegjelenit: HTMLElement | any = document.querySelector(`#feladatBlokk0${i}`);
            navigaciotMegjelenit.style.display = "none";
        }
        else {
            let navigaciotMegjelenit: HTMLElement | any = document.querySelector(`#feladatBlokk0${i}`);
            navigaciotMegjelenit.style.display = "block";
        }
    }
}
function F0mutat() {
    feladatMutat(0);
}
let g0event: HTMLElement | any = document.querySelector("#g0");
g0event.addEventListener("click", F0mutat);


function F1mutat() {
    feladatMutat(1);
}
let g1event: HTMLElement | any = document.querySelector("#g1");
g1event.addEventListener("click", F1mutat);


function F2mutat() {
    feladatMutat(2);
}
let g2event: HTMLElement | any = document.querySelector("#g2");
g2event.addEventListener("click", F2mutat);

function F3mutat() {
    feladatMutat(3);
}
let g3event: HTMLElement | any = document.querySelector("#g3");
g3event.addEventListener("click", F3mutat);

function F4mutat() {
    feladatMutat(4);
}
let g4event: HTMLElement | any = document.querySelector("#g4");
g4event.addEventListener("click", F4mutat);

function F5mutat() {
    feladatMutat(5);
}
let g5event: HTMLElement | any = document.querySelector("#g5");
g5event.addEventListener("click", F5mutat);

function F6mutat() {
    feladatMutat(6);
}
let g6event: HTMLElement | any = document.querySelector("#g6");
g6event.addEventListener("click", F6mutat);