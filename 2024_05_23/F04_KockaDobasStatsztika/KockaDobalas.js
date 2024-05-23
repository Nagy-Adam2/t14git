var dobasok = [];

function KockaDobas() {
    return Math.round(Math.random() * 5) + 1;//1 és 6 közötti dobás érték
}

function TobbKockaDobas(dobasokMennyisege) {
    let tobbDobas = [];
    for (let i = 0; i < dobasokMennyisege; i++) {
        tobbDobas.push(KockaDobas());
    }
    return tobbDobas;
}

kockaEldobasa.addEventListener("click", () => { KockaMegjelenites(3) });

function KockaMegjelenites(dobasokMennyisege) {
    let megtortentDobasok = TobbKockaDobas(dobasokMennyisege);
    for (let i = 0; i < megtortentDobasok.length; i++) {
        dobasok.push(megtortentDobasok[i]);

    }
    document.querySelector("#kockaKep01").style.backgroundImage = "url(img/" + megtortentDobasok[0] + ".png)";

    document.querySelector("#kockaKep02").style.backgroundImage = "url(img/" + megtortentDobasok[1] + ".png)";

    document.querySelector("#kockaKep03").style.backgroundImage = "url(img/" + megtortentDobasok[2] + ".png)";

    DobasElofordulasok(AktDobasOsszege(megtortentDobasok));

    //TRIPLA DOBÁS FELADATOK:
    MaxDobas(megtortentDobasok);
    HatosDobas(megtortentDobasok);
    TriplaHatos(megtortentDobasok);
    Egyformak(megtortentDobasok);
    Kulombozok(megtortentDobasok);
    LegkevesebbszerElofordulo(dobasOsszegekMennyisege);
    LegtobbszorElofordulo(dobasOsszegekMennyisege);
    KettesElofordulasok(megtortentDobasok)
    NegyesElofordulasok(megtortentDobasok)
    HatosElofordulasok(megtortentDobasok)
    ParatlantSzamHanyszor(megtortentDobasok);
    Sorozat(megtortentDobasok);

}
function DobasokSzama() {
    let dobasMennyiseg = [0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < dobasok.length; i++) {
        dobasMennyiseg[dobasok[i]]++;//Ha találok egy adott dobást, annak indexét növelem eggyel...
        dobasMennyiseg[0] += dobasok[i];
    }
    return dobasMennyiseg;
}

function AtlagSzamitas(eredmenyek) {
    return eredmenyek[0] / dobasok.length;
}

function StatisztikaKiir(eredmenyek) {
    document.querySelector("#egyes").innerHTML = eredmenyek[1];
    document.querySelector("#kettes").innerHTML = eredmenyek[2];
    document.querySelector("#harmas").innerHTML = eredmenyek[3];
    document.querySelector("#negyes").innerHTML = eredmenyek[4];
    document.querySelector("#otos").innerHTML = eredmenyek[5];
    document.querySelector("#hatos").innerHTML = eredmenyek[6];
    document.querySelector("#dobasMennyiseg").innerHTML = dobasok.length;
    document.querySelector("#osszesen").innerHTML = eredmenyek[0];
    document.querySelector("#atlag").innerHTML = AtlagSzamitas(eredmenyek).toFixed(2);
}

kockaEldobasa.addEventListener("click", () => { StatisztikaKiir(DobasokSzama()) });

//FELADATOK TRIPLA DOBÁSRA:
function MaxDobas(aktDobasok) {
    let aktDobasOsszege = aktDobasok[0] + aktDobasok[1] + aktDobasok[2];
    let eddigiLegnagyobb = document.querySelector("#legnagyobb").innerHTML;
    if (aktDobasOsszege > eddigiLegnagyobb) {
        document.querySelector("#legnagyobb").innerHTML = aktDobasOsszege;
    }

}

function HatosDobas(aktDobasok) {
    for (let i = 0; i < aktDobasok.length; i++) {
        if (aktDobasok[i] == 6) {
            let aktMennyiseg = document.querySelector("#hatosok").innerHTML;//Kiolvasom
            aktMennyiseg++;//Növelem 
            document.querySelector("#hatosok").innerHTML = aktMennyiseg;//Visszaírom
        }
    }
}

function TriplaHatos(aktDobasok) {
    if (aktDobasok[0] == 6 && aktDobasok[1] == 6 && aktDobasok[2] == 6) {
        document.querySelector("#triplaHat").innerHTML = "Volt";
    }
}

function Egyformak(aktDobasok) {
    if (aktDobasok[0] == aktDobasok[1] && aktDobasok[1] == aktDobasok[2]) {
        let aktMennyiseg = document.querySelector("#egyformak").innerHTML;//Kiolvasom
        aktMennyiseg++;//Növelem 
        document.querySelector("#egyformak").innerHTML = aktMennyiseg;//Visszaírom
    }
}

function Kulombozok(aktDobasok) {
    if (aktDobasok[0] != aktDobasok[1] && aktDobasok[1] != aktDobasok[2]) {
        let aktMennyiseg = document.querySelector("#kulombozok").innerHTML;
        aktMennyiseg++;
        document.querySelector("#kulombozok").innerHTML = aktMennyiseg;
    }
}


let dobasOsszegekMennyisege = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


function AktDobasOsszege(aktDobasok) {
    return aktDobasok[0] + aktDobasok[1] + aktDobasok[2];
}


function DobasElofordulasok(aktDobasOsszege) {
    dobasOsszegekMennyisege[aktDobasOsszege]++;
}


function LegkevesebbszerElofordulo(osszesDobas) {
    let legkisebbDobasMennyisegek = [];
    let legkisebbDobasMennyiseg = 0;
    for (let i = 3; i < osszesDobas.length; i++) {
        if (osszesDobas[i] < osszesDobas[legkisebbDobasMennyiseg]) {
            legkisebbDobasMennyiseg = i;
            legkisebbDobasMennyisegek = [];
            legkisebbDobasMennyisegek.push(i);
        }
        else if (osszesDobas[i] == osszesDobas[legkisebbDobasMennyiseg]) {
            legkisebbDobasMennyisegek.push(i);
        }
    }
    document.querySelector("#legkevesebbszer").innerHTML = legkisebbDobasMennyisegek;
}


function LegtobbszorElofordulo(osszesDobas) {
    let legnagyobbDobasMennyisegek = [];
    let legnagyobbDobasMennyiseg = 0;
    for (let i = 3; i < osszesDobas.length; i++) {
        if (osszesDobas[i] > osszesDobas[legnagyobbDobasMennyiseg]) {
            legnagyobbDobasMennyiseg = i;
            legnagyobbDobasMennyisegek = [];
            legnagyobbDobasMennyisegek.push(i);
        }
        else if (osszesDobas[i] == osszesDobas[legnagyobbDobasMennyiseg]) {
            legnagyobbDobasMennyisegek.push(i);
        }
    }
    document.querySelector("#legtobbszor").innerHTML = legnagyobbDobasMennyisegek;
}


function KettesElofordulasok(aktDobasok) {
    let dobasMennyiseg = 0;
    for (let i = 0; i < aktDobasok.length; i++) {
        if (aktDobasok[i] == 2) {
            dobasMennyiseg++;
        }
    }
    document.querySelector("#kettesElofordulas").innerHTML = ((dobasMennyiseg / aktDobasok.length) * 100).toFixed(2) + "%";
}


function NegyesElofordulasok(aktDobasok) {
    let dobasMennyiseg = 0;
    for (let i = 0; i < aktDobasok.length; i++) {
        if (aktDobasok[i] == 4) {
            dobasMennyiseg++;
        }
    }
    document.querySelector("#negyesElofordulas").innerHTML = ((dobasMennyiseg / aktDobasok.length) * 100).toFixed(2) + "%";
}


function HatosElofordulasok(aktDobasok) {
    let dobasMennyiseg = 0;
    for (let i = 0; i < aktDobasok.length; i++) {
        if (aktDobasok[i] == 6) {
            dobasMennyiseg++;
        }
    }
    document.querySelector("#hatosElofordulas").innerHTML = ((dobasMennyiseg / aktDobasok.length) * 100).toFixed(2) + "%";
}


function ParatlantSzamHanyszor(aktDobasok) {
    if (aktDobasok[0] % 2 == 1 && aktDobasok[1] % 2 == 1 && aktDobasok[2] % 2 == 1) {
        let aktMennyiseg = document.querySelector("#paratlan").innerHTML;
        aktMennyiseg++;
        document.querySelector("#paratlan").innerHTML = aktMennyiseg;
    }
}


function Sorozat(aktDobasok) {
    let aDS = String(aktDobasok[0] + "" + aktDobasok[1] + "" + aktDobasok[2]);
    if (aDS == "123" || aDS == "234" || aDS == "345" || aDS == "456" || aDS == "321" || aDS == "432" || aDS == "543" || aDS == "654") {
        let aktMennyiseg = document.querySelector("#sorozatMennyiseg").innerHTML;
        aktMennyiseg++;
        document.querySelector("#sorozatMennyiseg").innerHTML = aktMennyiseg;
        document.querySelector("#legutolsoSorozat").innerHTML = aktDobasok[0] + "" + aktDobasok[1] + "" + aktDobasok[2];
    }
}