import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import { getPokemonsList } from '../../services/getPokemons';
import { PokedexContainer, PokemonCardContainer, LoadMoreBtn } from './StyledPokemonCard';
import { Link } from 'react-router-dom';

const PokemonCard = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [buttonClick, setButtonClick] = useState(false);

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await getPokemonsList();
      setPokemonList(pokemonList.concat(response));     
    };

    fetchPokemons();
    
  }, [buttonClick]);

  return (
    <PokedexContainer theme={theme}>
      {pokemonList.length === 0 && <p className="loading-message">Carregando pokemons...</p>}

      <PokemonCardContainer>
        {pokemonList.map(pokemon => (
          <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id}>
            <div  className="pokemon-card">
              <div className="pokemon-img-frame"><img src={pokemon.sprites.front_default} alt={pokemon.name} /></div>
              <p>N° {pokemon.id}</p>
              <h2>{pokemon.name}</h2>
            </div>
          </Link>
        ))}
      </PokemonCardContainer>

      <LoadMoreBtn onClick={() => {
        setButtonClick(true);
        pokemonList.length === 20 && alert('Limite de busca atingido');
        }} pokemonListLength={pokemonList.length}
        className="load-more-btn"
        theme={theme}
        >Mostrar mais</LoadMoreBtn>
    </PokedexContainer>
  );
};

export { PokemonCard };
