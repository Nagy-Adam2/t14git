// Megjelenítés a weboldalon

let main = document.querySelector('.main');


// Tömbők létrehozva

const tombSzinek = ["Piros", "Zöld", "Kék", "Sárga", "Barna", "Szürke"];
const gepnelLevoSzinek = ["Kék", "Sárga", "Piros", "Szürke", "Zöld", "Barna",];


// Szín számának megadása és ellenőrzése

let szinSzama = Number(prompt("Add meg a választott színed számát, ami 1-es piros, 2-es zöld, 3-as kék, 4-ik sárga, 5-ik barna, 6-ik szürke."));

while (szinSzama >= 7 || szinSzama <= 0 || (!parseInt(szinSzama) || szinSzama == "")) {
	alert("Ezen a számon nincs szín.");
	szinSzama = Number(prompt("Add meg újra a választott színed számát, ami 1-es piros, 2-es zöld, 3-as kék, 4-ik sárga, 5-ik barna, 6-ik szürke."));
}


// Géptől választott szín számának megadása és ellenőrzése

let szinSzamaGeptol = Number(prompt("1-től 6-ig válasszál színt a gépetől."));

while (szinSzamaGeptol >= 7 || szinSzamaGeptol <= 0 || (!parseInt(szinSzamaGeptol) || szinSzamaGeptol == "")) {
	alert("Ezen a számon nincs géptől szín.");
	szinSzamaGeptol = Number(prompt("Újra 1-től 6-ig válasszál színt a géptől."));
}



// Megvizsgálja a kapott értékeket, utána eldönti az eredményt

if (szinSzama === 1) {
	const valsztottSzin = tombSzinek[0];

	if (szinSzamaGeptol === 1) {
		const geptolValsztottSzin = gepnelLevoSzinek[0];

		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzinEredmenye}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}

	} 
	else if (szinSzamaGeptol === 2) {
		const geptolValsztottSzin = gepnelLevoSzinek[1];

		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}
		
	}
	else if (szinSzamaGeptol === 3) {
		const geptolValsztottSzin = gepnelLevoSzinek[2];

		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}
		
	}
	else if (szinSzamaGeptol === 4) {
		const geptolValsztottSzin = gepnelLevoSzinek[3];

		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}
		 
	}
	else if (szinSzamaGeptol === 5) {
		const geptolValsztottSzin = gepnelLevoSzinek[4];

		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}
		   
	}
	else if (szinSzamaGeptol === 6) {
		const geptolValsztottSzin = gepnelLevoSzinek[5];

		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}
		    
	}

} 
else if (szinSzama === 2) {
	const valsztottSzin = tombSzinek[1];

	if (szinSzamaGeptol === 1) {
		const geptolValsztottSzin = gepnelLevoSzinek[0];

		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}

	} 
	else if (szinSzamaGeptol === 2) {
		const geptolValsztottSzin = gepnelLevoSzinek[1];

		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}

	}
	else if (szinSzamaGeptol === 3) {
		const geptolValsztottSzin = gepnelLevoSzinek[2];

		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}

	}
	else if (szinSzamaGeptol === 4) {
		const geptolValsztottSzin = gepnelLevoSzinek[3];
		
		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}

	}
	else if (szinSzamaGeptol === 5) {
		const geptolValsztottSzin = gepnelLevoSzinek[4];
		
		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}

	}
	else if (szinSzamaGeptol === 6) {
		const geptolValsztottSzin = gepnelLevoSzinek[5];
		
		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzine}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}

	}

}
else if (szinSzama === 3) {
	const valsztottSzin = tombSzinek[2];
	
	if (szinSzamaGeptol === 1) {
		const geptolValsztottSzin = gepnelLevoSzinek[0];

		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}

	} 
	else if (szinSzamaGeptol === 2) {
		const geptolValsztottSzin = gepnelLevoSzinek[1];

		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}

	}
	else if (szinSzamaGeptol === 3) {
		const geptolValsztottSzin = gepnelLevoSzinek[2];
		
		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}

	}
	else if (szinSzamaGeptol === 4) {
		const geptolValsztottSzin = gepnelLevoSzinek[3];
		
		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}

	}
	else if (szinSzamaGeptol === 5) {
		const geptolValsztottSzin = gepnelLevoSzinek[4];
		
		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}

	}
	else if (szinSzamaGeptol === 6) {
		const geptolValsztottSzin = gepnelLevoSzinek[5];
		
		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}

	}

}
else if (szinSzama === 4) {
	const valsztottSzin = tombSzinek[3]; 
	
	if (szinSzamaGeptol === 1) {
		const geptolValsztottSzin = gepnelLevoSzinek[0];

		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}

	} 
	else if (szinSzamaGeptol === 2) {
		const geptolValsztottSzin = gepnelLevoSzinek[1];

		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}

	}
	else if (szinSzamaGeptol === 3) {
		const geptolValsztottSzin = gepnelLevoSzinek[2];
		
		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}

	}
	else if (szinSzamaGeptol === 4) {
		const geptolValsztottSzin = gepnelLevoSzinek[3];
		
		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}

	}
	else if (szinSzamaGeptol === 5) {
		const geptolValsztottSzin = gepnelLevoSzinek[4];
		
		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}

	}
	else if (szinSzamaGeptol === 6) {
		const geptolValsztottSzin = gepnelLevoSzinek[5];
		
		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}

	}

}
else if (szinSzama === 5) {
	const valsztottSzin = tombSzinek[4];

	if (szinSzamaGeptol === 1) {
		const geptolValsztottSzin = gepnelLevoSzinek[0];

		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}

	} 
	else if (szinSzamaGeptol === 2) {
		const geptolValsztottSzin = gepnelLevoSzinek[1];

		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}

	}
	else if (szinSzamaGeptol === 3) {
		const geptolValsztottSzin = gepnelLevoSzinek[2];
		
		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}

	}
	else if (szinSzamaGeptol === 4) {
		const geptolValsztottSzin = gepnelLevoSzinek[3];
		
		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}

	}
	else if (szinSzamaGeptol === 5) {
		const geptolValsztottSzin = gepnelLevoSzinek[4];
		
		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}

	}
	else if (szinSzamaGeptol === 6) {
		const geptolValsztottSzin = gepnelLevoSzinek[5];
		
		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}

	}

}
else if (szinSzama === 6) {
	const valsztottSzin = tombSzinek[5];;
	
	if (szinSzamaGeptol === 1) {
		const geptolValsztottSzin = gepnelLevoSzinek[0];

		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}

	} 
	else if (szinSzamaGeptol === 2) {
		const geptolValsztottSzin = gepnelLevoSzinek[1];

		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}

	}
	else if (szinSzamaGeptol === 3) {
		const geptolValsztottSzin = gepnelLevoSzinek[2];
		
		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}

	}
	else if (szinSzamaGeptol === 4) {
		const geptolValsztottSzin = gepnelLevoSzinek[3];
		
		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}

	}
	else if (szinSzamaGeptol === 5) {
		const geptolValsztottSzin = gepnelLevoSzinek[4];
		
		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}

	}
	else if (szinSzamaGeptol === 6) {
		const geptolValsztottSzin = gepnelLevoSzinek[5];
		
		if (valsztottSzin === geptolValsztottSzin) {
			console.log(`Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Nyertél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		} else {
			console.log(`Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`);
			main.innerHTML += `Vesztettél. A választott színed: ${valsztottSzin}. A géptől választott színed: ${geptolValsztottSzin}.`;
		}

	}

}