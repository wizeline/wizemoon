import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Pokemon } from '../types/pokemon';

const { NX_GAME_API_ENDPOINT } = process.env;

export const gameApi = createApi({
  reducerPath: 'gameApi',
  baseQuery: fetchBaseQuery({ baseUrl: NX_GAME_API_ENDPOINT }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<Pokemon[], void>({
      query: () => `v1/pokemons`,
    }),
  }),
});

export const { useGetPokemonListQuery } = gameApi;
