# [Job Verge](https://job-verge.netlify.app/landing)
- A job applications tracking web app, deployed on [Netlify](https://job-verge.netlify.app/landing).
- React v18 + Vite + Typescript + Redux-tookit

## Features
- Landing page: login/register, or using Demo mode to view the app (read-only mode, restricted access to add/update/delete data).
- Dashboard Status page: view summaries/status of total applications (Barchart, Areachart).
- All jobs page: view all the job applications with searching/filtering functionalities, also be able to delete/update job applications. Clicking edit button will navigate to edit job page(the same page as add job).
- Add job: add job applications, also the same component as editing job, but using states to control whether editing or adding job applications
- Profile page: update user info. If changing email, the email value must be unique and has not existed in the database yet.

## Dependencies
- React v18 + Vite + Typescript
- Redux-toolkit
- React-route-dom v6
- Styled-components
- Recharts: areacChart, barChart for status page
- Axios
- React-toastify: notifications for all the actions, e.g. Messages for successful login, add jobs, etc, error messages for failing authentication and more.

## Redux-toolkit
### userSlice
 - state: 
 ```typescript
  type UserStateType = {
  isSidebarOpen: boolean
  isLoading: boolean
  user: User | null
}
 ```
 - reducers: toggleSidebar, logoutUser,
 - extraReducers, createAppAsyncThunk: registerUser, loginUser, updateUser, clearStore.

### jobSlice
- state:
```typescript
type JobStateType = {
  job: Job
  isLoading: boolean
  isEditing: boolean
  editJobId: string
}
```
- reducers: handleInputChange(search form), clearValue, setEditJob
- extraReducers, createAppAsyncThunk: addJob, deleteJob, editJob

### allJobsSlice
- state: 
```typescript
type AllJobsStateType = {
  /** Jobs array */
  jobs: GetJobType[]
  isLoading: boolean
  /** search filter states */
  searchFilter: SearchFilter
  /** total number of jobs */
  totalJobs: number
  /** total pages, pagination */
  numOfPages: number
  /** interview, pending, declined count */
  statusCount: StatusCount
  /** data for recharts */
  data: ChartData[]
  /** current page */
  page: number
}
```
- reducers: showLoading/hideLoading, clearFilter, handleChange, handlePageNumber, clearAllJobState,
- extraReducers, createAppAsyncThunk: getAllJobs(jobs array), getStatus(statusCount, data for charts )

## Assets
- Svg images from [unDraw](https://undraw.co/illustrations)
