export type User = {
  email: string
  name: string
  location: string
  lastName: string
  token: string
}

// type for login/register user
export type LoginUser = {
  email: string
  name?: string
  password: string
}

// type for update user profile
export type UpdateUser = {
  email: string
  name: string
  location: string
  lastName: string
}
