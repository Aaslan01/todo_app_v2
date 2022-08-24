import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit'
// import todoMessageReducer from "../features/Addtodo"
import reservationReducer from "../features/reservationSlice"
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';
// import { persistReducer, persistStore,  } from 'redux-persist';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { todoApi, useTodosQuery } from '../services/TodoApi';

const persistConfig={
  key: "root",
 version:1,  
  storage: AsyncStorage,
}
// export const store = configureStore({
//   reducer: {
//     // message: todoMessageReducer,
//     reservations:  reservationReducer,
//   },
// })

const reducer = combineReducers({
  reservations:  reservationReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({ 
  reducer: persistedReducer,

  // [todoApi.reducerPath]: todoApi.reducer,
 
  // middleware: (getDefaultMiddleware) =>
  // getDefaultMiddleware({
  //   serializableCheck: {
  //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //   },
  // }),
  // middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(todoApi.middleware)
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch   