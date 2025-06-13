import { getPokemonInfo } from "./getPokemon.js";
import { refs } from "./refs.js";
import { preparationInfo } from "./preparationInfo.js";
import { addToBest, renderFavorite } from "./addTobest.js";

refs.searchBtn.addEventListener("click", async () => {
  try {
    const prepared = await preparationInfo();

    const infoText = document.querySelector(".info-text");
    infoText.innerHTML = "";

    prepared.forEach((elem) => {
      infoText.appendChild(elem);
    });

    refs.info.style.display = "flex";
    refs.info.style.flexDirection = "column";

    addToBest();
  } catch (error) {
    console.error("помилка");
  }
});


window.addEventListener("DOMContentLoaded", () => {
  const favorites = JSON.parse(localStorage.getItem("favoritePokemons")) || [];
  favorites.forEach((name) => {
    renderFavorite(name);
  });
});
