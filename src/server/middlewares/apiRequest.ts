import { EnhancedStore } from '@reduxjs/toolkit'
import { pokemonApi } from 'api'

const apiRequest = async (
  store: EnhancedStore<any, any, any[]>
): Promise<any[]> => {
  store.dispatch(pokemonApi.endpoints.getPokemonSpriteById.initiate(1))

  return await Promise.all<any>(
    store.dispatch(pokemonApi.util.getRunningQueriesThunk())
  )
}

export { apiRequest }
