// array di oggetti(icone)
const boxIcon = [
    {
        name: 'apple-alt',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
    },
    {
        name: 'ice-cream',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
    },
    {
        name: 'fish',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
    },
    {
        name: 'lemon',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
    },
    {
        name: 'hamburger',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
    },
    {
        name: 'pizza-slice',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
    },
    {
        name: 'beer',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
    },
    {
        name: 'glass-whiskey',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
    },
    {
        name: 'wine-bottle',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
    },
    {
        name: 'cocktail',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
    },
    {
        name: 'coffee',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
    },
    {
        name: 'glass-martini',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
    },
    {
        name: 'dragon',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
    },
    {
        name: 'kiwi-bird',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
    },
    {
        name: 'frog',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
    },
    {
        name: 'hippo',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
    },
    {
        name: 'otter',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
    },
    {
        name: 'horse',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
    },
];


//----------------------------------------FOR EACH--------------------------------------------------//
// PROGRAMMA PRINCIPALE
// contenitore di Icone
const contboxIcon = document.getElementById("boxicon"); // lo uso anche per la funzione stampa

// ciclo su tutte le Icone ed inserisco il markup HTML da inserire:
// ---------------------------------------------------------------------------------forEach copiato nella function stampaIcone--------------------------
//     boxIcon.forEach((element) => { 
   
//     const { name, family, prefix} = element; // attraverso la destrutturazione tiro fuori le proprietà dell obj sottoforma di variabili
//     contboxIcon.innerHTML += `<div class="squareAnimal"><i class="${family} ${prefix}${name}"></i><div class="nomi-Icone">${name}</div></div>`;
//     }
// );
// ---------------FOR EACH-----------------------forEach copiato nella function stampaIcone----------------------------------------------------------------------

// N.B: ----------------Creazione di una funzione a scopo didatico da riutilizzare, che Stampi, accettando 2 parametri in ingresso:
const stampaIcone = (array, container) => {

    container.innerHTML = ""; // vuoto il container

    array.forEach((element) => {
        
        const { name, family, prefix, color } = element; // attraverso la destrutturazione tiro fuori le proprietà dell obj sottoforma di variabili
        container.innerHTML += `<div class="squareAnimal"><i class="${family} ${prefix}${name}" style="color: ${color}"></i><div class="nomi-Icone">${name}</div> </div>`;
        }
    );
}
// SOSTITUISCO boxIcon = array
// SOSTITUISCO contboxIcon = container
//--------------------------------------------------------------------------------------------------//







//-----------------------------------MAP--------------------------------------------------------------//
//-----------------------------------------coloriamo le Icone ***
// -----------const colors = -----------info che potrebbe arrivarci dall'esterno
const colors = {
    food: "violet",
    animal: "green",
    beverage: "orange"
};

const colorIcon = boxIcon.map((element) => { element.color = colors[element.category]; //***se voglio accedere alle proprietà devo usar le parentesi quadrate perchè il valore è all inrerno di una variabile
        return {
            ...element, //spread opertor creazione di un nuovo oggetto
            color: colors[element.category] // creazione di un nuovo oggetto per non andare a sovrascrivere
        };
    }
);
// console.log(colorIcon);
stampaIcone(colorIcon, contboxIcon);
//-----------------------------------------coloriamo le Icone ***
//--------------------------------------------------------------------------------------------------//







//-------------------------------------FOR EACH------------------------------------------------------//
// creiamo una select con tipologia icone per poi filtrare nuovamente le Icone
// creo una option per singole categorie
// estrapolo le categorie dalle icone , sono 3!
const iconeCategorie = []; //----------> NUOVO ARRAY PER SALVARE LE CATEGORIE
boxIcon.forEach((element) => {
        if (iconeCategorie.includes(element.category) == false ) {
            iconeCategorie.push(element.category);
        }
    }
);
const selezioneCategorie = document.getElementById("categoria")

iconeCategorie.forEach((element) => {
        selezioneCategorie.innerHTML += `<option value="${element}">${element}</option>`;
    }
);
//--------------------------------------------------------------------------------------------------//






//---------------------------------FILTER ED EVENTO CHANGE------------------------------------------//
// azione su una select Tramite evento Change:
selezioneCategorie.addEventListener("change",
    function() {
        //recupero il valore della select
        const filtroIcone = colorIcon.filter((element) => {
                if (selezioneCategorie.value == "") {
                    return true; 
                }

                if (element.category == selezioneCategorie.value) {
                    return true;
                }
                return false;
            }
        );
        stampaIcone(filtroIcone, contboxIcon);
    }
);
//---------------------------------------------------------------------------------------------------//



