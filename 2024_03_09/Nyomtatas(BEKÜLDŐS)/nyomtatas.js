function kalkulal(){
    //Űrlapadatok
    const szelesseg=document.getElementById('szelesseg').value;
    const magassag=document.getElementById('magassag').value;
    const papir=document.getElementById('papirtipus').value;
    //Számítások
    let teruletMegj=document.querySelector("#terulet");
    let papirMegj=document.querySelector("#papir");
    let koltsegMegj=document.querySelector("#koltseg");
    let terulet=Math.round((szelesseg*magassag)/10000);    
    let koltseg=terulet*papir;
    teruletMegj.innerHTML = terulet;  
    papirMegj.innerHTML = papirtipus.value;
    koltsegMegj.innerHTML = koltseg;
    //Megjelenítés
    document.getElementById('valasz').style.visibility = "visible";
}

