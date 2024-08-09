import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/blog/`
    }),
    endpoints: (builder) => ({
       createBlog: builder.mutation({
         query: (newBlog) => ({
             url: '',
             method: 'POST',
             body: newBlog
         }),
       })
    }),
 });

 export const { useCreateBlogMutation } = blogApi;