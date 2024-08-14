import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/blogs/`,
  }),
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: ({limit, skip}) => ({
        url: `?limit=${limit}&skip=${skip}`,
        method: "GET",
      }),
    }),
    getBlogDetail: builder.query({
      query: (slug) => ({
        url: `/${slug}`,
        method: "GET",
      }),
    }),
    createBlog: builder.mutation({
      query: (newBlog) => ({
        url: "",
        method: "POST",
        body: newBlog,
      }),
    }),
    
  }),
});

export const { useGetBlogDetailQuery,useGetBlogsQuery,useCreateBlogMutation } = blogApi;
