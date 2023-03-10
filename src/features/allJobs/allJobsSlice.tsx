import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import customFetch, { checkUnauthorizedResponse } from '../../utils/axios'
import { createAppAsyncThunk } from '../../utils/hooks'
import {
  ChartData,
  GetJobType,
  SearchFilter,
  StatusCount,
} from '../../utils/types'

type AllJobsStateType = {
  jobs: GetJobType[]
  isLoading: boolean
  searchFilter: SearchFilter
  totalJobs: number
  numOfPages: number
  statusCount: StatusCount
  data: ChartData[]
  page: number
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
  totalJobs: 0,
  numOfPages: 0,
  statusCount: {
    pending: 0,
    interview: 0,
    declined: 0,
  },
  data: [],
  page: 1,
}

type GetJobsThunkType = {
  jobs: GetJobType[]
  totalJobs: number
  numOfPages: number
}

export const getAllJobs = createAppAsyncThunk<GetJobsThunkType>(
  'allJobs/getAllJobs',
  async (_, thunkAPI) => {
    const {
      page,
      searchFilter: { search, searchStatus, searchType, sort },
    } = thunkAPI.getState().allJobs
    let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`
    if (search) {
      url = url + `&search=${search}`
    }
    try {
      const resp = await customFetch.get<GetJobsThunkType>(url)
      return resp.data
    } catch (error) {
      return checkUnauthorizedResponse(error, thunkAPI)
    }
  }
)

type GetStatusThunkType = {
  defaultStats: StatusCount
  monthlyApplications: ChartData[]
}

export const getStatus = createAppAsyncThunk<GetStatusThunkType>(
  'allJobs/getStaus',
  async (_, thunkAPI) => {
    try {
      const resp = await customFetch.get('/jobs/stats')
      return resp.data
    } catch (error) {
      return checkUnauthorizedResponse(error, thunkAPI)
    }
  }
)

const allJobsSlice = createSlice({
  name: 'allJobs',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true
    },
    hideLoading: (state) => {
      state.isLoading = false
    },
    clearFilter: (state) => {
      state.searchFilter = searchFilter
    },
    handleFilterChange: (state, { payload }) => {
      state.page = 1
      state.searchFilter.search = payload
    },
    handleFilterSelect: (state, { payload: { name, value } }) => {
      state.page = 1
      if (name === 'searchStatus') {
        state.searchFilter.searchStatus = value
      }
      if (name === 'searchType') {
        state.searchFilter.searchType = value
      }
      if (name === 'sort') {
        state.searchFilter.sort = value
      }
    },
    handlePageNumber: (state, { payload }) => {
      state.page = payload
    },
    clearAllJobsState: () => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllJobs.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.numOfPages = payload.numOfPages
        state.totalJobs = payload.totalJobs
        state.jobs = payload.jobs.map((job) => {
          const {
            company,
            createdAt,
            jobLocation,
            jobType,
            position,
            status,
            _id,
          } = job
          return {
            company,
            createdAt,
            jobLocation,
            jobType,
            position,
            status,
            _id,
          }
        })
      })
      .addCase(getAllJobs.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
      .addCase(getStatus.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getStatus.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.statusCount = payload.defaultStats
        state.data = payload.monthlyApplications
      })
      .addCase(getStatus.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
  },
})

export const {
  hideLoading,
  showLoading,
  handleFilterChange,
  clearFilter,
  handleFilterSelect,
  handlePageNumber,
  clearAllJobsState,
} = allJobsSlice.actions
export default allJobsSlice.reducer
