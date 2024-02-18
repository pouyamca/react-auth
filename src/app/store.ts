import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/login/login-slice'
import { api } from './extraApiService'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch




// const rootReducer = combineSlices(loginSlice, loingsApiSlice)

// export type RootState = ReturnType<typeof rootReducer>

// export const makeStore = (preloadedState?: Partial<RootState>) => {
//   const store = configureStore({
//     reducer: rootReducer,
//     middleware: getDefaultMiddleware => {
//       return getDefaultMiddleware().concat(loingsApiSlice.middleware)
//     },
//     preloadedState,
//   })
//   setupListeners(store.dispatch)
//   return store
// }

// export const store = makeStore()

// // Infer the type of `store`
// export type AppStore = typeof store
// // Infer the `AppDispatch` type from the store itself
// export type AppDispatch = AppStore["dispatch"]
// export type AppThunk<ThunkReturnType = void> = ThunkAction<
//   ThunkReturnType,
//   RootState,
//   unknown,
//   Action
// >
