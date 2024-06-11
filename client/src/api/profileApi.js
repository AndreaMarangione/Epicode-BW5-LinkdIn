  import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAxYzgwN2QwYjM3MTAwMWFhODk0YTEiLCJpYXQiOjE3MTUxMDA0MDAsImV4cCI6MTcxNjMxMDAwMH0.awm-TsZJX_k9vGfjTNagxOIw8wFNCB44L9IP6MjkC_k";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://striveschool-api.herokuapp.com/api/profile/",
  prepareHeaders: (headers) => {
    headers.set("authorization", token);

    return headers;
  },
});

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery,
  endpoints: builder => ({
    getProfiles: builder.query({
      query: () => "/",
    }),
    getMyProfile: builder.query({
      query: () => "/me",
      providesTags: ['My-profile']
    }),
    getAProfile: builder.query({
      query: (userId) => "/" + userId,
    }),
    ediProfile: builder.mutation({
      query: ({ mod}) => ({
        url: '/',
        method: 'PUT',
        body: mod
      }),
      invalidatesTags: ['My-profile']
    })
  }),
});

export const { useGetProfilesQuery, useGetMyProfileQuery, useGetAProfileQuery, useEdiProfileMutation } = profileApi;
