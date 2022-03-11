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
// -------------------------------------------------------------------------
// PROGRAMMA PRINCIPALE
// contenitore di Icone
const contboxIcon = document.getElementById("boxicon");
// ciclo su tutte le Icone ed inserisco il markup HTML da inserire:
    boxIcon.forEach((element) => { 
    // console.log(element); //debuging ------!!!!!!!!!!!!! verifica in console
    const { name, family, prefix } = element; // attraverso la destrutturazione tiro fuori le proprietà dell obj sottoforma di variabili
    contboxIcon.innerHTML += `<div class="squareAnimal"><i class="${family} ${prefix}${name}"></i><div class="nomi-Icone">${name}</div></div>`;
    }
);
// --------------------------------------------------------------------------





const stampaIcone = (array, container) => {

    container.innerHTML = "";

    array.forEach((element) => {
        // console.log(element); //debuging ------!!!!!!!!!!!!! verifica in console
        const { name, family, prefix, color } = element; // attraverso la destrutturazione tiro fuori le proprietà dell obj sottoforma di variabili
        container.innerHTML += `<div class="squareAnimal"><i class="${family} ${prefix}${name}" style="color: ${color}"></i><div class="nomi-Icone">${name}</div> </div>`;
        }
    );
}





// coloriamo le Icone ***
const colors = {
    food: "violet",
    animal: "green",
    beverage: "orange"
};



// coloriamo le Icone 
const colorIcon = boxIcon.map(
    (element) => {
        // console.log(element)
        // element.color = "verifica";
        // console.log(element.category);
        element.color = colors[element.category]; //***se voglio accedere alle proprietà devo usar le parentesi quadrate perchè il valore è all inrerno di una variabile
        return {
            // name: element.name,       //map
            // family: element.family,
            // prefix: element.prefix,
            // category: element.category,
            ...element,                //spread opertor
            color: colors[element.category] //creazione di un nuovo oggetto
        };
    }
);
// console.log(colorIcon);


stampaIcone(colorIcon, contboxIcon);


// creiamo una select con tipologia icone per poi filtrare nuovamente le Icone
//creo una option per singole categorie



const iconeCategorie = [];
boxIcon.forEach((element) => {
        if (iconeCategorie.includes(element.category) == false ) {
            iconeCategorie.push(element.category);
        }
    }
);

// console.log(iconeCategorie);

const selezioneCategorie = document.getElementById("tipologia")
// console.log(selezioneCategorie);  //debug lettura prova visualizzazione select



iconeCategorie.forEach((element) => {
        selezioneCategorie.innerHTML += `<option value="${element}">${element}</option>`;
    }
);



// azione su una select:
selezioneCategorie.addEventListener("change",
    function() {
        //recupero il valore della sect

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




