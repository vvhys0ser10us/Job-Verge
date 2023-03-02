import { createSlice } from '@reduxjs/toolkit'

type User = {}

type UserStateType = {
  isLoading: boolean
  user: User | null
}

const initialState: UserStateType = {
  isLoading: false,
  user: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

export default userSlice.reducer
