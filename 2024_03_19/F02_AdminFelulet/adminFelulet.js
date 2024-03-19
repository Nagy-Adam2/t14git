//Aktiváló gomb
aktivalo.addEventListener("click", mindenCheck);

function mindenCheck() {
    let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.length; i++) {
        elemLista[i].checked = true;
    }
}


//Deaktiváló gomb
deaktivalo.addEventListener("click", mindenUnCheck);

function mindenUnCheck() {
    let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.length; i++) {
        elemLista[i].checked = false;
    }
}


//Szorgalmi: Próbáld meg egy gombra rakni a két funkciót check/uncheck, illetve megoldani, hogy megcserélje a kijelöléseket(megfordítja)
aktivaloDeaktivalo.addEventListener("click", mindenCheckUnCheck);

function mindenCheckUnCheck() {
    let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.length; i++) {
        if (elemLista[i].checked == false) {
            elemLista[i].checked = true;
        }
        else {
            elemLista[i].checked = false;
        }
    }
}


//Táblázat sávozásának beállítása
csikozasBe.addEventListener("click", savozasBe);

function savozasBe() {
    let kivalsztottTablazat = document.querySelector("table");
    kivalsztottTablazat.classList.add("table-striped");
}


//Táblázat sávozásának kikapcsolása
csikozasKi.addEventListener("click", savozasKi);

function savozasKi() {
    let kivalsztottTablazat = document.querySelector("table");
    kivalsztottTablazat.classList.remove("table-striped");
}


//Szorgalmi: Próbáld meg egy gombra rakni a két funkciót sávozásbe/sávozáski
csikozasBecsikozasKi.addEventListener("click", savozasBesavozasKi);

function savozasBesavozasKi() {
    let kivalsztottTablazat = document.querySelector("table");
    kivalsztottTablazat.classList.toggle("table-striped");
}


//Dark mode bekapcsolása
darkMode.addEventListener("click", DarkMode);

function DarkMode() {
    let kivalsztottTablazat = document.querySelector("table");
    kivalsztottTablazat.classList.add("table-dark");
    kivalsztottTablazat.classList.remove("table-light");
}


//Ligh mode bekapcsolása
lightMode.addEventListener("click", LightMode);

function LightMode() {
    let kivalsztottTablazat = document.querySelector("table");
    kivalsztottTablazat.classList.add("table-light");
    kivalsztottTablazat.classList.remove("table-dark");
}


//Szorgalmi: Próbáld meg egy gombra rakni a két funkciót darkMode/lightMode
darkModelightMode.addEventListener("click", DarkModeLightMode);

function DarkModeLightMode() {
    let kivalsztottTablazat = document.querySelector("table");
    if (kivalsztottTablazat.classList.contains("table-dark")) {
        kivalsztottTablazat.classList.replace("table-dark", "table-light");
    }
    else {
        kivalsztottTablazat.classList.replace("table-light", "table-dark");
    }
}


//Tesztsor beillesztése
tesztSor.addEventListener("click", TesztSorBeszuras);

function TesztSorBeszuras() {
    let kivalsztottTablazat = document.querySelector("table");
    let sor = kivalsztottTablazat.insertRow();//-1 paraméter is lehet az insertRow-ban...
    let vezetekNevCella = sor.insertCell(0);
    let keresztNevCella = sor.insertCell(1);
    let emailCella = sor.insertCell(2);
    let telefonCella = sor.insertCell(3);
    let beosztasCella = sor.insertCell(4);
    let aktivalCella = sor.insertCell(5);

    vezetekNevCella.innerHTML = "teszt";
    keresztNevCella.innerHTML = "teszt";
    emailCella.innerHTML = "teszt";
    telefonCella.innerHTML = "teszt";
    beosztasCella.innerHTML = "teszt";
    aktivalCella.innerHTML = "<input type=\"checkbox\" class=\"allapot\">";
}


function ujElemHozzaad() {
    let kivalsztottTablazat = document.querySelector("table");
    let sor = kivalsztottTablazat.insertRow();//-1 paraméter is lehet az insertRow-ban...
    let vezetekNevCella = sor.insertCell(0);
    let keresztNevCella = sor.insertCell(1);
    let emailCella = sor.insertCell(2);
    let telefonCella = sor.insertCell(3);
    let beosztasCella = sor.insertCell(4);
    let aktivalCella = sor.insertCell(5);

    vezetekNevCella.innerHTML = document.querySelector("#vezNev").value;
    keresztNevCella.innerHTML = document.querySelector("#kerNev").value;
    emailCella.innerHTML = document.querySelector("#email").value;
    telefonCella.innerHTML = document.querySelector("#tel").value;
    beosztasCella.innerHTML = document.querySelector("#beosztas").value;
    aktivalCella.innerHTML = "<input type=\"checkbox\" class=\"allapot\">";
    console.log(vezetekNevCella);
}

//Szorgalmi lehetőség: Validáció készítése, akár Regex segítségével.
ujElemFeltolto.addEventListener("click", bekuldotAdatokEllenorzese);


function validVezeteknev(vizsgalandoVezeteknev) {
    let minta = /^[A-ZÁÉÍÓŐÖÚŰÜ]{1}[a-záéíóőöúűü]{2,10}$/i;
    let vezeteknevElsoKarkatere = vizsgalandoVezeteknev.charAt(0).toUpperCase();
    let elsoNagybetusEgyezes = vizsgalandoVezeteknev.charAt(0) === vezeteknevElsoKarkatere;
    let vezeteknevKisbetukkel = "";
    let elsoKarkatereNincsVizsgalandoVezeteknev = "";
    let kisbetukEgyezese = false;


    for (let i = 1; i <= vizsgalandoVezeteknev.length - 1; i++) {
        vezeteknevKisbetukkel += vizsgalandoVezeteknev.charAt(i).toLowerCase();
        elsoKarkatereNincsVizsgalandoVezeteknev += vizsgalandoVezeteknev[i];
    }


    if (vezeteknevKisbetukkel === elsoKarkatereNincsVizsgalandoVezeteknev) {
        kisbetukEgyezese = true;
    }
    else {
        kisbetukEgyezese = false;
    }
    

    if (minta.test(vizsgalandoVezeteknev) && elsoNagybetusEgyezes && kisbetukEgyezese)
    {
        return true;
    }
    else {
        return false;
    }
}


function validKeresztnev(vizsgalandoKeresztnev) {
    let minta = /^[A-ZÁÉÍÓŐÖÚŰÜ]{1}[a-záéíóőöúűü]{2,10}$/i;
    let keresztnevElsoKaraktere = vizsgalandoKeresztnev.charAt(0).toUpperCase();
    let elsoNagybetusEgyezes = vizsgalandoKeresztnev.charAt(0) === keresztnevElsoKaraktere;
    let keresztnevKisbetukkel = "";
    let elsoKarkatereNincsVizsgalandoKeresztnev = "";
    let kisbetukEgyezese = false;

    
    for (let i = 1; i <= vizsgalandoKeresztnev.length - 1; i++) {
        keresztnevKisbetukkel += vizsgalandoKeresztnev.charAt(i).toLowerCase();
        elsoKarkatereNincsVizsgalandoKeresztnev += vizsgalandoKeresztnev[i];
    }


    if (keresztnevKisbetukkel === elsoKarkatereNincsVizsgalandoKeresztnev) {
        kisbetukEgyezese = true;
    }
    else {
        kisbetukEgyezese = false;
    }


    if (minta.test(vizsgalandoKeresztnev) && elsoNagybetusEgyezes && kisbetukEgyezese)
    {
        return true;
    }
    else {
        return false;
    }
}


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


function validTelefonSzam(vizsgalandoTelefonSzam) {
    let minta = /^[0-9]{3}\-[0-9]{4}$/i;
    if (minta.test(vizsgalandoTelefonSzam))
    {
        return true;
    }
    else {
        return false;
    }
}


function bekuldotAdatokEllenorzese() {
    let uzenoResz = document.querySelector("#uzenoFelulet");
    let vezeteknev = document.querySelector("#vezNev").value;
    let keresztnev = document.querySelector("#kerNev").value;
    let emailCim = document.querySelector("#email").value;
    let telefonSzam = document.querySelector("#tel").value;
    
    uzenoResz.style.backgroundColor = "red";
    uzenoResz.style.padding = "8px";
    uzenoResz.style.fontWeight = "bold";

    if (emailCim == "" && vezeteknev == "" && keresztnev == "" && telefonSzam) {
        uzenoResz.innerHTML = "Nincs kitöltve egyik mező sem!";
    }
    else if (vezeteknev == "") {
        uzenoResz.innerHTML = "Nincs kitöltve az vezetéknév mező!";
    }
    else if (keresztnev == "") {
        uzenoResz.innerHTML = "Nincs kitöltve az keresztnév mező!";
    }
    else if (emailCim == "") {
        uzenoResz.innerHTML = "Nincs kitöltve az e-mail cím mező!";
    }
    else if (telefonSzam == "") {
        uzenoResz.innerHTML = "Nincs kitöltve a telefonszám mező!";
    }
    else if (!validVezeteknev(vezeteknev)) {
        uzenoResz.innerHTML = "A vezetéknév formátuma nem megfelelő.";
    }
    else if (!validKeresztnev(keresztnev)) {
        uzenoResz.innerHTML = "A keresztnév formátuma nem megfelelő.";
    }
    else if (!validEmail(emailCim)) {
        uzenoResz.innerHTML = "Az e-mail cím formátuma nem megfelelő.";
    }
    else if (!validTelefonSzam(telefonSzam)) {
        uzenoResz.innerHTML = "A telefonszám formátuma nem megfelelő.";
    }
    else if (vezeteknev == keresztnev) {
        uzenoResz.innerHTML = "A vezeték és a keresztnév nem egyezhet."
    }
    else {
        ujElemHozzaad();
        uzenoResz.style.backgroundColor = "green";
        uzenoResz.innerHTML = "Adatok rögzítése sikeres";
    }
}