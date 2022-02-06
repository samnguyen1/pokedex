import { Pokemon } from "../../model/Pokemon";

const initialState = {
  id: 1,
  pokemon: [] as any,
  isLoading: false,
};

export const getPrevPokemon = () => ({
  type: "PREV_POKEMON",
});

export const getNextPokemon = () => ({
  type: "NEXT_POKEMON",
});

export const setPokemon = (id: number, pokemon: Pokemon) => ({
  type: "SET_POKEMON",
  id,
  pokemon,
});

export const getPokemon = () => ({
  type: "GET_POKEMON",
});

export const pokemonReducer = (state = initialState, action: any) => {
  let newState = { ...state };
  switch (action.type) {
    case "GET_POKEMON":
      newState.isLoading = false;
      break;
    case "SET_POKEMON":
      newState.isLoading = false;
      newState.id = action.id;
      newState.pokemon = newState.pokemon.filter(
        (item: { id: number }) => item.id !== action.id
      );
      newState.pokemon = [...newState.pokemon, action.pokemon];
      break;
    case "NEXT_POKEMON":
      newState.isLoading = true;
      break;
    case "PREV_POKEMON":
      newState.isLoading = true;
      break;
  }
  console.log(newState.pokemon);
  return { ...newState };
};
