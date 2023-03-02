import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import customFetch from '../../utils/axios'

type LoginUser = {
  email: string
  password: string
}

type RegUser = {
  name: string
  email: string
  password: string
}

export type UserStateType = {
  isLoading: boolean
  user: LoginUser | RegUser | null
}

const initialState: UserStateType = {
  isLoading: false,
  user: null,
}

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post('/auth/testingRegister', user)
      console.log(resp)
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }
)

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {}
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

export default userSlice.reducer
