import { all, fork } from "redux-saga/effects";
import PokemonSaga from "./handlers/pokemonSagas";

export function* watchPokemon() {
  yield all([fork(PokemonSaga)]);
}
