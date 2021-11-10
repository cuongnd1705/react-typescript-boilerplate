import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'app/store'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    logging: false,
    currentUser: undefined,
  },
  reducers: {},
  extraReducers: {},
})

const { reducer } = authSlice
export const authSelector = (state: RootState) => state.auth
export default reducer
