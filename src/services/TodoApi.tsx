import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Todos {
    "userID": number,
    "id": number,
    "title": string,
    "body": string

}

export const todoApi = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery ({ baseUrl: "https://jsonplaceholder.typicode.com/todos" }),
    endpoints: (builder)=>({
        todos: builder.query<Todos[], void>({
            query:()=>'/todos'
        })
    })
})



export const { useTodosQuery } = todoApi;