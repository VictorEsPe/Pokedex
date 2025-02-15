import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import { getPokemon } from '../../services/getPokemons';
import { getAbilitiesDescription } from '../../services/getAbilitiesDescription';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  FallbackMessage,
  GoBackBtn,
  Container,
  StyledPokemonDescription,
  TypeItem,
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
          abilityList.push('Erro ao carregar descrição.');
        }
      }

      setAbilityDescriptionList(abilityList);
    };

    fetchAbilities();
  }, [pokemon]);

  if (
    pokemon ===
    'Oops! Houve um erro ao tentar buscar as informações deste pokemon 😥'
  )
    return (
      <>
        <StyledLink to="/">
          <GoBackBtn theme={theme} className="link-btn">
            Voltar
          </GoBackBtn>
        </StyledLink>
        <FallbackMessage theme={theme}>{pokemon}</FallbackMessage>
      </>
    );

  if (abilityDescriptionList.length === 0)
    return (
      <FallbackMessage theme={theme}>Carregando Pokemon...</FallbackMessage>
    );

  return (
    <Container theme={theme}>
      <StyledLink to="/">
        <GoBackBtn theme={theme} className="link-btn">
          Voltar
        </GoBackBtn>
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
            <TypeItem key={index} className={typeObj.type.name}>
              {typeObj.type.name}
            </TypeItem>
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
    </Container>
  );
};

export { PokemonDetails };
