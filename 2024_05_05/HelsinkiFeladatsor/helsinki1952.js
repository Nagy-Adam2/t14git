;
/* 2.) feladat */
console.log("2.) feladat:");
function ObjektumFeltolto(feltoltendoElem) {
    var beolvasottAdatok = [];
    for (var i = 0; i < feltoltendoElem.length; i++) {
        var daraboltAdatok = feltoltendoElem[i].split(" ");
        var sportagak = {
            helyezes: Number(daraboltAdatok[0]),
            sportolokSzama: Number(daraboltAdatok[1]),
            sportagNeve: daraboltAdatok[2],
            versenyszamNeve: daraboltAdatok[3]
        };
        beolvasottAdatok.push(sportagak);
    }
    return beolvasottAdatok;
}
var helsinkiAdatok = ObjektumFeltolto(helsinki);
console.log(helsinkiAdatok);
/* 3.) feladat */
// megszámlálás, hogy hány elem van benne vagyis soronként
console.log("3.) feladat:");
function hanyPontszerzoHelyezes(vizsgaltTomb) {
    var pontszerzoHelyezesekSzama = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        pontszerzoHelyezesekSzama++;
    }
    return pontszerzoHelyezesekSzama;
}
console.log("Pontszerző helyezések száma: " + hanyPontszerzoHelyezes(helsinkiAdatok));
/* 4.) feladat */
console.log("4.) feladat:");
function megszerzettErmekSzama(vizsgaltTomb) {
    var aranyErmekSzama = 0;
    var ezustErmekSzama = 0;
    var bronzErmekSzama = 0;
    var osszesErmekSzama = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].helyezes == 1) {
            aranyErmekSzama++;
        }
        if (vizsgaltTomb[i].helyezes == 2) {
            ezustErmekSzama++;
        }
        if (vizsgaltTomb[i].helyezes == 3) {
            bronzErmekSzama++;
        }
    }
    osszesErmekSzama = aranyErmekSzama + ezustErmekSzama + bronzErmekSzama;
    return [aranyErmekSzama, ezustErmekSzama, bronzErmekSzama, osszesErmekSzama];
}
function megszerzettErmekSzamaKiir(osszesErmekSzama) {
    console.log("Arany: " + osszesErmekSzama[0]);
    console.log("Ezüst: " + osszesErmekSzama[1]);
    console.log("Bronz: " + osszesErmekSzama[2]);
    console.log("Összesen: " + osszesErmekSzama[3]);
}
megszerzettErmekSzamaKiir(megszerzettErmekSzama(helsinkiAdatok));
/* 5.) feladat */
function olimpiaiPont(helyezes) {
    if (helyezes == 1) {
        return 7;
    }
    else if (helyezes == 2) {
        return 5;
    }
    else if (helyezes == 3) {
        return 4;
    }
    else if (helyezes == 4) {
        return 3;
    }
    else if (helyezes == 5) {
        return 2;
    }
    else if (helyezes == 6) {
        return 1;
    }
    else {
        return 0;
    }
}
function olimpiaiPontokOsszege(vizsgaltAdatok) {
    var osszPont = 0;
    for (var i = 0; i < vizsgaltAdatok.length; i++) {
        osszPont += olimpiaiPont(vizsgaltAdatok[i].helyezes);
    }
    return osszPont;
}
function olimpiaiPontokOsszegeKiir(kiirandoAdat) {
    console.log("5.) feladat:");
    console.log("Olimpiai pontok száma: " + kiirandoAdat);
}
olimpiaiPontokOsszegeKiir(olimpiaiPontokOsszege(helsinkiAdatok));
/* 6.) feladat */
console.log("6.) feladat:");
function univerzalisEremszamOsszehasonlito(vizsgaltAdatok, elsoSportagNeve, masodikSportagNeve) {
    var sportagEgyMennyiseg = 0;
    var sportagKettoMennyiseg = 0;
    for (var i = 0; i < vizsgaltAdatok.length; i++) {
        if (vizsgaltAdatok[i].sportagNeve == elsoSportagNeve && vizsgaltAdatok[i].helyezes <= 3) {
            sportagEgyMennyiseg++;
        }
        else if (vizsgaltAdatok[i].sportagNeve == masodikSportagNeve && vizsgaltAdatok[i].helyezes <= 3) {
            sportagKettoMennyiseg++;
        }
        else { }
    }
    if (sportagEgyMennyiseg == sportagKettoMennyiseg) {
        return "-";
    }
    else if (sportagEgyMennyiseg > sportagKettoMennyiseg) {
        return elsoSportagNeve;
    }
    else {
        return masodikSportagNeve;
    }
}
function univerzalisEremszamOsszehasonlitoKiir(kiirandoAdat) {
    if (kiirandoAdat == "-") {
        console.log("Egyenlő volt az érmek száma");
    }
    else {
        console.log(kiirandoAdat + " sportágban szereztek több érmet");
    }
}
univerzalisEremszamOsszehasonlitoKiir(univerzalisEremszamOsszehasonlito(helsinkiAdatok, "torna", "uszas"));
univerzalisEremszamOsszehasonlitoKiir(univerzalisEremszamOsszehasonlito(helsinkiAdatok, "vivas", "kerekparozas"));
function kajakKenuJavito(vizsgalandoSzoveg) {
    if (vizsgalandoSzoveg == "kajakkenu") {
        return "kajak-kenu";
    }
    return vizsgalandoSzoveg;
}
function helsinki2Keszito(vizsgaltAdatok) {
    var ujHelsinikiAdat = [];
    for (var i = 0; i < vizsgaltAdatok.length; i++) {
        {
            var ujEredmeny = {
                helyezes: vizsgaltAdatok[i].helyezes,
                sportolokSzama: vizsgaltAdatok[i].sportolokSzama,
                olimpiaiPont: olimpiaiPont(vizsgaltAdatok[i].helyezes),
                sportagNeve: kajakKenuJavito(vizsgaltAdatok[i].sportagNeve),
                versenyszamNeve: vizsgaltAdatok[i].versenyszamNeve
            };
            ujHelsinikiAdat.push(ujEredmeny);
        }
    }
    return ujHelsinikiAdat;
}
function helsinki2Konvertalo(feldolgozandoAdatok) {
    var helsinki2 = [];
    for (var i = 0; i < feldolgozandoAdatok.length; i++) {
        helsinki2.push(feldolgozandoAdatok[i].helyezes + " " + feldolgozandoAdatok[i].sportolokSzama + " " + feldolgozandoAdatok[i].olimpiaiPont + " " + feldolgozandoAdatok[i].sportagNeve + " " + feldolgozandoAdatok[i].versenyszamNeve);
    }
    return helsinki2;
}
function helsinki2KonvertaloKiir(kiirandoAdat) {
    for (var i = 0; i < kiirandoAdat.length; i++) {
        console.log(kiirandoAdat[i]);
    }
}
helsinki2KonvertaloKiir(helsinki2Konvertalo(helsinki2Keszito(helsinkiAdatok)));
/* 8.) feladat */
function legtobbSportolo(vizsgaltAdatok) {
    var legtobbSportoloIndex = 0;
    for (var i = 0; i < vizsgaltAdatok.length; i++) {
        if (vizsgaltAdatok[i].sportolokSzama > vizsgaltAdatok[legtobbSportoloIndex].sportolokSzama) {
            legtobbSportoloIndex = i;
        }
    }
    return legtobbSportoloIndex;
}
function legtobbSportoloKiir(vizsgaltAdatok, csoportIndex) {
    console.log("8.) feladat:");
    console.log("Helyezés: " + vizsgaltAdatok[csoportIndex].helyezes);
    console.log("Sportág: " + vizsgaltAdatok[csoportIndex].sportagNeve);
    console.log("Versenyszám: " + vizsgaltAdatok[csoportIndex].versenyszamNeve);
    console.log("Sportolók száma: " + vizsgaltAdatok[csoportIndex].sportolokSzama);
}
legtobbSportoloKiir(helsinkiAdatok, legtobbSportolo(helsinkiAdatok));
