import React from 'react';
import './PokemonList.scss';

export default function PokemonList({ pokemon }) {
  return (
    <div>
      {pokemon.map((p, index) => (
        <div key={index} className="pokemon-item">
          {p}
        </div>
      ))}
    </div>
  );
}