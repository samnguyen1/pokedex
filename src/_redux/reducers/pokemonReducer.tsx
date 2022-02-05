import { Pokemon } from "../../model/Pokemon";

const initialState = {
  id: 1,
  pokemon: [],
};


export const getPrevPokemon = (pokemon: Pokemon[]) => ({
  type: "PREV_POKEMON",
  pokemon
})

export const getNextPokemon = (pokemon: Pokemon[]) => ({
  type: "NEXT_POKEMON",
  pokemon
})

export const setPokemon = (pokemon: Pokemon[]) => ({
  type: "SET_POKEMON",
  pokemon
})

export const getPokemon1 = () => ({
  type: "GET_POKEMON"
})

export const pokemonReducer = (state = initialState, action: any) => {
  const newState = { ...state };
  newState.pokemon = action
  switch (action.type) {
    case "SET_POKEMON":
      return{...newState};
    case "NEXT_POKEMON":
      newState.id += action.value;
      return{...newState};
    case "PREV_POKEMON":
      newState.id -= action.value;
      return{...newState};
  }
  return newState;
};
