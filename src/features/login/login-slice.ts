import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import type { AppThunk } from "../../app/store"

export interface LoginSliceInterface {
  value: number
  status: "idle" | "loading" | "failed"
}

const initialState: LoginSliceInterface = {
  value: 0,
  status: "idle",
}

// If you are not using async thunks you can use the standalone `createSlice`.
export const loginSlice = createAppSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: create => ({
  }),

  selectors: {
    selectCount: login => login.value,
    selectStatus: login => login.status,
  },
})

export const { } =
  loginSlice.actions

export const { selectCount, selectStatus } = loginSlice.selectors
