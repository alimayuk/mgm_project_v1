import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const galleryApi = createApi({
    reducerPath: 'galleryApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/api/gallery/'
    }),
    endpoints: (builder) => ({
        getGalleryImages: builder.query({
            query: () => ({
                url: '',
                method: 'GET',
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

 export const { useGetGalleryImagesQuery, useDeleteImageMutation} = galleryApi;