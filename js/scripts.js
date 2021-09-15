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



// contenitore di Icone
const contboxIcon = document.getElementById("boxicon");


// ciclo su tutte le Icone ed inserisco il markup HTML da inserire:
boxIcon.forEach(
    (element) => {
        const { name, family, prefix } = element; //destrutturazione

        contboxIcon.innerHTML += `
            <div class="squareAnimal">
            <i class="${family} ${prefix}${name}"></i>
                <div class="nomi-Icone">${name}</div>
            </div> ` ;
    }
);


// coloriamo le Icone 
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
        element.color = colors[element.category];
        return element;
    }

);

console.log(colorIcon);



