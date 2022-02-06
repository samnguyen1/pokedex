import {
  put,
  call,
  select,
  takeLatest,
  all,
  takeEvery,
  delay,
} from "redux-saga/effects";
import { setPokemon } from "../../reducers/pokemonReducer";
import axios, { AxiosResponse } from "axios";
import { Pokemon } from "../../../model/Pokemon";
import { filterPokemonJSON } from "./filterPokemonJSON";

const getPokemon = (id: number) =>
  axios.get<Pokemon[]>(`https://pokeapi.co/api/v2/pokemon/${id}`);

const getId = (state: any) => state.pokemon.id;
const getPokemonState = (state: any) => state.pokemon.pokemon;

function* handleGetPokemon() {
  try {
    yield delay(600);
    let id: number = yield select(getId);
    let pokemon: Pokemon[] = yield select(getPokemonState);
    for (var i in pokemon) {
      if (pokemon[i].id === id) {
        yield put(setPokemon(id, pokemon[i]));
      }
    }
    const response: AxiosResponse<Pokemon[]> = yield call(() => getPokemon(id));
    const { data } = response;
    const filteredData: Pokemon = filterPokemonJSON(data);
    yield put(setPokemon(id, filteredData));
  } catch (e) {
    console.log(e);
  }
}

function* handleNextPokemon() {
  try {
    yield delay(600);
    let id: number = yield select(getId);
    id = id + 1;
    const response: AxiosResponse<Pokemon[]> = yield call(() => getPokemon(id));
    const { data } = response;
    const filteredData: Pokemon = filterPokemonJSON(data);
    yield put(setPokemon(id, filteredData));
  } catch (e) {
    console.log(e);
  }
}

function* handlePrevPokemon() {
  try {
    yield delay(600);
    let id: number = yield select(getId);
    id = id - 1;
    const response: AxiosResponse<Pokemon[]> = yield call(() => getPokemon(id));
    const { data } = response;
    const filteredData: Pokemon = filterPokemonJSON(data);
    yield put(setPokemon(id, filteredData));
  } catch (e) {
    console.log(e);
  }
}

function* PokemonSaga() {
  yield all([takeLatest("GET_POKEMON", handleGetPokemon)]);
  yield all([takeEvery("NEXT_POKEMON", handleNextPokemon)]);
  yield all([takeEvery("PREV_POKEMON", handlePrevPokemon)]);
}

export default PokemonSaga;
