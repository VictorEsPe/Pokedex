import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import { getPokemon } from '../../services/getPokemons';
import { getAbilitiesDescription } from '../../services/getAbilitiesDescription';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  StyledFallbackMessage,
  StyledGoBackBtn,
  StyledContainer,
  StyledPokemonDescription,
  StyledTypeItem,
  StyledLink,
} from './StyledPokemonDetails';

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState(null);
  const [abilityDescriptionList, setAbilityDescriptionList] = useState([]);
  const { id } = useParams();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await getPokemon(id);
      setPokemon(response);
    };

    fetchPokemon();
  }, []);

  useEffect(() => {
    const fetchAbilities = async () => {
      if (!pokemon) return;

      const abilityNameListLength = pokemon.abilities.length;
      const abilityList = [];

      for (let i = 0; i < abilityNameListLength; i++) {
        const abilityUrl = pokemon.abilities[i].ability.url;

        try {
          const response = await getAbilitiesDescription(abilityUrl);
          // garante que a descrição venha em inglês
          const englishDescription = response.effect_entries.find(
            entry => entry.language.name === 'en'
          );

          abilityList.push(englishDescription.effect);
        } catch (error) {
          abilityList.push('An error occured while loading the description.');
        }
      }

      setAbilityDescriptionList(abilityList);
    };

    fetchAbilities();
  }, [pokemon]);

  if (
    pokemon ===
    'Oops! An error occurred while fetching this pokemon`s informations 😥'
  )
    return (
      <>
        <StyledLink to="/">
          <StyledGoBackBtn theme={theme} className="link-btn">
            Return
          </StyledGoBackBtn>
        </StyledLink>
        <StyledFallbackMessage theme={theme}>{pokemon}</StyledFallbackMessage>
      </>
    );

  if (abilityDescriptionList.length === 0)
    return (
      <StyledFallbackMessage theme={theme}>
        Loading Pokemon...
      </StyledFallbackMessage>
    );

  return (
    <StyledContainer theme={theme}>
      <StyledLink to="/">
        <StyledGoBackBtn theme={theme} className="link-btn">
          Return
        </StyledGoBackBtn>
      </StyledLink>

      <StyledPokemonDescription>
        <div className="pokemon-img-frame">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>

        <div className="pokemon-name">
          <h2>{pokemon.name}</h2>
          <p>N° {pokemon.id}</p>
        </div>

        <ul className="type-list">
          {pokemon.types.map((typeObj, index) => (
            <StyledTypeItem key={index} className={typeObj.type.name}>
              {typeObj.type.name}
            </StyledTypeItem>
          ))}
        </ul>

        <div className="ability-list">
          <h2>Abilities</h2>
          <ul>
            {pokemon.abilities.map((abilityObj, index) => (
              <li key={index}>
                <span className="ability">{abilityObj.ability.name}: </span>
                {abilityDescriptionList[index]}
              </li>
            ))}
          </ul>
        </div>
        <div className="move-list">
          <h2>Moves</h2>
          <ul>
            {pokemon.moves.map((moveObj, index) => (
              <li key={index}>{moveObj.move.name}</li>
            ))}
          </ul>
        </div>
      </StyledPokemonDescription>
    </StyledContainer>
  );
};

export { PokemonDetails };
