import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const galleryApi = createApi({
    reducerPath: 'galleryApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/gallery/`
    }),
    endpoints: (builder) => ({
        getGalleryImages: builder.query({
            query: () => ({
                url: '',
                method: 'GET',
            }),
        }),
        addGalleryImages: builder.mutation({
            query: (item) => ({
                url: '',
                method: 'POST',
                body: item,
            }),
        }),
        deleteImage: builder.mutation({
            query: (id) => ({
                url: `/${id}`, 
                method: 'DELETE',
              }),
        })
    }),
 });

 export const { useGetGalleryImagesQuery, useAddGalleryImagesMutation, useDeleteImageMutation} = galleryApi;