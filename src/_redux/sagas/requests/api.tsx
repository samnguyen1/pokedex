import axios from "axios";

export function requestGetPokemon() {
  return axios.request({
    url: "https://pokeapi.co/api/v2/pokemon",
  });
}
