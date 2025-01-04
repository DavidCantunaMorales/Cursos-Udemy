import { pokemonApi } from '../../../api/pokemonApi';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';

export const getPokemons = (page = 0) => {
  return async (dispatch) => {
    dispatch(startLoadingPokemons());

    // Realizar peticion a la API de forma tradicional
    // const resp = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    // );
    // const { results } = await resp.json();

    // Realizar peticion a la API con axios
    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
