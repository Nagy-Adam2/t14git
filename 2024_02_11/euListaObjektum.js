const EuropaiUnio = [{
        orszag: "Ausztria",
        csatlakozas: "1995.01.01"
    },
    {
        orszag: "Belgium",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Bulgária",
        csatlakozas: "2007.01.01"
    },
    {
        orszag: "Ciprus",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Csehország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Dánia",
        csatlakozas: "1973.01.01"
    },
    {
        orszag: "Egyesült Királyság",
        csatlakozas: "1973.01.01"
    },
    {
        orszag: "Észtország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Finnország",
        csatlakozas: "1995.01.01"
    },
    {
        orszag: "Franciaország",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Görögország",
        csatlakozas: "1981.01.01"
    },
    {
        orszag: "Hollandia",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Horvátország",
        csatlakozas: "2013.07.01"
    },
    {
        orszag: "Írország",
        csatlakozas: "1973.01.01"
    },
    {
        orszag: "Lengyelország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Lettország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Litvánia",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Luxemburg",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Magyarország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Málta",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Németország",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Olaszország",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Portugália",
        csatlakozas: "1986.01.01"
    },
    {
        orszag: "Románia",
        csatlakozas: "2007.01.01"
    },
    {
        orszag: "Spanyolország",
        csatlakozas: "1986.01.01"
    },
    {
        orszag: "Svédország",
        csatlakozas: "1995.01.01"
    },
    {
        orszag: "Szlovákia",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Szlovénia",
        csatlakozas: "2004.05.01"
    }
]


// 1 feladat
function europaiUnioOrszagai(EuropaiUnio) {
  let orszagok = 0;
  for(let i = 0; i < EuropaiUnio.length; i++){
    orszagok++;
  }
  return orszagok;
}

let europaiUnioOrszagaiEredmeny = europaiUnioOrszagai(EuropaiUnio);
document.write("Az Europai Unio országai: " + europaiUnioOrszagaiEredmeny + "<hr />");


// 2 feladat
function csatlakozottAzEuropaiUnio(EuropaiUnio) {
  let csatlakozottOrszagok = [];
  let dbOszagok = 0;
  for(let i = 0; i < EuropaiUnio.length; i++) {
    csatlakozottOrszagok = EuropaiUnio[i].csatlakozas;
    csatlakozottOrszagok = csatlakozottOrszagok.substr(0,4);
    csatlakozottOrszagok = parseInt(csatlakozottOrszagok);
    if(csatlakozottOrszagok == 2007){
      dbOszagok++;	
    }  
  }
  return dbOszagok;
}

let csatlakozottAzEuropaiUnioEredmeny = csatlakozottAzEuropaiUnio(EuropaiUnio);
document.write("2007-ben csatlakozott országok: " + csatlakozottAzEuropaiUnioEredmeny + "<hr />");


// 3 feladat
function csatlakozottEMagyaroszag(EuropaiUnio, Magyarorszag){
    let szerepelE = false;
    for(let i = 0; i < EuropaiUnio.length; i++){ 
    	if(EuropaiUnio[i].orszag == Magyarorszag){
            szerepelE = true;
        }
    }
    if(szerepelE == true) {
      return "Csatlakozott-e " + Magyarorszag + " az Európai Unióhoz: Igen";
    } else {
      return "Csatlakozott-e " + Magyarorszag + " az Európai Unióhoz: Nem";
    }
}

let csatlakozottEMagyaroszagEredmeny = csatlakozottEMagyaroszag(EuropaiUnio,"Magyarország");
document.write(csatlakozottEMagyaroszagEredmeny + "<hr />");


// 4 feladat
function csatlakozottMajusbanAzEuropaiUnio(EuropaiUnio) {
  let majusiCsatlakozottOrszagok = [];
  for(let i = 0; i < EuropaiUnio.length; i++) {
    majusiCsatlakozottOrszagok = EuropaiUnio[i].csatlakozas;
    majusiCsatlakozottOrszagok = majusiCsatlakozottOrszagok.substr(5,6);
    majusiCsatlakozottOrszagok = parseInt(majusiCsatlakozottOrszagok);
  }
  if(majusiCsatlakozottOrszagok == 05){
    return "Igen";
  } else {
    return "Nem";
  } 
}

let csatlakozottMajusbanAzEuropaiUnioEredmeny = csatlakozottMajusbanAzEuropaiUnio(EuropaiUnio);
document.write("Volt-e májusban csatlakozás: " + csatlakozottMajusbanAzEuropaiUnioEredmeny + "<hr />");


// 5 feladat
function utoljaraCsatlakozottOrszag(EuropaiUnio) {
  let utolsoOrszag = 0;
  for(let i = 0; i < EuropaiUnio.length; i++){
	if(EuropaiUnio[i].csatlakozas > EuropaiUnio[utolsoOrszag].csatlakozas){
    	utolsoOrszag = i;
    }
  }
  return utolsoOrszag;
}

function utoljaraCsatlakozottOrszagKiir(utolsoOrszag) {
  document.write("Utoljára csatlakozott ország: " + EuropaiUnio[utolsoOrszag].orszag + "<br />");
}

utoljaraCsatlakozottOrszagKiir(utoljaraCsatlakozottOrszag(EuropaiUnio));
document.write("<hr />");


// 6 feladat
function csatlakozottAzEuropaiUnioStatisztika(EuropaiUnio) {
  let csatlakozottOrszagok = [];
  let db2013_Oszagok = 0;
  let db2007_Oszagok = 0;
  let db2004_Oszagok = 0;
  let db1995_Oszagok = 0;
  let db1986_Oszagok = 0;
  let db1981_Oszagok = 0;
  let db1973_Oszagok = 0;
  let db1958_Oszagok = 0;
  for(let i = 0; i < EuropaiUnio.length; i++) {
    csatlakozottOrszagok = EuropaiUnio[i].csatlakozas;
    csatlakozottOrszagok = csatlakozottOrszagok.substr(0,4);
    csatlakozottOrszagok = parseInt(csatlakozottOrszagok);
      if(csatlakozottOrszagok == 2013){
        db2013_Oszagok++;	
      }
      if(csatlakozottOrszagok == 2007){
        db2007_Oszagok++;	
      }
      if(csatlakozottOrszagok == 2004){
        db2004_Oszagok++;	
      }
      if(csatlakozottOrszagok == 1995){
        db1995_Oszagok++;	
      }
      if(csatlakozottOrszagok == 1986){
        db1986_Oszagok++;	
      }
      if(csatlakozottOrszagok == 1981){
        db1981_Oszagok++;	
      }
      if(csatlakozottOrszagok == 1973){
        db1973_Oszagok++;	
      }
      if(csatlakozottOrszagok == 1958){
        db1958_Oszagok++;	
      }
  }
  return "2013-ban csatlakozott országok: " + db2013_Oszagok + 
         "<br /> 2007-ben csatlakozott országok: " + db2007_Oszagok + 
         "<br /> 2004-ben csatlakozott országok: " + db2004_Oszagok + 
         "<br /> 1995-ben csatlakozott országok: " + db1995_Oszagok + 
         "<br /> 1986-ban csatlakozott országok: " + db1986_Oszagok + 
         "<br /> 1981-ben csatlakozott országok: " + db1981_Oszagok + 
         "<br /> 1973-ban csatlakozott országok: " + db1973_Oszagok + 
         "<br /> 1958-ban csatlakozott országok: " + db1958_Oszagok;
}

let csatlakozottAzEuropaiUnioStatisztikaEredmeny = csatlakozottAzEuropaiUnioStatisztika(EuropaiUnio);
document.write(csatlakozottAzEuropaiUnioStatisztikaEredmeny + "<hr />");