import { getPokemon } from '../../services/getPokemons';
import { getMovesDescription } from '../../services/getMovesDescription';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState(null);
  const [moveDescriptionList, setMoveDescriptionList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await getPokemon(id);
      setPokemon(response);
    };

    fetchPokemon();
  }, []);

  useEffect(() => {
    const fetchMoves = async () => {
      if (!pokemon) return;

      const moveNameListLength = pokemon.moves.length;
      const moveList = [];

      for (let i = 0; i < moveNameListLength; i++) {
        const moveUrl = pokemon.moves[i].move.url;

        try {
          const response = await getMovesDescription(moveUrl);

          moveList.push(response.effect_entries[0].effect);
        } catch (error) {
          moveList.push('Erro ao carregar descrição.');
        }
      }

      setMoveDescriptionList(moveList);
    };

    fetchMoves();
  }, [pokemon]);

  if (!pokemon || moveDescriptionList.length === 0) return <p>Carregando...</p>;

  return (
    <div>
      <div className="pokemon-img-frame">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>

      <p>N° {pokemon.id}</p>
      <h2>{pokemon.name}</h2>

      <ul className="type-list">
        {pokemon.types.map((typeObj, index) => (
          <li key={index} className={typeObj.type.name}>
            {typeObj.type.name}
          </li>
        ))}
      </ul>

      <div className="ability-list">
        <h2>Habilidades</h2>

        <ul>
          {pokemon.abilities.map((abilityObj, index) => (
            <li key={index}>{abilityObj.ability.name}</li>
          ))}
        </ul>
      </div>

      <div className="move-list">
        <h2>Movimentos</h2>

        <ul>
          {pokemon.moves.map((moveObj, index) => (
            <li key={index}>
              <h3>{moveObj.move.name}:</h3>
              <p>{moveDescriptionList[index]}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { PokemonDetails };
