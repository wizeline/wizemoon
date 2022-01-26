import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Pokemon } from '../types/pokemon';

import { environment } from '../environments/environment';

export const gameApi = createApi({
  reducerPath: 'gameApi',
  baseQuery: fetchBaseQuery({ baseUrl: environment.gameApiEndpoint }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<Pokemon[], void>({
      query: () => `v1/pokemons`,
    }),
  }),
});

export const { useGetPokemonListQuery } = gameApi;
