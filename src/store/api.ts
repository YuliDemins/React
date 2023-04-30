import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CatBreed, CatImage, ICat } from '../types/api.interface';

const baseURL = 'https://api.thecatapi.com/v1';
const key = 'live_17XhwfmLQSNM2KpZWSqhGwwknYeHIcrn8hIy1feWpXPuQngIucaoCbdM6i5NMr7r';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Breeds'],
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  endpoints: (builder) => ({
    getBreeds: builder.query<ICat[], string>({
      query: (value) => (value ? `/breeds/search?q=${value}` : `/breeds?api_key=${key}`),
      providesTags: () => [
        {
          type: 'Breeds',
        },
      ],
    }),
    getCard: builder.query<CatBreed, string>({
      query: (id) => `/breeds/${id}?api_key=${key}`,
    }),
    getImage: builder.query<CatImage[], string>({
      query: (id) => `/images/search?breed_id=${id}&limit=1`,
    }),
  }),
});

export const { useGetBreedsQuery, useGetCardQuery, useGetImageQuery } = api;
