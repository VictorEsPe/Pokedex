const getPokemonsList = async (
  existingPokemonsIds = new Set(),
  selectedType
) => {
  const pokemonList = [];

  try {
    while (pokemonList.length < 10) {
      const pokemonId = Math.floor(Math.random() * 1000) + 1;

      if (!existingPokemonsIds.has(pokemonId)) {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
        );
        const data = await response.json();

        selectedType !== 'all'
          ? addMatchingType(
              data,
              selectedType,
              pokemonList,
              existingPokemonsIds
            )
          : addAllTypes(pokemonList, data, existingPokemonsIds);
      }
    }
  } catch (error) {
    pokemonList.push('Oops! An error occurred while fetching pokemons 😥');
    console.error(error)
  }

  return pokemonList;
};

const addAllTypes = (pokemonList, data, existingPokemonsIds) => {
  pokemonList.push(data);
  existingPokemonsIds.add(data.id);
};

const addMatchingType = (
  data,
  selectedType,
  pokemonList,
  existingPokemonsIds
) => {
  const typeMatches = data.types.some(
    typeObj => typeObj.type.name === selectedType
  );

  if (typeMatches) {
    pokemonList.push(data);
    existingPokemonsIds.add(data.id);
  }
};

export { getPokemonsList };
