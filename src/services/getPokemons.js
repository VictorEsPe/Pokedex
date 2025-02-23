const getPokemonsList = async (
  existingPokemonsIds = new Set(),
  selectedType
) => {
  const pokemonList = [];

  try {
    while (pokemonList.length < 10) {

      const pokemonId = Math.floor(Math.random() * 1000) + 1;

      if(!existingPokemonsIds.has(pokemonId)) {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
        );
        const data = await response.json();
    
        if (selectedType !== 'all') {
          const typeMatches = data.types.some(
            typeObj => typeObj.type.name === selectedType
          );
    
          if (typeMatches) {
            pokemonList.push(data);
            existingPokemonsIds.add(data.id);
          }
        } else {
          pokemonList.push(data);
          existingPokemonsIds.add(data.id);
        }
      }
    }
  } catch (error) {
    pokemonList.push('Oops! Ocorreu um erro ao buscar os pokemons 😥');
  }
  
  return pokemonList;
};

const getPokemon = async id => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    return data;
  } catch (error) {
    return 'Oops! Houve um erro ao tentar buscar as informações deste pokemon 😥';
  }
};

export { getPokemonsList, getPokemon };
