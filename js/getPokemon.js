export const getPokemonInfo = async (name) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
  );
  const data = await response.json();
  return data;
};
