const connectionToSecondType = document.querySelector(".connectionToSecondType")
const pokemonInformationSection = document.querySelector(".pokemonInformation");

const identificationOfThePokemon = document.querySelector(".identificationOfThePokemon");
const nameOfThePokemon = document.querySelector(".nameOfThePokemon");
const frontImageOfThePokemon = document.querySelector(".frontImageOfThePokemon");
const backImageOfThePokemon = document.querySelector(".backImageOfThePokemon");
const firstTypeOfThePokemon = document.querySelector(".firstTypeOfThePokemon");
const secondTypeOfThePokemon = document.querySelector(".secondTypeOfThePokemon");
const heightOfThePokemon = document.querySelector(".heightOfThePokemon");
const weightOfThePokemon = document.querySelector(".weightOfThePokemon");

function searchPokemonByName(pokemonName) {
    console.log(pokemonName)
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName.toLowerCase())
        .then(response => response.json())
        .then(data => {
            identificationOfThePokemon.textContent = data["id"];
            nameOfThePokemon.textContent = data["name"];
            frontImageOfThePokemon.src = data["sprites"]["front_default"] || "";
            backImageOfThePokemon.src = data["sprites"]["back_default"] || "";
            const typesOfThePokemon = data["types"];
            const firstType = typesOfThePokemon[0];
            const secondType = typesOfThePokemon[1];
            firstTypeOfThePokemon.textContent = firstType["type"]["name"];
            if (secondType) {
                secondTypeOfThePokemon.textContent = secondType["type"]["name"];
                connectionToSecondType.removeAttribute("hidden");
                secondTypeOfThePokemon.removeAttribute("hidden");
            } else {
                secondTypeOfThePokemon.textContent = "";
                connectionToSecondType.setAttribute("hidden", "hidden");
                secondTypeOfThePokemon.setAttribute("hidden", "hidden");
            }
            heightOfThePokemon.textContent = data["height"];
            weightOfThePokemon.textContent = data["weight"];
            pokemonInformationSection.removeAttribute("hidden");
        });
}