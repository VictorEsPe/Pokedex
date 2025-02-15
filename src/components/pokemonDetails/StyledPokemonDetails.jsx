import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LoadMoreBtn } from '../pokemonCard/StyledPokemonCard';

const FallbackMessage = styled.p`
  text-align: center;
  padding: 30px;
  color: ${props => props.theme.textColor};
`;
const GoBackBtn = styled(LoadMoreBtn)`
  margin-top: 30px;
  align-self: center;
`;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  gap: 18px;
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.textColor};
`;

const StyledPokemonDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  padding: 25px 40px;
  font-size: 16px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(2, 2, 2, 0.25);
  border: 1px solid lightgray;
  font-family: 'IBM Plex Mono', sans-serif;

  @media (max-width: 600px) {
    width: 100%;
  }

  & .pokemon-img-frame {
    background-color: #79ff848f;
    width: 100%;
    display: flex;
    justify-content: center;

    & img {
      height: 150px;
    }
  }

  & div.pokemon-name {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  & h2,
  span.ability {
    font-family: 'VT323', sans-serif;
    text-transform: capitalize;
    letter-spacing: 2px;
  }

  & h2 {
    font-size: 30px;
  }

  & ul.type-list {
    display: flex;
    gap: 15px;
  }

  & div.ability-list ul li {
    margin-top: 10px;

    & span.ability {
      font-size: 24px;
      font-weight: 700;
    }
  }

  & div.move-list ul {
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }

    & li {
      border-radius: 10px;
      box-shadow: 2px 2px 5px rgba(2, 2, 2, 0.25);
      border: 1px solid lightgray;
      text-align: center;
      padding: 10px;
    }
  }
`;

const TypeItem = styled.li`
  padding: 8px 16px;
  border-radius: 8px;
  display: flex;
  color: white;
  font-size: 18px;
  letter-spacing: 1.2px;

  background-color: ${({ className }) => {
    switch (className) {
      case 'fire':
        return '#F08030';
      case 'water':
        return '#6890F0';
      case 'grass':
        return '#78C850';
      case 'electric':
        return '#F8D030';
      case 'ice':
        return '#98D8D8';
      case 'fighting':
        return '#C03028';
      case 'poison':
        return '#A040A0';
      case 'ground':
        return '#E0C068';
      case 'flying':
        return '#A890F0';
      case 'psychic':
        return '#F85888';
      case 'bug':
        return '#A8B820';
      case 'rock':
        return '#B8A038';
      case 'ghost':
        return '#705898';
      case 'dark':
        return '#705848';
      case 'dragon':
        return '#7038F8';
      case 'steel':
        return '#B8B8D0';
      case 'fairy':
        return '#EE99AC';
      default:
        return '#A8A878';
    }
  }};
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
`;

export {
  FallbackMessage,
  GoBackBtn,
  Container,
  StyledPokemonDescription,
  TypeItem,
  StyledLink,
};
