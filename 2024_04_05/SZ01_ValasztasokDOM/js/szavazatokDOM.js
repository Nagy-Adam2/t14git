// 0 feladat

function szavazatokTablazatGenerator(szavazatok) {
  let tabla = document.querySelector("#kepiseloTabla");
  for (let i = szavazatok.length - 1; i >= 0; i--) {
      var adatSor = tabla.insertRow(1);
      let partFuggetlen = adatSor.insertCell(0);
      let kepiseloNev = adatSor.insertCell(1);
      let szavazat = adatSor.insertCell(2);
      let korzet = adatSor.insertCell(3);
      partFuggetlen.innerHTML = szavazatok[i].part;
      kepiseloNev.innerHTML = szavazatok[i].nev;
      szavazat.innerHTML = szavazatok[i].szavazat;
      korzet.innerHTML = szavazatok[i].korzet;
  }
}


function szavazatokTablazatGeneratorKiir() {
  let szavazatokTablazatGeneratorEredmeny = szavazatokTablazatGenerator(szavazatok);
  return szavazatokTablazatGeneratorEredmeny;
}


let feladatEventGomb0 = document.querySelector("#feladat0");
feladatEventGomb0.addEventListener("click", szavazatokTablazatGeneratorKiir);




// 1 feladat

function hanyKepviselojeloltIndult(szavazatok) {
  return szavazatok.length;
}


function hanyKepviselojeloltIndultKiir() {
  let hanyKepviselojeloltIndultEredmeny = hanyKepviselojeloltIndult(szavazatok);
  let kepviselojeloltekMegjelenitese = document.querySelector('.kepviselojeloltekMegjelenitese');
  kepviselojeloltekMegjelenitese.innerHTML = `A helyhatósági választáson ${hanyKepviselojeloltIndultEredmeny} képviselőjelölt indult.`;
}


let feladatEventGomb1 = document.querySelector("#feladat1");
feladatEventGomb1.addEventListener("click", hanyKepviselojeloltIndultKiir);




// 2 feladat

function partFuggetlenKiolvaso() {
  let partFuggetlenAzonosito = document.querySelector("#partokFuggetlenek").value;
  return partFuggetlenAzonosito;
}


function partFuggetlenHanyKepviselojeloltInditott(szavazatok) {
  let adottPartFuggetlenAzonosito = partFuggetlenKiolvaso();
  let upperCaseaAdottPartFuggetlenAzonosito = adottPartFuggetlenAzonosito.toUpperCase();
  let partFuggetlenKepiseloMegzsamlalasDb = partFuggetlenKepiseloMegzsamlalas(szavazatok)
  for(let i = 0; i < szavazatok.length; i++) {
    if(upperCaseaAdottPartFuggetlenAzonosito == "GYEP") {
      return `${upperCaseaAdottPartFuggetlenAzonosito} pártja ${partFuggetlenKepiseloMegzsamlalasDb[0]} képviselőjelöltett inditott a helyhatósági választáson.`;
    }
    if(upperCaseaAdottPartFuggetlenAzonosito == "ZEP") {
      return `${upperCaseaAdottPartFuggetlenAzonosito} pártja ${partFuggetlenKepiseloMegzsamlalasDb[1]} képviselőjelöltett inditott a helyhatósági választáson.`;
    }
    if(upperCaseaAdottPartFuggetlenAzonosito == "HEP") {
      return `${upperCaseaAdottPartFuggetlenAzonosito} pártja ${partFuggetlenKepiseloMegzsamlalasDb[2]} képviselőjelöltett inditott a helyhatósági választáson.`;
    }
    if(upperCaseaAdottPartFuggetlenAzonosito == "TISZ") {
      return `${upperCaseaAdottPartFuggetlenAzonosito} pártja ${partFuggetlenKepiseloMegzsamlalasDb[3]} képviselőjelöltett inditott a helyhatósági választáson.`;
    }
    if(upperCaseaAdottPartFuggetlenAzonosito == "-") {
      return `Függetlenek ${partFuggetlenKepiseloMegzsamlalasDb[4]} képviselőjelöltett inditott a helyhatósági választáson.`;
    }
  }
  return "Ilyen nevű képviselőjelölt nem szerepel a nyilvántartásban!";
}


function partFuggetlenKepiseloMegzsamlalas(szavazatok) {
  let partFuggetlenKepiselo = [];
  let GYEP_part = 0;
  let ZEP_part = 0;
  let HEP_part = 0;
  let TISZ_part = 0;
  let Fuggetlen = 0;
  for(let i = 0; i < szavazatok.length; i++) {
    partFuggetlenKepiselo = szavazatok[i].part;
    if(partFuggetlenKepiselo == "GYEP") {
      GYEP_part++;	
    }
    if(partFuggetlenKepiselo == "ZEP") {
      ZEP_part++;	
    }
    if(partFuggetlenKepiselo == "HEP") {
      HEP_part++;	
    }
    if(partFuggetlenKepiselo == "TISZ") {
      TISZ_part++;	
    }
    if(partFuggetlenKepiselo == "-") {
      Fuggetlen++;	
    }
  }
  let partFuggetlenKepiseloDb = [GYEP_part, ZEP_part, HEP_part, TISZ_part, Fuggetlen];
  return partFuggetlenKepiseloDb;
}


function partFuggetlenHanyKepviselojeloltInditottKiir() {
  let adottPartFuggetlenHanyKepviselojeloltInditott = partFuggetlenHanyKepviselojeloltInditott(szavazatok);
  document.querySelector(".partFuggetlenKepiseloiMegjelenitese").innerHTML=`${adottPartFuggetlenHanyKepviselojeloltInditott}`;
}


let feladatEventGomb2 = document.querySelector("#feladat2");
feladatEventGomb2.addEventListener("click", partFuggetlenHanyKepviselojeloltInditottKiir);




// 3 feladat

function NevKiolvaso() {
  let kepiseloNeve = document.querySelector("#kepiseloNeve").value;
  return kepiseloNeve;
}


function kepiseloSzavazatai(szavazatok, kepiseloNeve) {
  for(let i = 0; i < szavazatok.length; i++) {
    if(szavazatok[i].nev == kepiseloNeve) {
      return true;
    }
  }
  return false;
}


function keresKepiseloSzavazatai(szavazatok, kepiseloNeve) {
  let kepieseloSzavazatai = 0;
  for(let i = 0; i < szavazatok.length; i++) {
    if(szavazatok[i].nev == kepiseloNeve) {
      kepieseloSzavazatai = szavazatok[i].szavazat;
    }
  }
  return kepieseloSzavazatai;
}


function kepiseloSzavazataiKiir() {
  let adottKepiselo = NevKiolvaso();
  let letezikEAzAdottKepiselo = kepiseloSzavazatai(szavazatok, adottKepiselo);
  let kepieseloSzavazatai = keresKepiseloSzavazatai(szavazatok, adottKepiselo);
  if(letezikEAzAdottKepiselo == true){
    document.querySelector(".KepeseloiSzavazatokSzama").innerHTML = `${adottKepiselo} ${kepieseloSzavazatai} szavazatot kapott!`
  }
  else{
    document.querySelector(".KepeseloiSzavazatokSzama").innerHTML = "Ilyen nevű képviselőjelölt nem szerepel a nyilvántartásban!";
  }
}


let feladatEventGomb3 = document.querySelector("#feladat3");
feladatEventGomb3.addEventListener("click", kepiseloSzavazataiKiir);




// 4 feladat

function reszvetelASzavazatokbanOsszesen(szavazatok) {
  let szavazatokOsszesen = 0;
  for(let i = 0; i < szavazatok.length; i++) {
    szavazatokOsszesen += szavazatok[i].szavazat;
  }
  return szavazatokOsszesen
}


function reszveteliAranySzavazatokbanSzazalekban(szavazatok) {
  let szavazatokOsszesen = reszvetelASzavazatokbanOsszesen(szavazatok);
  let szavazasraJogosultAllamporgarOsszesen = 12345;
  let kettizedesigAzEredmeny = 0;
  kettizedesigAzEredmeny = szavazatokOsszesen / szavazasraJogosultAllamporgarOsszesen * 100;
  return kettizedesigAzEredmeny.toFixed(2);
}


function reszveteliAranySzavazatokbanKiir() {
  let reszvetelASzavazatokbanOsszesenMegjelenites = reszvetelASzavazatokbanOsszesen(szavazatok);
  let reszveteliAranySzavazatokbanSzazalekbanMegjelenites = reszveteliAranySzavazatokbanSzazalekban(szavazatok);
  document.querySelector(".reszveteliAranySzavazatokban").innerHTML = `A választáson ${reszvetelASzavazatokbanOsszesenMegjelenites} állampolgár, a jogosultak ${reszveteliAranySzavazatokbanSzazalekbanMegjelenites}%-a vett részt.`;
}


let feladatEventGomb4 = document.querySelector("#feladat4");
feladatEventGomb4.addEventListener("click", reszveteliAranySzavazatokbanKiir);




// 5 feladat

function partokNevei(szavazatok) {
  let partokNevei = [];
  for (let i = 0; i < szavazatok.length; i++) {
    let szerepelE = false;
    for (let j = 0; j < partokNevei.length; j++) {
      if (szavazatok[i].part == partokNevei[j]) {
        szerepelE = true;
      }
    }
    if (szerepelE == false && szavazatok[i].part != "-") {
      partokNevei.push(szavazatok[i].part);
    }
  }
  return partokNevei;
}


function szavazatokMennyisege(szavazatok, partokNevei) {
  let GYEPpartOsszesSzavazata = 0;
  let ZEPpartOsszesSzavazata = 0;
  let HEPpartOsszesSzavazata = 0;
  let TISZpartOsszesSzavazata = 0;
  let szavazatokMennyisege = [];
  for(let i = 0; i < szavazatok.length; i++) {
    if (szavazatok[i].part == partokNevei[0]) {
        GYEPpartOsszesSzavazata += szavazatok[i].szavazat;
    }
    if(szavazatok[i].part == partokNevei[1]) {
        ZEPpartOsszesSzavazata += szavazatok[i].szavazat;
    }
    if(szavazatok[i].part == partokNevei[2]) {
        HEPpartOsszesSzavazata += szavazatok[i].szavazat;
    }
    if(szavazatok[i].part == partokNevei[3]) {
        TISZpartOsszesSzavazata += szavazatok[i].szavazat;
    }    
  }
  szavazatokMennyisege.push(GYEPpartOsszesSzavazata, ZEPpartOsszesSzavazata, HEPpartOsszesSzavazata, TISZpartOsszesSzavazata);
  return szavazatokMennyisege;
}


function StatitsztikaTablazatGenerator() {
  let partok = partokNevei(szavazatok);
  let partokSzavazatokMennyisege = szavazatokMennyisege(szavazatok, partok);

  let tabla = document.querySelector(".partokraLeadottSzavazatokMennyisege");

  while (tabla.rows.length > 1) {
    table.deleteRow(1);
  }

  for (let i = partok.length - 1; i >= 0; i--) {
    var adatSor = tabla.insertRow(1);
    let partokNevei = adatSor.insertCell(0);
    let szavazatokMennyisege = adatSor.insertCell(1);
    partokNevei.innerHTML = partok[i];
    szavazatokMennyisege.innerHTML = partokSzavazatokMennyisege[i];
  }
}


let feladatEventGomb5 = document.querySelector("#feladat5");
feladatEventGomb5.addEventListener("click", StatitsztikaTablazatGenerator);




// 6 feladat

function legtobbSzavazatottKapott(szavazatok) {
  let kivalasztottKepeseloIndex = 0;
  let legtobbSzavazatottKapottKepiselok = [];
  for (let i = 0; i < szavazatok.length; i++) {
    if (szavazatok[i].szavazat > szavazatok[kivalasztottKepeseloIndex].szavazat) {
      kivalasztottKepeseloIndex = i;
    }
  }
  for(let i = 0; i < szavazatok.length; i++){
    if(szavazatok[i].szavazat == szavazatok[kivalasztottKepeseloIndex].szavazat){
      legtobbSzavazatottKapottKepiselok.push(szavazatok[i].nev, szavazatok[i].part);
    }
  }
  return legtobbSzavazatottKapottKepiselok;
}


function legtobbSzavazatottKapottKiir() {
  let kiirandoKepiselok = legtobbSzavazatottKapott(szavazatok);
  let legtobbszavazaottKapottKepiselok = [];
  let sorTores = 1;
  for(let i = 0; i < kiirandoKepiselok.length; i++) {
    if(i == sorTores) {
      legtobbszavazaottKapottKepiselok += kiirandoKepiselok[i] + "<br />";
      sorTores += 2;
    }
    else {
      legtobbszavazaottKapottKepiselok += kiirandoKepiselok[i] + ", "; 
    }   
  }
  document.querySelector(".legtobbSzavazatotKapta").innerHTML = `A legtöbb szavazatott kapott képiselők: <br />${legtobbszavazaottKapottKepiselok}`;
}


let feladatEventGomb6 = document.querySelector("#feladat6");
feladatEventGomb6.addEventListener("click", legtobbSzavazatottKapottKiir);




// 7 feladat

function valasztokeruletekSorszamai(szavazatok) {
  let valasztokeruletekSorszamai = [];
  for (let i = 0; i < szavazatok.length; i++) {
      let szerepelE = false;
      for (let j = 0; j < valasztokeruletekSorszamai.length; j++) {
        if (szavazatok[i].korzet == valasztokeruletekSorszamai[j]) {
          szerepelE = true;
        }
      }
      if (szerepelE == false) {
        valasztokeruletekSorszamai.push(szavazatok[i].korzet);
      }
  }
  valasztokeruletekSorszamai.sort()
  return valasztokeruletekSorszamai;
}

function korzetenkentALegtobbSzavazatotKapottKivalsztasa(szavazatok, valasztokeruletekSorszamai) {
  let elsoKorzet = [];
  let masodikKorzet = [];
  let harmadikKorzet = [];
  let negyedikKorzet = [];
  let otodikKorzet = [];
  let hatodikKorzet = [];
  let hetedikKorzet = [];
  let nyolcadikKorzet = [];
  let legtobbSzavazatokKivalsztasa = [];
  
  for (let i = 0; i < szavazatok.length; i++) {
    if(szavazatok[i].korzet == valasztokeruletekSorszamai[0]) {
      elsoKorzet.push(szavazatok[i].korzet, szavazatok[i].nev, szavazatok[i].part, szavazatok[i].szavazat);
    }
    if(szavazatok[i].korzet == valasztokeruletekSorszamai[1]) {
      masodikKorzet.push(szavazatok[i].korzet, szavazatok[i].nev, szavazatok[i].part, szavazatok[i].szavazat);
    }
    if(szavazatok[i].korzet == valasztokeruletekSorszamai[2]) {
      harmadikKorzet.push(szavazatok[i].korzet, szavazatok[i].nev, szavazatok[i].part, szavazatok[i].szavazat);
    }
    if(szavazatok[i].korzet == valasztokeruletekSorszamai[3]) {
      negyedikKorzet.push(szavazatok[i].korzet, szavazatok[i].nev, szavazatok[i].part, szavazatok[i].szavazat);
    }
    if(szavazatok[i].korzet == valasztokeruletekSorszamai[4]) {
      otodikKorzet.push(szavazatok[i].korzet, szavazatok[i].nev, szavazatok[i].part, szavazatok[i].szavazat);
    }
    if(szavazatok[i].korzet == valasztokeruletekSorszamai[5]) {
      hatodikKorzet.push(szavazatok[i].korzet, szavazatok[i].nev, szavazatok[i].part, szavazatok[i].szavazat);
    }
    if(szavazatok[i].korzet == valasztokeruletekSorszamai[6]) {
      hetedikKorzet.push(szavazatok[i].korzet, szavazatok[i].nev, szavazatok[i].part, szavazatok[i].szavazat);
    }
    if(szavazatok[i].korzet == valasztokeruletekSorszamai[7]) {
      nyolcadikKorzet.push(szavazatok[i].korzet, szavazatok[i].nev, szavazatok[i].part, szavazatok[i].szavazat);
    }    
  }

  let elsoKorzetMaxErtek=elsoKorzet[3];
  let masodikKorzetMaxErtek=masodikKorzet[3];
  let harmadikKorzetMaxErtek=harmadikKorzet[3];
  let negyedikKorzetMaxErtek=negyedikKorzet[3];
  let otodikKorzetMaxErtek=otodikKorzet[3];
  let hatodikKorzetMaxErtek=hatodikKorzet[3];
  let hetedikKorzetMaxErtek=hetedikKorzet[3];
  let nyolcadikKorzetMaxErtek=nyolcadikKorzet[3];

  for(let i = 1; i < elsoKorzet.length; i++) {  
    if(elsoKorzet[i] > elsoKorzetMaxErtek) {
      elsoKorzetMaxErtek = elsoKorzet[i];
    }
  }
  for(let i = 1; i < masodikKorzet.length; i++) {
    if(masodikKorzet[i] > masodikKorzetMaxErtek) {
      masodikKorzetMaxErtek = masodikKorzet[i];
    }
  }
  for(let i = 1; i < harmadikKorzet.length; i++) {
    if(harmadikKorzet[i] > harmadikKorzetMaxErtek) {
      harmadikKorzetMaxErtek = harmadikKorzet[i];
    }
  }
  for(let i = 1; i < negyedikKorzet.length; i++) {
    if(negyedikKorzet[i] > negyedikKorzetMaxErtek) {
      negyedikKorzetMaxErtek = negyedikKorzet[i];
    }
  }
  for(let i = 1; i < otodikKorzet.length; i++) {
    if(otodikKorzet[i] > otodikKorzetMaxErtek) {
      otodikKorzetMaxErtek = otodikKorzet[i];
    }
  }
  for(let i = 1; i < hatodikKorzet.length; i++) {
    if(hatodikKorzet[i] > hatodikKorzetMaxErtek) {
      hatodikKorzetMaxErtek = hatodikKorzet[i];
    }
  }
  for(let i = 1; i < hetedikKorzet.length; i++) {
    if(hetedikKorzet[i] > hetedikKorzetMaxErtek) {
      hetedikKorzetMaxErtek = hetedikKorzet[i];
    }
  }
  for(let i = 1;i < nyolcadikKorzet.length; i++) {
    if(nyolcadikKorzet[i] > nyolcadikKorzetMaxErtek) {
      nyolcadikKorzetMaxErtek = nyolcadikKorzet[i];
    }
  }

  legtobbSzavazatokKivalsztasa.push(elsoKorzetMaxErtek, masodikKorzetMaxErtek, harmadikKorzetMaxErtek, negyedikKorzetMaxErtek, otodikKorzetMaxErtek, hatodikKorzetMaxErtek, hetedikKorzetMaxErtek, nyolcadikKorzetMaxErtek);
  return legtobbSzavazatokKivalsztasa;
}


function korzetenkentValsztottKepieselok(szavazatok, valasztokeruletekSorszamai) {
  let legtobbSzavazatokKivalsztasa = korzetenkentALegtobbSzavazatotKapottKivalsztasa(szavazatok, valasztokeruletekSorszamai);
  let elsoKorzetNyertesKepiseloje = "";
  let masodikKorzetNyertesKepiseloje = "";
  let harmadikKorzetNyertesKepiseloje = "";
  let negyedikKorzetNyertesKepiseloje = "";
  let otodikKorzetNyertesKepiseloje = "";
  let hatodikKorzetNyertesKepiseloje = "";
  let hetedikKorzetNyertesKepiseloje = "";
  let nyolcadikKorzetNyertesKepiseloje = "";
  let valsztottKepieselok = [];

  for (let i = 0; i < szavazatok.length; i++) {
    if (legtobbSzavazatokKivalsztasa[0] == szavazatok[i].szavazat && valasztokeruletekSorszamai[0] == szavazatok[i].korzet) {
      elsoKorzetNyertesKepiseloje = " " + szavazatok[i].nev + " " + szavazatok[i].part + " " + szavazatok[i].szavazat;
    }
    if (legtobbSzavazatokKivalsztasa[1] == szavazatok[i].szavazat && valasztokeruletekSorszamai[1] == szavazatok[i].korzet) {
      masodikKorzetNyertesKepiseloje = " " + szavazatok[i].nev + " " + szavazatok[i].part + " " + szavazatok[i].szavazat;
    }
    if (legtobbSzavazatokKivalsztasa[2] == szavazatok[i].szavazat && valasztokeruletekSorszamai[2] == szavazatok[i].korzet) {
      harmadikKorzetNyertesKepiseloje = " " + szavazatok[i].nev + " " + szavazatok[i].part + " " + szavazatok[i].szavazat;
    }
    if (legtobbSzavazatokKivalsztasa[3] == szavazatok[i].szavazat && valasztokeruletekSorszamai[3] == szavazatok[i].korzet) {
      negyedikKorzetNyertesKepiseloje = " " + szavazatok[i].nev + " " + szavazatok[i].part + " " + szavazatok[i].szavazat;
    }
    if (legtobbSzavazatokKivalsztasa[4] == szavazatok[i].szavazat && valasztokeruletekSorszamai[4] == szavazatok[i].korzet) {
      otodikKorzetNyertesKepiseloje = " " + szavazatok[i].nev + " " + szavazatok[i].part + " " + szavazatok[i].szavazat;
    }
    if (legtobbSzavazatokKivalsztasa[5] == szavazatok[i].szavazat && valasztokeruletekSorszamai[5] == szavazatok[i].korzet) {
      hatodikKorzetNyertesKepiseloje = " " + szavazatok[i].nev + " " + szavazatok[i].part + " " + szavazatok[i].szavazat;
    }
    if (legtobbSzavazatokKivalsztasa[6] == szavazatok[i].szavazat && valasztokeruletekSorszamai[6] == szavazatok[i].korzet) {
      hetedikKorzetNyertesKepiseloje = " " + szavazatok[i].nev + " " + szavazatok[i].part + " " + szavazatok[i].szavazat;
    }
    if (legtobbSzavazatokKivalsztasa[7] == szavazatok[i].szavazat && valasztokeruletekSorszamai[7] == szavazatok[i].korzet) {
      nyolcadikKorzetNyertesKepiseloje = " " + szavazatok[i].nev + " " + szavazatok[i].part + " " + szavazatok[i].szavazat;
    }
  }

  valsztottKepieselok.push(elsoKorzetNyertesKepiseloje, masodikKorzetNyertesKepiseloje, harmadikKorzetNyertesKepiseloje, negyedikKorzetNyertesKepiseloje, otodikKorzetNyertesKepiseloje, hatodikKorzetNyertesKepiseloje, hetedikKorzetNyertesKepiseloje, nyolcadikKorzetNyertesKepiseloje);
  return valsztottKepieselok;
}


function korzetenkentValsztottKepieselokKiir() {
  let valasztokeruletekSorszamaiKiiratasa = valasztokeruletekSorszamai(szavazatok);
  let korzetenkentValsztottKepieselokKiiratasa = korzetenkentValsztottKepieselok(szavazatok, valasztokeruletekSorszamaiKiiratasa);
  let nyertesKepiselok = [];
  for(let i = 0; i < valasztokeruletekSorszamaiKiiratasa.length; i++){
    nyertesKepiselok += valasztokeruletekSorszamaiKiiratasa[i] + korzetenkentValsztottKepieselokKiiratasa[i] + "<br />"; 
  }
  document.querySelector(".valasztokeruletekbenKikLettekAKepviselok").innerHTML = `A nyertes képiselők körzetenként: <br />${nyertesKepiselok}`;
}


let feladatEventGomb7 = document.querySelector("#feladat7");
feladatEventGomb7.addEventListener("click", korzetenkentValsztottKepieselokKiir);




// Navigáció müködtetése

function feladatMutat(feladatAzonosito) {
  for (let i = 0; i <= 7; i++) {
      if (i != feladatAzonosito) {
          document.querySelector(`#feladatBlokk0${i}`).style.display = "none";
      }
      else {
          document.querySelector(`#feladatBlokk0${i}`).style.display = "block";
      }
  }
}


function F0mutat() {
  feladatMutat(0);
}

let g0event = document.querySelector("#g0");
g0event.addEventListener("click", F0mutat);


function F1mutat() {
  feladatMutat(1);
}

let g1event = document.querySelector("#g1");
g1event.addEventListener("click", F1mutat);


function F2mutat() {
  feladatMutat(2);
}

let g2event = document.querySelector("#g2");
g2event.addEventListener("click", F2mutat);


function F3mutat() {
  feladatMutat(3);
}

let g3event = document.querySelector("#g3");
g3event.addEventListener("click", F3mutat);


function F4mutat() {
  feladatMutat(4);
}

let g4event = document.querySelector("#g4");
g4event.addEventListener("click", F4mutat);


function F5mutat() {
  feladatMutat(5);
}

let g5event = document.querySelector("#g5");
g5event.addEventListener("click", F5mutat);


function F6mutat() {
  feladatMutat(6);
}

let g6event = document.querySelector("#g6");
g6event.addEventListener("click", F6mutat);


function F7mutat() {
  feladatMutat(7);
}
let g7event = document.querySelector("#g7");
g7event.addEventListener("click", F7mutat);