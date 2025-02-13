const getPokemonsList = async () => {
  const pokemonList = [];

  try {
    for (let i = 0; i < 10; i++) {
      const pokemonId = Math.floor(Math.random() * 1000) + 1;

      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      );
      const data = await response.json();

      const isAlreadyInList = pokemonList.some(
        pokemon => pokemon.id === data.id
      );

      if (!isAlreadyInList) pokemonList.push(data);
    }
  } catch (error) {
    pokemonList.push('Oops! Ocorreu um erro ao buscar os pokemons 😥')
  }

  return pokemonList;
};

const getPokemon = async id => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    return data;
  } catch (error) {
    // TODO: desenvolver tratamento de erro
    console.log(error);
  }
};

export { getPokemonsList, getPokemon };
