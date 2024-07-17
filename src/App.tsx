import { useEffect, useMemo, useState } from 'react';
import './App.css';
import { PokemonItem, fetchPokemon } from './api';

export default function App() {
  const [pokemonData, setPokemonData] = useState<PokemonItem[] | null>(null);
  const [sortOrder, setSortOrder] = useState('release');
  const [pokemonTypes, setPokemonTypes] = useState<Record<string, string[]>>(
    {}
  );

  const sortPokemon = () => {
    if (!pokemonData) return null;
    const sortedPokemon = [...pokemonData].sort((a, b) => {
      if (sortOrder === 'az') return a.name.localeCompare(b.name);
      if (sortOrder === 'za') return b.name.localeCompare(a.name);
      return a.cardNumber - b.cardNumber;
    });
    return sortedPokemon;
  };

  const sortedPokemonData = useMemo(sortPokemon, [pokemonData, sortOrder]);

  useEffect(() => {
    if (pokemonData) {
      pokemonData.forEach((pokemon) => {
        fetch(pokemon.url)
          .then((response) => response.json())
          .then((data) => {
            setPokemonTypes((prev) => ({
              ...prev,
              [pokemon.name]: data.types.map((t: any) => t.type.name),
            }));
          });
      });
    }
  }, [pokemonData]);

  useEffect(() => {
    fetchPokemon().then((data) => setPokemonData(data));
  }, []);

  return (
    <div className="App">
      <h1>Pokemon</h1>
      <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
        <option value="release">Release number</option>
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
      </select>
      <div className="pokemon-grid">
        {sortedPokemonData?.map((pokemon: PokemonItem, index: number) => (
          <div
            key={pokemon.name}
            className="pokemon-card"
            data-testid="pokemon-card"
          >
            <img
              className="pokemon-card-sprite"
              alt={pokemon.name}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.cardNumber}.png`}
            />
            <div className="pokemon-card-text-container">
              <span
                className="pokemon-card-name"
                data-testid="pokemon-card-name"
              >
                {pokemon.name}
              </span>
              <span
                className="pokemon-card-number"
                data-testid="pokemon-card-number"
              >
                {String(pokemon.cardNumber).padStart(3, '0')}
              </span>
              <div className="pokemon-card-types">
                {pokemonTypes[pokemon.name]?.join(', ')}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
