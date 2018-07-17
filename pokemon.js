let hp = document.getElementById("hp");
let attack = document.getElementById("attack");
let defense = document.getElementById("defense");
let namer = document.getElementById("namer");
let talents = document.getElementById("arrayOfSkills");
let image= document.getElementById("image")

class Pokemon {
    constructor(name, hp, attack, defense, abilities, picUrl) {
        this.name = name
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;
        this.picUrl = picUrl
    }
};

class Trainer {
    constructor() {
        this.listOfPokemon = {};
    }
    all() {
        // console.log(this.listOfPokemon);
        return Object.values(this.listOfPokemon);
    };

    get(nameOfPoke) {
        return (this.listOfPokemon[nameOfPoke])

    }
    add(pokemonObject) {
        this.listOfPokemon[pokemonObject.name] = pokemonObject
    }
};

let ben = new Trainer();

let nameOfPokemon = "pikachu";

link = "https://pokeapi.co/api/v2/pokemon/" + nameOfPokemon;

link = "https://pokeapi-nycda.firebaseio.com/pokemon/25.json"

function changePoke(link) {
    axios.get(link).then((response) => {
        let allData = response.data;
        console.log(allData);
        let statistics = allData.stats;
        // console.log(statistics);

        // name 
        let pokeName = allData.name;
        // console.log(pokeName);
        // hp level
        let aychPee = statistics[5].base_stat;
        // attack level
        let pokeAttack = statistics[4].base_stat;
        // defense level
        let pokeDefense = statistics[3].base_stat;

        let pic = allData.sprites.front_default;

        // abilities - array of strings
        let arrayOfSkills = [];
        let skills = allData.abilities;
        skills.forEach((element) => {
            arrayOfSkills.push(element.ability.name)
        })

        let pokemon = new Pokemon(pokeName, aychPee, pokeAttack, pokeDefense, arrayOfSkills, pic);

        ben.add(pokemon);

        // ben.get(pokemon.pokeName)
        
    }).then( () => {

        image.src = ben.get(nameOfPokemon).picUrl;


        hp.innerText=ben.get(nameOfPokemon).hp;


        attack.innerText=ben.get(nameOfPokemon).attack;


        defense.innerText=ben.get(nameOfPokemon).defense;

        // let arrayOfSkills = document.getElementById("arrayOfSkills");
        // arrayOfSkills.innerText=ben.listOfPokemon.charmander.abilities;


        namer.innerText=ben.get(nameOfPokemon).name;


        // talents.innerText=(ben.get(nameOfPokemon).abilities).toString()
        talents.innerText="blah"
    }
        
    )

};

changePoke(link);

nameOfPokemon = "dragonite"
link = "https://pokeapi-nycda.firebaseio.com/pokemon/149.json"
// link = "https://pokeapi.co/api/v2/pokemon/" + nameOfPokemon;
changePoke(link);

nameOfPokemon = "arcanine"
link = "https://pokeapi-nycda.firebaseio.com/pokemon/59.json"
// link = "https://pokeapi.co/api/v2/pokemon/" + nameOfPokemon;
changePoke(link);

// ben.all()


setTimeout(ben.all(), 1000);

i=0


function slideNext(){

    let arrayofPoke = ben.all()

    if (i>arrayofPoke.length-2) {
        i=0;
    } else {
    i++
    }

    namer.innerText = ben.all()[i].name;
    image.src = ben.all()[i].picUrl;
    hp.innerText=ben.all()[i].hp;
    attack.innerText=ben.all()[i].attack;
    defense.innerText=ben.all()[i].defense;
    talents.innerText = ((ben.all()[i].abilities).join(", "))

    // console.log((ben.all()[i].abilities).toString())
    
    // i++;

    // if (i>arrayofPoke.length-1) {
    //     i=0
    // }   
}

function slidePrev(){

    let arrayofPoke = ben.all()

    if (i<1) {
        i=arrayofPoke.length-1
    } else {
        i--;
    }

    namer.innerText = ben.all()[i].name;
    image.src = ben.all()[i].picUrl;
    hp.innerText=ben.all()[i].hp;
    attack.innerText=ben.all()[i].attack;
    defense.innerText=ben.all()[i].defense;
    // let talents = document.getElementById("arrayOfSkills");
    talents.innerText = (ben.all()[i].abilities).toString()
    
    

    // if (i<0) {
    //     i=arrayofPoke.length-1
    // }   
}

// function nextPic() {

//     if (indexOfPic>picArray.length-2) {
//         indexOfPic=0;
//         image1.src=picArray[indexOfPic];
//     } else {
    
//     indexOfPic++
//     image1.src=picArray[indexOfPic];

//     }
    
// }

// function prevPic() {
     

//     if (indexOfPic<1) {
//         indexOfPic=picArray.length-1;
//         image1.src=picArray[indexOfPic];
//     } else {
//     indexOfPic--
//     image1.src=picArray[indexOfPic];
//     }

   

    
// }