import { pokemonApi } from 'api';

const apiRequest = async (store: any) => {
  store.dispatch(pokemonApi.endpoints.getPokemonSpriteById.initiate(1));

  return Promise.all(store.dispatch(pokemonApi.util.getRunningQueriesThunk()));
};

export { apiRequest };
