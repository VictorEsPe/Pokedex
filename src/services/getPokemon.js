const getPokemon = async id => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    return data;
  } catch (error) {
    return 'Oops! An error occurred while fetching this pokemon`s informations 😥';
  }
};

export { getPokemon };