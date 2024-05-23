// 2.) fealdat
function ObjektumFeltolto(eredmenyek) {
    var beolvasottAdatok = [];
    for (var i = 0; i < eredmenyek.length; i++) {
        var daraboltAdatok = eredmenyek[i].split(";");
        var aktualisEredmeny = {
            hazai: daraboltAdatok[0],
            idegen: daraboltAdatok[1],
            hazai_pont: Number(daraboltAdatok[2]),
            idegen_pont: Number(daraboltAdatok[3]),
            helyszin: daraboltAdatok[4],
            idopont: daraboltAdatok[5]
        };
        beolvasottAdatok.push(aktualisEredmeny);
    }
    return beolvasottAdatok;
}
var kosarAdatok = ObjektumFeltolto(eredmenyek);
// 3.) feladat
function RealMadridInformacio(kosarAdatok) {
    var hazai = 0;
    var idegen = 0;
    for (var i = 0; i < kosarAdatok.length; i++) {
        if (kosarAdatok[i].hazai == "Real Madrid") {
            hazai++;
        }
        else if (kosarAdatok[i].idegen == "Real Madrid") {
            idegen++;
        }
    }
    return [hazai, idegen];
}
function RealMadridInformacioKiir(eredmenyTuple) {
    console.log("3.feladat: Real Madrid: Hazai: " + eredmenyTuple[0] + ", Idegen: " + eredmenyTuple[1]);
}
RealMadridInformacioKiir(RealMadridInformacio(kosarAdatok));
// 4.) feladat
function VoltEDontetlen(kosarAdatok) {
    for (var i = 0; i < kosarAdatok.length; i++) {
        if (kosarAdatok[i].hazai_pont == kosarAdatok[i].idegen_pont) {
            return true;
        }
    }
    return false;
}
function VoltEDontetlenKiir(eredmeny) {
    if (eredmeny) {
        console.log("4. feladat: Volt döntetlen? igen");
    }
    else {
        console.log("4. feladat: Volt döntetlen? nem");
    }
}
VoltEDontetlenKiir(VoltEDontetlen(kosarAdatok));
// 5.) feladat
function PontosNev(kosarAdatok) {
    var teljesNev = "";
    for (var i = 0; i < kosarAdatok.length; i++) {
        if (kosarAdatok[i].hazai.match("Barcelona")) {
            teljesNev = kosarAdatok[i].hazai;
        }
    }
    return teljesNev;
}
function PontosNevKiir(teljesNev) {
    console.log("5. feladat: barcalonai csapat neve: " + teljesNev);
}
PontosNevKiir(PontosNev(kosarAdatok));
function November2004Csapatai(kosarAdatok) {
    var csapatInformacio = [];
    for (var i = 0; i < kosarAdatok.length; i++) {
        if (kosarAdatok[i].idopont == "2004-11-21") {
            var ujCsapat = {
                hazaiCsapat: kosarAdatok[i].hazai,
                idegenCsapat: kosarAdatok[i].idegen,
                hazaiPont: kosarAdatok[i].hazai_pont,
                idegenPont: kosarAdatok[i].idegen_pont
            };
            csapatInformacio.push(ujCsapat);
        }
    }
    return csapatInformacio;
}
function November2004CsapataiKiir(kiirandoEredmenyek) {
    console.log("6.feladat");
    for (var i = 0; i < kiirandoEredmenyek.length; i++) {
        console.log(kiirandoEredmenyek[i].hazaiCsapat + "-" + kiirandoEredmenyek[i].idegenCsapat + " (" + kiirandoEredmenyek[i].hazaiPont + ":" + kiirandoEredmenyek[i].idegenPont + ")");
    }
}
November2004CsapataiKiir(November2004Csapatai(kosarAdatok));
function StadionStatisztika(kosarAdatok) {
    var statisztikaAdatok = [];
    for (var i = 0; i < kosarAdatok.length; i++) {
        var szerepelE = false;
        var adottIndex = 0;
        for (var j = 0; j < statisztikaAdatok.length; j++) {
            if (kosarAdatok[i].helyszin == statisztikaAdatok[j].stadionNeve) {
                szerepelE = true;
                adottIndex = j;
            }
        }
        if (!szerepelE) {
            var ujStadion = { stadionNeve: kosarAdatok[i].helyszin, merkozesSzam: 1 };
            statisztikaAdatok.push(ujStadion);
        }
        else {
            statisztikaAdatok[adottIndex].merkozesSzam++;
        }
    }
    return statisztikaAdatok;
}
function StadionStatisztikaKiir(kosarAdatok) {
    console.log("7. feladat:");
    for (var i = 0; i < kosarAdatok.length; i++) {
        if (kosarAdatok[i].merkozesSzam > 20) {
            console.log(kosarAdatok[i].stadionNeve + ": " + kosarAdatok[i].merkozesSzam);
        }
    }
}
StadionStatisztikaKiir(StadionStatisztika(kosarAdatok));
