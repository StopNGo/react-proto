import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type TPokemonData = {
  name: string;
  sprite: string;
}

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: builder => ({
    getPokemonSpriteById: builder.query<TPokemonData, number>({
      query: id => `pokemon/${id}`,
      transformResponse: (response: any) => ({
        name: response.species.name,
        sprite: response.sprites.other.dream_world.front_default,
      }),
    }),
  }),
});
