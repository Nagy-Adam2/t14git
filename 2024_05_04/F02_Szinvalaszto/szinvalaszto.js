function EsemenyfigyeloHozzaadasa(szinkeszlet, szinertekValtozas) {
  szinkeszlet.addEventListener("input", szinertekValtozas);
}


function pirosErtekvaltozas() {
  let ujErtek = document.querySelector("#redSet").value;
  document.querySelector("#redValue").innerHTML = ujErtek;
  let aktSzin = SzinKinyero();
  Szinkevero(aktSzin);
  SzinkodRGB(aktSzin);
  SzinkodHEXA(aktSzin);
  NevKiiratasaSzinkodAlapjan(aktSzin, szinekNevei);
  LathatoBetuszin(aktSzin);
}



function zoldErtekvaltozas() {
  let ujErtek = document.querySelector("#greenSet").value;
  document.querySelector("#greenValue").innerHTML = ujErtek;
  let aktSzin = SzinKinyero();
  Szinkevero(aktSzin);
  SzinkodRGB(aktSzin);
  SzinkodHEXA(aktSzin);
  NevKiiratasaSzinkodAlapjan(aktSzin, szinekNevei);
  LathatoBetuszin(aktSzin);
}



function kekErtekvaltozas() {
  let ujErtek = document.querySelector("#blueSet").value;
  document.querySelector("#blueValue").innerHTML = ujErtek;
  let aktSzin = SzinKinyero();
  Szinkevero(aktSzin);
  SzinkodRGB(aktSzin);
  SzinkodHEXA(aktSzin);
  NevKiiratasaSzinkodAlapjan(aktSzin, szinekNevei);
  LathatoBetuszin(aktSzin);
}


EsemenyfigyeloHozzaadasa(redSet, pirosErtekvaltozas);
EsemenyfigyeloHozzaadasa(greenSet, zoldErtekvaltozas);
EsemenyfigyeloHozzaadasa(blueSet, kekErtekvaltozas);


function SzinKinyero() {
  let r = document.querySelector("#redValue").innerHTML;
  let g = document.querySelector("#greenValue").innerHTML;
  let b = document.querySelector("#blueValue").innerHTML;
  let kinyertSzin = { red: r, green: g, blue: b };
  return kinyertSzin
}


function Szinkevero(szin) {
  let beallitottSzin = "rgb(" + szin.red + "," + szin.green + "," + szin.blue + ")";
  document.body.style.backgroundColor = beallitottSzin;
}


function SzinkodRGB(szin) {
  document.querySelector("#RGBkodMegjelenito").innerHTML = "rgb(" + szin.red + "," + szin.green + "," + szin.blue + ")";
}


function SzinkodHEXA(szin) {
  let pirosHexKodSzam = Number(szin.red).toString(16).toUpperCase();
  let zoldHexKodSzam = Number(szin.green).toString(16).toUpperCase();
  let kekHexKodSzam = Number(szin.blue).toString(16).toUpperCase();
  if (pirosHexKodSzam < 10 || pirosHexKodSzam == "A" || pirosHexKodSzam == "B" || pirosHexKodSzam == "C" || pirosHexKodSzam == "D" || pirosHexKodSzam == "E" || pirosHexKodSzam == "F") {
    pirosHexKodSzam = "0" + pirosHexKodSzam;
  }
  if (zoldHexKodSzam < 10 || zoldHexKodSzam == "A" || zoldHexKodSzam == "B" || zoldHexKodSzam == "C" || zoldHexKodSzam == "D" || zoldHexKodSzam == "E" || zoldHexKodSzam == "F") {
    zoldHexKodSzam = "0" + zoldHexKodSzam;
  }
  if (kekHexKodSzam < 10 || kekHexKodSzam == "A" || kekHexKodSzam == "B" || kekHexKodSzam == "C" || kekHexKodSzam == "D" || kekHexKodSzam == "E" || kekHexKodSzam == "F") {
    kekHexKodSzam = "0" + kekHexKodSzam;
  }
  let pirosHexKodSzin = pirosHexKodSzam;
  let zoldHexKodSzin = zoldHexKodSzam;
  let kekHexKodSzin = kekHexKodSzam;
  document.querySelector("#HEXAkodMegjelenito").innerHTML = "#" + pirosHexKodSzin + zoldHexKodSzin + kekHexKodSzin;
  return "#" + pirosHexKodSzin + zoldHexKodSzin + kekHexKodSzin;
}


function LathatoBetuszin(szin) {
  if (szin.red > 125 || szin.green > 125 || szin.blue > 125) {
      document.body.style.color = "black";
      document.querySelector("#keveroFelulet").style.borderColor = "black";
  }
  else {
      document.body.style.color = "white";
      document.querySelector("#keveroFelulet").style.borderColor = "white";
  }
}


function NevKiiratasaSzinkodAlapjan(szin, szinekNevei) {
  let valasztottHexSzam = SzinkodHEXA(szin);
  let valasztottSzinNevenekKiiratasa = "Color no name";
  for (let i = 0; i < szinekNevei.length; i++) {
    if (valasztottHexSzam == szinekNevei[i].hex) {
      valasztottSzinNevenekKiiratasa = szinekNevei[i].nev;
    }
  }
  document.querySelector("#SzinkodAlapjanNevMegjelenito").innerHTML = valasztottSzinNevenekKiiratasa;
}


//Szorgalmi:

//Gombokhoz rendelt event függvényeket próbáljátok meg paraméteresen elkészíteni
//HEXA kód megjelenítése RGB alatt
//MAZOISTÁKNAK: szöveges kifejezés megjelenítése szintén...