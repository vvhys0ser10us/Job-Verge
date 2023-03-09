import axios from 'axios'
import { getUserStorage } from './localStorage'
import { User } from './types'
import { logoutUser } from '../features/user/userSlice'

const customFetch = axios.create({
  baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
})

customFetch.interceptors.request.use((config) => {
  const user: User = getUserStorage()
  if (user) {
    config.headers['Authorization'] = `Bearer ${user.token}`
  }

  return config
})

export const checkUnauthorizedResponse = (error: any, thunkAPI: any) => {
  if (axios.isAxiosError(error)) {
    if (error.response?.status === 401) {
      thunkAPI.dispatch(logoutUser(null))
      return thunkAPI.rejectWithValue('Unauthorized! Logging Out...')
    }
    return thunkAPI.rejectWithValue(error.response?.data.msg)
  }
}

export default customFetch
