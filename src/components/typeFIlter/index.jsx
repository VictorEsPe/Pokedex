import { SelectContainer } from "./StyledTypeFilter";
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';

const TypeFilter = ({selectedType, setSelectedType}) => {
   const { theme } = useContext(ThemeContext);

  const pokemonTypes = [
    "normal", "fire", "water", "electric", "grass", "ice",
    "fighting", "poison", "ground", "flying", "psychic", "bug",
    "rock", "ghost", "dragon", "dark", "steel", "fairy"
  ];

  const handleOptionChange = (event) => {
    setSelectedType(event.target.value);
  }
  
  return (
    <SelectContainer theme={theme}>
      <label htmlFor="select-type">Searching for the type: </label>

      <select name="select-type" id="select-type" onChange={handleOptionChange} value={selectedType}>
        <option value="all">All types</option>
        {pokemonTypes.map((type, index) => (
          <option key={index} value={type}>{type}</option>
        ))}
      </select>
    </SelectContainer>
  )
}

export { TypeFilter };