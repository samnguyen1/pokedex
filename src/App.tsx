import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import PokemonCard from "./components/PokemonCard";
import pokeapi from "./api/pokeapi";
import { Pokemon } from "./pokemonData";
import ShowCard from "./components/ShowCard";
import { getPokemon1
 } from "./_redux/reducers/pokemonReducer";
const App: React.FC = () => {
  const [getPokemon, setPokemon] = useState<Pokemon[]>([]);
  const [PokemonId, setPokemonId] = useState<number>(1);

  const getPokemonR = async (pokemonId: number) => {

    function capitalise(value: string){
      return(value.charAt(0).toUpperCase() + value.slice(1))
    }
 
    await pokeapi
      .get(`/pokemon/${pokemonId}`)
      .then((response) => {
        const id = response.data.id;
        const pokemonSprite =
          response.data.sprites.other.dream_world.front_default;
        const name = capitalise(response.data.name);
        var types = "";
        for (var index in response.data.types) {
          var tmpTypes = capitalise(response.data.types[index].type.name);
          if (types) {
            types = types + "/" + tmpTypes;
          } else {
            types = tmpTypes;
          }
        }
        var abilities = "";
        for (var index in response.data.abilities) {
            var tmpAbility = capitalise(response.data.abilities[index].ability.name);
            if (abilities) {
              if (response.data.abilities[index].is_hidden) {
                abilities = abilities + ", " + tmpAbility + "(hidden)";
              } else {
                abilities = abilities + ", " + tmpAbility;
              }              
          }else{
              abilities = tmpAbility
            }
        }
        

        setPokemonId(id);
        setPokemon((prevPokemon) => [
          {
            id: id,
            sprite: pokemonSprite,
            name: name,
            type: types,
            abilities: abilities,
          },
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    getPokemonR(1);
    dispatch(getPokemon1())
  }, [dispatch]);

  const pokemonTest = useSelector((state) => state)
  console.log(pokemonTest)
 

  const handlePrevButton = () => {
    if (PokemonId === 1) {
      (document.getElementById('prev') as HTMLButtonElement).disabled = true;
    } else {
      (document.getElementById('prev') as HTMLButtonElement).disabled = false;
      getPokemonR(PokemonId - 1);
    }
  };

  const handleNextButton = () => {
    if (PokemonId === 151) {
      (document.getElementById('next') as HTMLButtonElement).disabled = true;
    } else {
      (document.getElementById('prev') as HTMLButtonElement).disabled = false;
      getPokemonR(PokemonId + 1);
    }
  };

  return (
    <div className="App">
      Pokemon
      <PokemonCard items={getPokemon} />
      <ShowCard/>
      <button id="prev" onClick={handlePrevButton}> PREVIOUS</button>
      <button id="next" onClick={handleNextButton}> NEXT</button>
    </div>
  );
};

export default App;
