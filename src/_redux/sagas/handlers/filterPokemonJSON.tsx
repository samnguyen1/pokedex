import { Pokemon } from "../../../model/Pokemon";

export const filterPokemonJSON = (props: any) => {
  function capitalise(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  const name = capitalise(props.name);
  const sprite = props.sprites.other.dream_world.front_default;
  let types: string[] = [];
  let abilities: string[] = [];
  for (var i in props.types) {
    types.push(capitalise(props.types[i].type.name));
  }
  for (var j in props.abilities) {
    if (props.abilities[j].is_hidden) {
      abilities.push(capitalise(props.abilities[j].ability.name) + "(hidden)");
    } else {
      abilities.push(capitalise(props.abilities[j].ability.name));
    }
  }
  const pokemon: Pokemon = {
    id: Number(props.id),
    sprite: sprite,
    name: name,
    types: types,
    abilities: abilities,
  };

  return pokemon;
};
