// 1 feladat
function szovegBeviteleEsKarakterszam() {
  let szovegBevitel = document.querySelector('#szovegBevitel');
  let karakterekszam = document.querySelector('#karakterekszam');
  karakterekszam.innerHTML = `Karakterek száma: ${szovegBevitel.value.length}`;
}

document.getElementById("szovegBevitel").addEventListener("input", szovegBeviteleEsKarakterszam);


// 2 feladat
function koorditatakAlapjanKirajzol() {
    let xKoordinata = document.querySelector('#xKoordinata');
    let yKoordinata = document.querySelector('#yKoordinata');
    let kirajzoltEredmeny = document.querySelector('#kirajzoltEredmeny');
    kirajzoltEredmeny.style.width = `${xKoordinata.value}px`;
    kirajzoltEredmeny.style.height = `${yKoordinata.value}px`;
    kirajzoltEredmeny.innerHTML = kirajzoltEredmeny.style.width * kirajzoltEredmeny.style.height;
}

document.getElementById("kirajzol").addEventListener("click", koorditatakAlapjanKirajzol);


// 3 feladat
kepAnimacio.addEventListener("click", macskaKepAnimacio);

function macskaKepAnimacio() {
    let allapot = document.querySelector("#macskaKep").style.animationName;
    if (allapot != "Eltunes") {
        document.querySelector("#macskaKep").style.animationName = "Eltunes";
    }
    else {
        document.querySelector("#macskaKep").style.animationName = "Megjelenes";
    }
}


// 4 feladat
ellenorzoGomb.addEventListener("click", emailEllenorzo);

function validEmail(vizsgalandoEmail) {
    let minta = /^[0-9a-z\.-]+@([0-9a-z-]+\.)+[a-z]{2,4}$/i;
    if (minta.test(vizsgalandoEmail))
    {
        return true;
    }
    else {
        return false;
    }
}

function emailEllenorzo() {
    let emailCim1 = document.querySelector("#email1").value;
    let emailCim2 = document.querySelector("#email2").value;
    let uzenoResz = document.querySelector("#uzenoFelulet");
    uzenoResz.style.backgroundColor = "red";
    if (emailCim1 == "" && emailCim2 == "") {
        uzenoResz.innerHTML = "Nincs kitöltve egyik mező sem!";
    }
    else if (emailCim1 == "") {
        uzenoResz.innerHTML = "Nincs kitöltve az e-mail cím mező!";
    }
    else if (emailCim2 == "") {
        uzenoResz.innerHTML = "Nincs kitöltve az e-mail cím megereősítése mező!";
    }
    else if (!validEmail(emailCim1)) {
        uzenoResz.innerHTML = "Az e-mail cím formátuma nem megfelelő";
    }
    else if (emailCim1 != emailCim2) {
        uzenoResz.innerHTML = "Az e-mail címek nem egyeznek"
    }
    else {
        uzenoResz.style.backgroundColor = "green";
        uzenoResz.innerHTML = "Adatok rögzítése sikeres";
    }
}