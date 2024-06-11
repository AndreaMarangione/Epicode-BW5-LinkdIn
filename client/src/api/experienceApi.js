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

export const experienceApi = createApi({
    reducerPath: "experienceApi",
    baseQuery,
    endpoints: (builder) => ({
        getExperiences: builder.query({
            query: (userId) => `${userId}/experiences`,
            providesTags: ["Experiences"],
        }),
        getExperience: builder.query({
            query: ({userId, expId}) => `${userId}/experiences/${expId}`,
            providesTags: ["Experiences"],
        }),
        createExperience: builder.mutation({
            query: ({userId, newExperience}) => ({
                url: `${userId}/experiences`,
                method: "POST",
                body: newExperience,
            }),
            invalidatesTags: ["Experiences"],
        }),
        deleteExperience: builder.mutation({
            query: ({userId, expId}) => ({
                url: `${userId}/experiences/${expId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Experiences"],
        }),
        editExperience: builder.mutation({
            query: ({userId, expId, expModified}) => ({
                url: `${userId}/experiences/${expId}`,
                method: "PUT",
                body: expModified
            }),
            invalidatesTags: ["Experiences"],
        }),
    }),
});

export const {
    useGetExperiencesQuery,
    useCreateExperienceMutation,
    useDeleteExperienceMutation,
    useEditExperienceMutation,
    useGetExperienceQuery,
} = experienceApi;
