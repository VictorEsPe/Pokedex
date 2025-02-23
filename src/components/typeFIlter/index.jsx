import { SelectContainer } from "./StyledTypeFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons/faFilter";

const TypeFilter = ({selectedType, setSelectedType}) => {
  const pokemonTypes = [
    "normal", "fire", "water", "electric", "grass", "ice",
    "fighting", "poison", "ground", "flying", "psychic", "bug",
    "rock", "ghost", "dragon", "dark", "steel", "fairy"
  ];

  const handleOptionChange = (event) => {
    setSelectedType(event.target.value);
  }
  
  return (
    <SelectContainer>
      <label htmlFor="select-type"><FontAwesomeIcon icon={faFilter} /></label>

      <select name="select-type" id="select-type" onChange={handleOptionChange} value={selectedType}>
        <option value="all">All</option>
        {pokemonTypes.map((type, index) => (
          <option key={index} value={type}>{type}</option>
        ))}
      </select>
    </SelectContainer>
  )
}

export { TypeFilter };