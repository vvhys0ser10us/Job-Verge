// type for user (returned data type from the server, eg. login/register/update )
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

type JobType = 'internship' | 'full-time' | 'part-time' | 'remote'

// type for add jobs
export type Job = {
  position: string
  company: string
  jobLocation: string
  status: JobStatus
  jobType: JobType
}

type Sort = 'latest' | 'oldest' | 'a-z' | 'z-a'

type SearchStatus = JobStatus | 'all'

type SearchType = JobType | 'all'

// type for search jobs filter
export type SearchFilter = {
  search: string
  searchStatus: SearchStatus
  searchType: SearchType
  sort: Sort
}

//job data type returned from server
export type GetJobType = Job & {
  _id: string
  createdAt: string
}
