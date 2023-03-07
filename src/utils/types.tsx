// type for user (type getting from the server, eg. login/register/update )
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

// type for interview status
type JobStatus = 'interview' | 'declined' | 'pending'

type JobType = 'intership' | 'full-time' | 'part-time' | 'remote'

// type for add jobs
export type Job = {
  position: string
  company: string
  jobLocation: string
  status: JobStatus
  jobType: JobType
}
