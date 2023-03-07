import { createSlice } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from '../../utils/hooks'
import customFetch from '../../utils/axios'
import { toast } from 'react-toastify'
import axios from 'axios'
import {
  getUserStorage,
  setUserStorage,
  removeUserStorage,
} from '../../utils/localStorage'
import { User, LoginUser, UpdateUser } from '../../utils/types'

export type UserStateType = {
  isSidebarOpen: boolean
  isLoading: boolean
  user: User | null
}

const initialState: UserStateType = {
  isSidebarOpen: false,
  isLoading: false,
  user: getUserStorage(),
}

// Return type of the payload creator
type AsyncThunkUser = {
  user: User
}

export const registerUser = createAppAsyncThunk<AsyncThunkUser, LoginUser>(
  'user/registerUser',
  async (user: LoginUser, thunkAPI) => {
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

export const loginUser = createAppAsyncThunk<AsyncThunkUser, LoginUser>(
  'user/loginUser',
  async (user: LoginUser, thunkAPI) => {
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

export const updateUser = createAppAsyncThunk<AsyncThunkUser, UpdateUser>(
  'user/updateUser',
  async (user: UpdateUser, thunkAPI) => {
    try {
      const resp = await customFetch.patch('/auth/updateUser', user, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user?.token}`,
        },
      })
      return resp.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // logout user when unauthorized
        if (error.response?.status === 401) {
          thunkAPI.dispatch(logoutUser(null))
          return thunkAPI.rejectWithValue('Unauthorized! Logging out...')
        }
        return thunkAPI.rejectWithValue(error.response?.data.msg)
      }
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen
    },
    logoutUser: (state, { payload }) => {
      state.user = null
      removeUserStorage()
      state.isSidebarOpen = false
      if (payload) {
        toast.success('logging out')
      }
    },
  },
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
        setUserStorage(user)
        toast.success(`Welcome, ${user.name}!`)
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload + '.')
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload
        state.isLoading = false
        state.user = user
        setUserStorage(user)
        toast.success(`Welcome back, ${user.name}!`)
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload + '.')
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.isLoading = false
        const { user } = payload
        state.user = user
        setUserStorage(user)
        toast.success(`User Updated!`)
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
  },
})

export const { toggleSidebar, logoutUser } = userSlice.actions
export default userSlice.reducer
