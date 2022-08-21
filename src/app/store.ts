import { configureStore } from '@reduxjs/toolkit'
// import todoMessageReducer from "../features/Addtodo"
import reservationReducer from "../features/reservationSlice"


export const store = configureStore({
  reducer: {
    // message: todoMessageReducer,
    reservations:  reservationReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch   