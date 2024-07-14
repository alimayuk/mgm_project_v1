import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const reservationApi = createApi({
  reducerPath: 'reservationApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/rezervation/' }),
  endpoints: (builder) => ({
    getReservations: builder.query({
      query: () => {
        return {
          url:'reservations',
          method: 'GET',
          credentials: 'include'
        }
      },
    }),
    addReservation: builder.mutation({
      query: (newReservation) => ({
        url: 'reservations',
        method: 'POST',
        body: newReservation,
      }),
    }),
  }),
})

export const { useGetReservationsQuery, useAddReservationMutation } = reservationApi
