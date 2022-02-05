export const nextPokemon = (dispatch: any) => {
  dispatch({ type: "NEXT_POKEMON", value: 1})
}

export const prevPokemon = (dispatch: any) => {
  dispatch({ type: "PREV_POKEMON", value: 1})
}

export const showPokemon = () => {
  return{
    type: "SHOW_POKEMON"
  }
}


