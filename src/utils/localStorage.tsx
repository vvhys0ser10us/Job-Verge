import { User } from '../features/user/userSlice'

export const setUserStorage = (user: User) => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const getUserStorage = () => {
  const result = localStorage.getItem('user')
  if (result) {
    return JSON.parse(result)
  }
  return null
}

export const removeUserStorage = () => {
  localStorage.removeItem('user')
}
