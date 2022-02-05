import React from 'react';


interface PokemonProps {
    items: {id: number, name: string,
        sprite: string, type: string, abilities: string}[];
};

const PokemonCard: React.FC<PokemonProps> = props => {
    return (
    <div className = "thumb-container">
        <div className = "number">
            {props.items.map(pokemon =>(
            <div className = "pokemon" key={pokemon.id}><img src={pokemon.sprite} alt={pokemon.name} /><div className="detail-wrapper">
                    <h2>{pokemon.name}</h2>
                    <h3>{pokemon.type}</h3>
                    <small>Abilities: {pokemon.abilities}</small>
                </div></div>
            ))}
        </div>
        </div>
    );
};

export default PokemonCard;