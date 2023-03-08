import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import customFetch from '../../utils/axios'
import { checkUnauthorizedResponse } from '../../utils/checkUnauthorizedResponse'
import { createAppAsyncThunk } from '../../utils/hooks'
import { GetJobType, SearchFilter } from '../../utils/types'

type AllJobsStateType = {
  jobs: GetJobType[]
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

type AsyncThunkType = {
  jobs: GetJobType[]
}

export const getAllJobs = createAppAsyncThunk<AsyncThunkType>(
  'allJobs/getAllJobs',
  async (_, thunkAPI) => {
    try {
      const resp = await customFetch.get('/jobs', {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user?.token}`,
        },
      })

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
  },
  extraReducers(builder) {
    builder
      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllJobs.fulfilled, (state, { payload }) => {
        state.isLoading = false
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
  },
})

export const { hideLoading, showLoading } = allJobsSlice.actions
export default allJobsSlice.reducer
