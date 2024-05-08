interface helsinkiAdat {
    helyezes: number;
    sportolokSzama: number;
    sportagNeve: string;
    versenyszamNeve: string;
};


/* 2.) feladat */

console.log("2.) feladat:");
function ObjektumFeltolto(feltoltendoElem: string[]): helsinkiAdat[] {
    let beolvasottAdatok: helsinkiAdat[] = [];
    for (let i: number = 0; i < feltoltendoElem.length; i++) {
        let daraboltAdatok: string[] = feltoltendoElem[i].split(" ");
        let sportagak = {
            helyezes: Number(daraboltAdatok[0]),
            sportolokSzama: Number(daraboltAdatok[1]),
            sportagNeve: daraboltAdatok[2],
            versenyszamNeve: daraboltAdatok[3]
        };
        beolvasottAdatok.push(sportagak);
    }
    return beolvasottAdatok;
}


let helsinkiAdatok: helsinkiAdat[] = ObjektumFeltolto(helsinki);
console.log(helsinkiAdatok);




/* 3.) feladat */

// megszámlálás, hogy hány elem van benne vagyis soronként

console.log("3.) feladat:");
function hanyPontszerzoHelyezes(vizsgaltTomb: helsinkiAdat[]) {
	let osszeg: number = 0;
    for(let i = 0; i < vizsgaltTomb.length;i++) {
    	osszeg += vizsgaltTomb[i].helyezes;
    }
    return osszeg;
}
console.log("Pontszerző helyezések száma: " + hanyPontszerzoHelyezes(helsinkiAdatok));




/* 4.) feladat */

console.log("4.) feladat:");
function megszerzettErmekSzama(vizsgaltTomb: helsinkiAdat[]): [number, number, number] {
    let aranyErmekSzama: number = 0;
    let ezustErmekSzama: number = 0;
    let bronzErmekSzama: number = 0;
    for(let i: number = 0;i < vizsgaltTomb.length; i++) {
    	if(vizsgaltTomb[i].helyezes == 6){
        	aranyErmekSzama++;
        }
    }
    for(let i: number = 0;i < vizsgaltTomb.length; i++) {
    	if(vizsgaltTomb[i].helyezes == 5){
        	ezustErmekSzama++;
        }
    }
    for(let i: number = 0;i < vizsgaltTomb.length; i++) {
    	if(vizsgaltTomb[i].helyezes == 4){
        	bronzErmekSzama++;
        }
    }
    return [aranyErmekSzama, ezustErmekSzama, bronzErmekSzama];
}


function megszerzettErmekSzamaKiir(osszesErmekSzama: [number, number, number]):void {
    console.log("Arany: " + osszesErmekSzama[0]);
    console.log("Ezüst: " + osszesErmekSzama[1]);
    console.log("Bronz: " + osszesErmekSzama[2]);
    console.log("Összes: " + (osszesErmekSzama[0]) + osszesErmekSzama[1] + osszesErmekSzama[2]);
}


console.log(megszerzettErmekSzamaKiir(megszerzettErmekSzama(helsinkiAdatok)));




/* 5.) feladat */

console.log("5.) feladat:");
function olimpiaiPont(helyezes: number): number {
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


function olimpiaiPontokOsszege(vizsgaltAdatok: helsinkiAdat[]): number {
    let osszPont: number = 0;
    for (let i: number = 0; i < vizsgaltAdatok.length; i++) {
        osszPont += olimpiaiPont(vizsgaltAdatok[i].helyezes);
    }
    return osszPont;
}


function olimpiaiPontokOsszegeKiir(kiirandoAdat: number): void {
    console.log("5. feladat:")
    console.log("Olimpiai pontok száma: " + kiirandoAdat);
}


olimpiaiPontokOsszegeKiir(olimpiaiPontokOsszege(helsinkiAdatok));




/* 6.) feladat */

function univerzalisEremszamOsszehasonlito(vizsgaltAdatok: helsinkiAdat[], elsoSportagNeve, masodikSportagNeve): string {
    let sportagEgyMennyiseg: number = 0;
    let sportagKettoMennyiseg: number = 0;
    for (let i: number = 0; i < vizsgaltAdatok.length; i++) {
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


function univerzalisEremszamOsszehasonlitoKiir(kiirandoAdat: string): void {
    console.log("6. feladat:")
    if (kiirandoAdat == "-") {
        console.log("Egyenlő volt az érmek száma");
    }
    else {
        console.log(kiirandoAdat + " sportágban szereztek több érmet")
    }
}


univerzalisEremszamOsszehasonlitoKiir(univerzalisEremszamOsszehasonlito(helsinkiAdatok, "torna", "uszas"));
univerzalisEremszamOsszehasonlitoKiir(univerzalisEremszamOsszehasonlito(helsinkiAdatok, "vivas", "kerekparozas"));




/* 7.) feladat */

interface helsinki2Adat {
    helyezes: number;
    sportolokSzama: number;
    olimpiaiPont: number;
    sportagNeve: string;
    versenyszamNeve: string;
}


function kajakKenuJavito(vizsgalandoSzoveg: string): string {
    if (vizsgalandoSzoveg == "kajakkenu") {
        return "kajak-kenu";
    }
    return vizsgalandoSzoveg;
}


function helsinki2Keszito(vizsgaltAdatok: helsinkiAdat[]): helsinki2Adat[] {
    let ujHelsinikiAdat: helsinki2Adat[] = [];
    for (let i: number = 0; i < vizsgaltAdatok.length; i++) {
        {
            let ujEredmeny = {
                helyezes: vizsgaltAdatok[i].helyezes,
                sportolokSzama: vizsgaltAdatok[i].sportolokSzama,
                olimpiaiPont: olimpiaiPont(vizsgaltAdatok[i].helyezes),
                sportagNeve: kajakKenuJavito(vizsgaltAdatok[i].sportagNeve),
                versenyszamNeve: vizsgaltAdatok[i].versenyszamNeve
            }
            ujHelsinikiAdat.push(ujEredmeny);
        }
    }
    return ujHelsinikiAdat;
}


function helsinki2Konvertalo(feldolgozandoAdatok: helsinki2Adat[]): string[] {
    let helsinki2: string[] = [];
    for (let i: number = 0; i < feldolgozandoAdatok.length; i++) {
        helsinki2.push(feldolgozandoAdatok[i].helyezes + " " + feldolgozandoAdatok[i].sportolokSzama + " " + feldolgozandoAdatok[i].olimpiaiPont + " " + feldolgozandoAdatok[i].sportagNeve + " " + feldolgozandoAdatok[i].versenyszamNeve);
    }
    return helsinki2;
}


function helsinki2KonvertaloKiir(kiirandoAdat: string[]): void {
    for (let i: number = 0; i < kiirandoAdat.length; i++) {
        console.log(kiirandoAdat[i]);
    }
}


helsinki2KonvertaloKiir(helsinki2Konvertalo(helsinki2Keszito(helsinkiAdatok)));




/* 8.) feladat */

function legtobbSportolo(vizsgaltAdatok: helsinkiAdat[]): number {
    let legtobbSportoloIndex: number = 0;
    for (let i: number = 0; i < vizsgaltAdatok.length; i++) {
        if (vizsgaltAdatok[i].sportolokSzama > vizsgaltAdatok[legtobbSportoloIndex].sportolokSzama) {
            legtobbSportoloIndex = i;
        }
    }
    return legtobbSportoloIndex;
}


function legtobbSportoloKiir(vizsgaltAdatok: helsinkiAdat[], csoportIndex: number): void {
    console.log("8.feladat:")
    console.log("Helyezés: " + vizsgaltAdatok[csoportIndex].helyezes);
    console.log("Sportág: " + vizsgaltAdatok[csoportIndex].sportagNeve);
    console.log("Versenyszám: " + vizsgaltAdatok[csoportIndex].versenyszamNeve);
    console.log("Sportolók száma: " + vizsgaltAdatok[csoportIndex].sportolokSzama);
}


legtobbSportoloKiir(helsinkiAdatok, legtobbSportolo(helsinkiAdatok));