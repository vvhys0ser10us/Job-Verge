import axios from 'axios'
import { logoutUser } from '../features/user/userSlice'

export const checkUnauthorizedResponse = (error: any, thunkAPI: any) => {
  if (axios.isAxiosError(error)) {
    if (error.response?.status === 401) {
      thunkAPI.dispatch(logoutUser(null))
      return thunkAPI.rejectWithValue('Unauthorized! Logging Out...')
    }
    return thunkAPI.rejectWithValue(error.response?.data.msg)
  }
}
