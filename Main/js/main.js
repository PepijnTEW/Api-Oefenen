const pokemonImg = document.getElementById("js--pokemon-img");
const catchButton = document.getElementById("js--catch-button");
const pokemonText = document.getElementById("js--pokemon-text");
const buttonImg = document.getElementById("buttonImg");
let randomNumber = Math.floor(Math.random() * 250 + 1);
let gamePlayed = false;

let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/"+ randomNumber)
    .then(function(responce){
        return responce.json();
    })
    .then(function(realData){
        pokemonImg.src = realData.sprites.front_default;
        pokemonText.innerText = "A wild "+realData.name+" appeared!";
    });

let age = fetch(" https://api.agify.io?name=michael")
    .then(function (responce) {
        return responce.json();
    })
    .then(function (ageData) {
    console.log(ageData);
    });
catchButton.onclick = function () {

    let id = null;
    let pos = 0;

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
        let catchNumber = Math.floor(Math.random() * 2);
        if (catchNumber === 0) {
            pokemonText.innerText = "Fled!";
        }
        else {
            pokemonText.innerText = "Caught!";
        }
    }
    gamePlayed = true;
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
    }, 500);
    setTimeout(() => {

        if (gamePlayed === true) {
            randomNumber = Math.floor(Math.random() * 250 + 1);
            let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/"+ randomNumber)
            .then(function(responce){
                return responce.json();
        })
        .then(function(realData){
            pokemonImg.src = realData.sprites.front_default;
            pokemonText.innerText = "A wild "+realData.name+" appeared!";
        });
        }
        gamePlayed = false;

    }, 1000);

    
}