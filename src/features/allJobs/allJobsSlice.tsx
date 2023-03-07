import { createSlice } from '@reduxjs/toolkit'
import { Job, SearchFilter } from '../../utils/types'

type AllJobsStateType = {
  jobs: Job[]
  isLoading: boolean
  searchFilter: SearchFilter
}

const searchFilter: SearchFilter = {
  search: '',
  searchStatus: 'all',
  searchType: 'all',
  sort: 'latest',
}

const initialState: AllJobsStateType = {
  jobs: [],
  isLoading: false,
  searchFilter: searchFilter,
}

const allJobsSlice = createSlice({
  name: 'allJobs',
  initialState,
  reducers: {},
  extraReducers(builder) {},
})

export default allJobsSlice.reducer
