import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '../../app/store'
import { User } from '../../app/extraApiService'

type AuthState = {
  user: User | null
  token: string | null
}

const slice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null } as AuthState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { user, token },
      }: PayloadAction<{ user: User; token: string }>,
    ) => {
      state.user = user
      state.token = token
    },
  },
})

export const { setCredentials } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user


// import type { PayloadAction } from "@reduxjs/toolkit"
// import { createAppSlice } from "../../app/createAppSlice"

// export interface LoginSliceInterface {
//   value: number
//   status: "idle" | "loading" | "failed"
// }

// const initialState: LoginSliceInterface = {
//   value: 0,
//   status: "idle",
// }

// // If you are not using async thunks you can use the standalone `createSlice`.
// export const loginSlice = createAppSlice({
//   name: "counter",
//   // `createSlice` will infer the state type from the `initialState` argument
//   initialState,
//   // The `reducers` field lets us define reducers and generate associated actions
//   reducers: create => ({
//   }),

//   selectors: {
//     selectCount: login => login.value,
//     selectStatus: login => login.status,
//   },
// })

// export const { } =
//   loginSlice.actions

// export const { selectCount, selectStatus } = loginSlice.selectors
