import { put, call } from "redux-saga/effects"
import { requestGetPokemon } from "../requests/pokemon"
import { setPokemon } from "../../reducers/pokemonReducer";
import axios, { AxiosResponse } from "axios";
import { Pokemon } from "../../../model/Pokemon";

const getPokemon = () =>
    axios.get<Pokemon[]>("https://pokeapi.co/api/v2/pokemon/")


export function* handleGetPokemon() {
    try {
        const response: AxiosResponse<Pokemon[]> = yield call(getPokemon);
        const { data } = response;
        yield put(setPokemon(data))
} catch(e) {
    console.log(e)
}};