import { createSlice } from '@reduxjs/toolkit'

export interface ThemeState {
  value: string
}

const initialState: ThemeState = {
  value: "light",
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    switchLight: (state) => {
      state.value = "light"
    },
    switchDark: (state) => {
      state.value = "dark"
    },
  },
})

// Action creators are generated for each case reducer function
export const { switchLight, switchDark } = counterSlice.actions

export default counterSlice.reducer