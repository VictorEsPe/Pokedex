import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import { getPokemonsList } from '../../services/getPokemons';
import {
  ErrorMessageParagraph,
  PokedexContainer,
  PokemonCardContainer,
  LoadMoreBtn,
} from './StyledPokemonCard';
import { Link } from 'react-router-dom';
import { TypeFilter } from '../typeFIlter';

const PokemonCard = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [selectedType, setSelectedType] = useState('all');

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const fetchPokemons = async () => {
      const existingIds = new Set(pokemonList.map(pokemon => pokemon.id));
      const newPokemons = await getPokemonsList(existingIds, selectedType);

      setPokemonList([...pokemonList, ...newPokemons]);
    };

    setButtonClicked(false);
    fetchPokemons();
  }, [buttonClicked]);

  useEffect(() => {
    const fetchPokemonsByType = async () => {
      const existingIds = new Set(pokemonList.map(pokemon => pokemon.id));
      const newPokemons = await getPokemonsList(existingIds, selectedType);

      setPokemonList([...newPokemons]);
    };

    fetchPokemonsByType();
  }, [selectedType]);

  if (pokemonList[0] === 'Oops! Ocorreu um erro ao buscar os pokemons 😥')
    return (
      <ErrorMessageParagraph theme={theme}>
        {pokemonList[0]}
      </ErrorMessageParagraph>
    );

  return (
    <PokedexContainer theme={theme}>
      <TypeFilter
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />

      {pokemonList.length === 0 && (
        <p className="loading-message">Loading pokemons...</p>
      )}

      <PokemonCardContainer>
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
      </PokemonCardContainer>

      <LoadMoreBtn
        onClick={() =>
          pokemonList.length === 20
            ? alert('Limite de busca atingido')
            : setButtonClicked(true)
        }
        className="load-more-btn"
        theme={theme}
      >
        Load more
      </LoadMoreBtn>
    </PokedexContainer>
  );
};

export { PokemonCard };
