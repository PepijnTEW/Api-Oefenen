const pokemonImg = document.getElementById("js--pokemon-img");
const catchButton = document.getElementById("js--catch-button");
const newPokemon = document.getElementById("js--new-pokemon")
const pokemonText = document.getElementById("js--pokemon-text");
const buttonImg = document.getElementById("buttonImg");
const inputFlied = document.getElementById("js--input");
const nameText = document.getElementById("js--name");
let randomNumber = Math.floor(Math.random() * 250 + 1);
let gamePlayed = false;


//Loads pokeApi
let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/"+ randomNumber)
    .then(function(responce){
        return responce.json();
    })
    .then(function(realData){
        pokemonImg.src = realData.sprites.front_default;
        pokemonText.innerText = "A wild "+realData.name+" appeared!";
    });

//Handels everything on button click(Pokemon)
catchButton.onclick = function () {

    let id = null;
    let pos = 0;

    //Animation for Pokeball(Going up)
    if (gamePlayed === false) {
            clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
      if (pos == -90) {
        clearInterval(id);
      } else {
        pos = pos - 5;
        buttonImg.style.top = pos + 'px';
      }
    } 
        //Chances of catching the pokemon
        let catchNumber = Math.floor(Math.random() * 2);
        if (catchNumber === 0) {
            pokemonText.innerText = "Fled!";
        }
        else {
            pokemonText.innerText = "Caught!";
        }
    }
    gamePlayed = true;
    //Animation for Pokeball(going back down)
    setTimeout(() => {
        clearInterval(id);
        id = setInterval(frame);
        function frame() {
          if (pos == 0) {
            clearInterval(id);
          } else {
            pos = pos +2.5;
              buttonImg.style.top = pos + 'px';
          }
        }
        pokemonImg.src = '../imgs/ffffff.png';
    }, 500);
}

//New Pokemon button
newPokemon.onclick = function(){
    if (gamePlayed === true) {
        randomNumber = Math.floor(Math.random() * 250 + 1);
        let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/"+ randomNumber)
        .then(function(responce){
            return responce.json();
    })
    //Makes new Pokemon
    .then(function(realData){
        pokemonImg.src = realData.sprites.front_default;
        pokemonText.innerText = "A wild "+realData.name+" appeared!";
    });
    }
    gamePlayed = false;
}

//Agify Code

inputFlied.onkeyup = function(event){
    if(event.keyCode === 13){
        //Loads Agify and configures it
        let name = inputFlied.value
        let age = fetch(" https://api.agify.io?name="+name)
        .then(function (responce) {
            return responce.json();
        })
        .then(function (echteData) {
            inputFlied.style.display = 'none';
            nameText.innerText = echteData.age;
        });
    }
}