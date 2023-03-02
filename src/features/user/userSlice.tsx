import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import customFetch from '../../utils/axios'
import { toast } from 'react-toastify'
import axios from 'axios'

type User = {
  email: string
  name?: string
  password: string
}

export type UserStateType = {
  isLoading: boolean
  user: User | null
}

const initialState: UserStateType = {
  isLoading: false,
  user: null,
}

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user: User, thunkAPI) => {
    try {
      const resp = await customFetch.post('/auth/Register', user)
      return resp.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data.msg)
      }
    }
  }
)

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user: User, thunkAPI) => {
    try {
      const resp = await customFetch.post('/auth/login', user)
      return resp.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data.msg)
      }
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        const {
          payload: { user },
        } = action
        state.isLoading = false
        state.user = user
        toast.success(`Welcome, ${user.name}!`)
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false
        const msg: string = payload + '.'
        toast.error(msg)
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload
        state.isLoading = false
        state.user = user
        toast.success(`Welcome back, ${user.name}!`)
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false
        const msg: string = payload + '.'
        toast.error(msg)
      })
  },
})

export default userSlice.reducer
