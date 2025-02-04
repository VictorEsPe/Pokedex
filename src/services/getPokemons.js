const getPokemons = async (id = null) => {
  const pokemonList = [];

  try {
    for (let i = 0; i < 10; i++) {
      const pokemonId = id ?? Math.floor(Math.random() * 1000) + 1;
    
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      );
      const data = await response.json();
      

      pokemonList.push(data);
    }
  } catch (error) {
    
    console.log(error);
    
  }

  return pokemonList;
};

export { getPokemons };
