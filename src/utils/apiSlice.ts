import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const pokemonsApi = createApi({
  reducerPath: "pokemonsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getAllPokemons: builder.query({
      query: () => "pokemon?limit=35",
    }),
    getPokemonDetails: builder.query({
        query: (index)=>`pokemon/${index}`
    })
  }),
});

export const {useGetAllPokemonsQuery, useGetPokemonDetailsQuery} = pokemonsApi