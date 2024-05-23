interface Eredmeny {
    hazai: string;
    idegen: string;
    hazai_pont: number;
    idegen_pont: number;
    helyszin: string;
    idopont: string;
}




// 2.) fealdat

function ObjektumFeltolto(eredmenyek: string[]): Eredmeny[] {
    let beolvasottAdatok: Eredmeny[] = [];
    for (let i: number = 0; i < eredmenyek.length; i++) {
        let daraboltAdatok: string[] = eredmenyek[i].split(";");
        let aktualisEredmeny: Eredmeny = {
            hazai: daraboltAdatok[0],
            idegen: daraboltAdatok[1],
            hazai_pont: Number(daraboltAdatok[2]),
            idegen_pont: Number(daraboltAdatok[3]),
            helyszin: daraboltAdatok[4],
            idopont: daraboltAdatok[5]
        }
        beolvasottAdatok.push(aktualisEredmeny);
    }
    return beolvasottAdatok;
}


let kosarAdatok: Eredmeny[] = ObjektumFeltolto(eredmenyek);




// 3.) feladat

function RealMadridInformacio(kosarAdatok: Eredmeny[]): [number, number] {
    let hazai: number = 0;
    let idegen: number = 0;
    for (let i: number = 0; i < kosarAdatok.length; i++) {
        if (kosarAdatok[i].hazai == "Real Madrid") {
            hazai++;
        }
        else if (kosarAdatok[i].idegen == "Real Madrid") {
            idegen++;
        }
    }
    return [hazai, idegen];
}


function RealMadridInformacioKiir(eredmenyTuple: [number, number]): void {
    console.log("3.feladat: Real Madrid: Hazai: " + eredmenyTuple[0] + ", Idegen: " + eredmenyTuple[1]);
}


RealMadridInformacioKiir(RealMadridInformacio(kosarAdatok));




// 4.) feladat

function VoltEDontetlen(kosarAdatok: Eredmeny[]): boolean {
    for (let i: number = 0; i < kosarAdatok.length; i++) {
        if (kosarAdatok[i].hazai_pont == kosarAdatok[i].idegen_pont) {
            return true;
        }
    }
    return false;
}


function VoltEDontetlenKiir(eredmeny: boolean): void {
    if (eredmeny) {
        console.log("4. feladat: Volt döntetlen? igen");
    }
    else {
        console.log("4. feladat: Volt döntetlen? nem");
    }
}


VoltEDontetlenKiir(VoltEDontetlen(kosarAdatok));




// 5.) feladat

function PontosNev(kosarAdatok: Eredmeny[]): string {
    let teljesNev: string = "";
    for (let i: number = 0; i < kosarAdatok.length; i++) {
        if (kosarAdatok[i].hazai.match("Barcelona")) {
            teljesNev = kosarAdatok[i].hazai;
        }
    }
    return teljesNev;
}


function PontosNevKiir(teljesNev: string): void {
    console.log("5. feladat: barcalonai csapat neve: " + teljesNev);
}


PontosNevKiir(PontosNev(kosarAdatok));




// 6.) feladat

interface November2004 {
    hazaiCsapat: string;
    idegenCsapat: string;
    hazaiPont: number;
    idegenPont: number;
}


function November2004Csapatai(kosarAdatok: Eredmeny[]): November2004[] {
    let csapatInformacio: November2004[] = [];
    for (let i: number = 0; i < kosarAdatok.length; i++) {
        if (kosarAdatok[i].idopont == "2004-11-21") {
            let ujCsapat: November2004 = {
                hazaiCsapat: kosarAdatok[i].hazai,
                idegenCsapat: kosarAdatok[i].idegen,
                hazaiPont: kosarAdatok[i].hazai_pont,
                idegenPont: kosarAdatok[i].idegen_pont
            }
            csapatInformacio.push(ujCsapat);
        }
    }
    return csapatInformacio;
}


function November2004CsapataiKiir(kiirandoEredmenyek: November2004[]): void {
    console.log("6.feladat");
    for (let i: number = 0; i < kiirandoEredmenyek.length; i++) {
        console.log(kiirandoEredmenyek[i].hazaiCsapat + "-" + kiirandoEredmenyek[i].idegenCsapat + " (" + kiirandoEredmenyek[i].hazaiPont + ":" + kiirandoEredmenyek[i].idegenPont + ")");
    }
}


November2004CsapataiKiir(November2004Csapatai(kosarAdatok));




// 7.) feladat

interface Statisztika {
    stadionNeve: string;
    merkozesSzam: number;
}


function StadionStatisztika(kosarAdatok: Eredmeny[]): Statisztika[] {
    let statisztikaAdatok: Statisztika[] = [];
    for (let i: number = 0; i < kosarAdatok.length; i++) {
        let szerepelE: boolean = false;
        let adottIndex: number = 0;
        for (let j: number = 0; j < statisztikaAdatok.length; j++) {
            if (kosarAdatok[i].helyszin == statisztikaAdatok[j].stadionNeve) {
                szerepelE = true;
                adottIndex = j;
            }
        }
        if (!szerepelE) {
            let ujStadion: Statisztika = { stadionNeve: kosarAdatok[i].helyszin, merkozesSzam: 1 };
            statisztikaAdatok.push(ujStadion);
        }
        else {
            statisztikaAdatok[adottIndex].merkozesSzam++;
        }
    }
    return statisztikaAdatok;
}


function StadionStatisztikaKiir(kosarAdatok: Statisztika[]): void {
    console.log("7. feladat:");
    for (let i: number = 0; i <kosarAdatok.length; i++) {
        if (kosarAdatok[i].merkozesSzam > 20) {
            console.log(kosarAdatok[i].stadionNeve + ": " + kosarAdatok[i].merkozesSzam);
        }
    }
}


StadionStatisztikaKiir(StadionStatisztika(kosarAdatok));