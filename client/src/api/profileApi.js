import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAxYzgwN2QwYjM3MTAwMWFhODk0YTEiLCJpYXQiOjE3MTgxMTgxNjMsImV4cCI6MTcxOTMyNzc2M30.mIKoULxMrakOoOJfdCVizV3lB9KRQZAdZQA1CYUS8i8";
//const token = localStorage.getItem("token") && 'Bearer ' + localStorage.getItem("token")


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
            query: ({mod}) => ({
                url: '/',
                method: 'PUT',
                body: mod
            }),
            invalidatesTags: ['My-profile']
        })
    }),
});

export const {useGetProfilesQuery, useGetMyProfileQuery, useGetAProfileQuery, useEdiProfileMutation} = profileApi;
