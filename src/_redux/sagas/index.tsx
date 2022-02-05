import { takeLatest } from "redux-saga/effects"
import { handleGetPokemon } from "./handlers/pokemon"


export function* watchPokemon(){
    yield takeLatest("GET_POKEMON", handleGetPokemon);
}