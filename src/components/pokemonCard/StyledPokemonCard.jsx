import styled from 'styled-components';
import { Button } from '../button';

const PokedexContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 80px ;
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.textColor};
`;

const PokemonCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  font-family:'VT323', sans-serif;

  & .pokemon-card {
    display: flex;
    flex-direction: column;
    width: 250px;
    padding: 10px;
    align-items: flex-start;
    justify-content: space-around;
    font-size: 20px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(2, 2, 2, 0.250);
    transition: all .2s ease-in-out;
    border: 1px solid lightgray;

    &:hover {
      transform: scale(1.02);
      box-shadow: 10px 10px 20px rgba(2, 2, 2, 0.250);
    }

    & .pokemon-img-frame {
      background-color: #79ff848f;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`

const LoadMoreBtn = styled(Button)`
  padding: 15px;
  box-shadow: 2px 2px 7px rgba(2, 2, 2, 0.514);
  font-size: 18px;
  border-radius: 10px;
  background-color: ${props => props.theme.button.bgColor};
  color: #e0e0e0;
  transition: all .2s ease-in-out;
  margin-top: 30px;
  
  &:hover {
    background-color: ${props => props.theme.button.hover};;
    box-shadow: inset 4px 4px 5px rgba(2, 2, 2, 0.842);
  }
  `

export { PokedexContainer, PokemonCardContainer, LoadMoreBtn };
