// Megjelenítés a weboldalon

let main = document.querySelector('.main');


// Bekéri a tömbök hosszát

let tombHossza = Number(prompt("Add meg a tömbök hosszát."));


// Üres tömbök létrehozva

let elsoTomb = [];
let masodikTomb = [];


// Tömb feltöltése random számokkal

for(let i = 0; i < tombHossza; i++) {
  elsoTomb[i] = parseInt(Math.random()*100+1);
}

for(let j = 0; j < tombHossza; j++) {
  masodikTomb[j] = parseInt(Math.random()*100+1);
}


// Összegzés tételek

let elsoTombOsszeg = 0;
for (let k = 0; k < elsoTomb.length; k++) {
  elsoTombOsszeg = elsoTombOsszeg + elsoTomb[k];
}

let masodikTombOsszeg = 0;
for (let z = 0; z < masodikTomb.length; z++) {
  masodikTombOsszeg = masodikTombOsszeg + masodikTomb[z];
}


// Melyik a legnagyobb összegű tömb

if(elsoTombOsszeg > masodikTombOsszeg) {
  console.log(`Első tömb összege: ${elsoTombOsszeg} nagyobb, mint a második tömb összege: ${masodikTombOsszeg} és a kettő összeg közötti különbség: ${elsoTombOsszeg - masodikTombOsszeg}.`);
	main.innerHTML += `Első tömb összege: ${elsoTombOsszeg} nagyobb, mint a második tömb összege: ${masodikTombOsszeg} és a kettő összeg közötti különbség: ${elsoTombOsszeg - masodikTombOsszeg}.`;
} 
else if (elsoTombOsszeg === masodikTombOsszeg) {
  console.log(`Első tömb összege: ${elsoTombOsszeg} egyenlő a második tömb összegével: ${masodikTombOsszeg}.`);
	main.innerHTML += `Első tömb összege: ${elsoTombOsszeg} egyenlő a második tömb összegével: ${masodikTombOsszeg}.`;
}
else {
  console.log(`Második tömb összege: ${masodikTombOsszeg} nagyobb, mint a első tömb összege: ${elsoTombOsszeg} és a kettő összeg közötti különbség: ${masodikTombOsszeg - elsoTombOsszeg}.`);
	main.innerHTML += `Második tömb összege: ${masodikTombOsszeg} nagyobb, mint a első tömb összege: ${elsoTombOsszeg} és a kettő összeg közötti különbség: ${masodikTombOsszeg - elsoTombOsszeg}.`;
}