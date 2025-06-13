import { refs } from "./refs.js";
import { getPokemonInfo } from "./getPokemon.js";


export async function preparationInfo() {
  const data = await getPokemonInfo(refs.inputForSearchPokemons.value);

  let name = document.createElement("p");
  name.innerText = data.name;

  const type = document.createElement("p");
  type.innerText = data.types[0].type.name;

  const mass = document.createElement("p");
  mass.innerText = data.weight;

  const ability = document.createElement("p");
  data.stats.forEach((elem) => {
    ability.innerHTML += ` ${elem.stat.name}`;
  });

  let arr = [name, type, mass, ability];

  
  return arr;
}
