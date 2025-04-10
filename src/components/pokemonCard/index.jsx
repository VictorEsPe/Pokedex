import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import { getPokemonsList } from '../../services/getPokemonList';
import {
  StyledErrorMessageParagraph,
  StyledPokedexContainer,
  StyledPokemonCardContainer,
  StyledLoadMoreBtn,
} from './StyledPokemonCard';
import { Link } from 'react-router-dom';
import { TypeFilter } from '../typeFilterInput';

const PokemonCard = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [selectedType, setSelectedType] = useState('all');

  const { theme } = useContext(ThemeContext);
  const existingIds = new Set(pokemonList.map(pokemon => pokemon.id));

  useEffect(() => {
    const fetchPokemons = async () => {
      const newPokemons = await getPokemonsList(existingIds, selectedType);

      setPokemonList([...pokemonList, ...newPokemons]);
    };

    if(buttonClicked) {
      setButtonClicked(false);
      fetchPokemons();
    }
  }, [buttonClicked]);

  useEffect(() => {
    const fetchPokemonsByType = async () => {
      const newPokemons = await getPokemonsList(existingIds, selectedType);

      setPokemonList([...newPokemons]);
    };

    setPokemonList([])
    fetchPokemonsByType();
  }, [selectedType]);

  if (pokemonList[0] === 'Oops! An error occurred while fetching pokemons 😥')
    return (
      <StyledErrorMessageParagraph theme={theme}>
        {pokemonList[0]}
      </StyledErrorMessageParagraph>
    );

  return (
    <StyledPokedexContainer theme={theme}>
      <TypeFilter
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />

      {pokemonList.length === 0 && (
        <p className="loading-message">Loading pokemons...</p>
      )}

      <StyledPokemonCardContainer>
        {pokemonList.map(pokemon => (
          <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id}>
            <div className="pokemon-card">
              <div className="pokemon-img-frame">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              </div>
              <p>N° {pokemon.id}</p>
              <h2>{pokemon.name}</h2>
            </div>
          </Link>
        ))}
      </StyledPokemonCardContainer>

      <StyledLoadMoreBtn
        onClick={() => setButtonClicked(true)}
        className="load-more-btn"
        theme={theme}
      >
        Load more
      </StyledLoadMoreBtn>
    </StyledPokedexContainer>
  );
};

export { PokemonCard };
