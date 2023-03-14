import { pokemonApi } from 'api'

const apiRequest = async (store: any): Promise<any[]> => {
  store.dispatch(pokemonApi.endpoints.getPokemonSpriteById.initiate(1))

  return await Promise.all(
    store.dispatch(pokemonApi.util.getRunningQueriesThunk())
  )
}

export { apiRequest }
