import { createSlice } from '@reduxjs/toolkit'
import { Job } from '../../utils/types'
import { createAppAsyncThunk } from '../../utils/hooks'
import customFetch from '../../utils/axios'
import axios from 'axios'
import { logoutUser } from '../user/userSlice'
import { toast } from 'react-toastify'

type JobStateType = {
  job: Job
  isLoading: boolean
  isEditing: boolean
  editJobId: string
}

const job: Job = {
  position: '',
  company: '',
  jobLocation: '',
  jobType: 'full-time',
  status: 'pending',
}

const initialState: JobStateType = {
  job,
  isLoading: false,
  isEditing: false,
  editJobId: '',
}

type ASyncThunkType = {
  job: Job
}

export const addJob = createAppAsyncThunk<ASyncThunkType, Job>(
  'job/addJob',
  async (job, thunkAPI) => {
    try {
      const resp = await customFetch.post('/jobs', job, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user?.token}`,
        },
      })
      thunkAPI.dispatch(clearValues())
      return resp.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          thunkAPI.dispatch(logoutUser(null))
          return thunkAPI.rejectWithValue('Unauthorized! Logging out...')
        }
        return thunkAPI.rejectWithValue(error.response?.data.msg)
      }
    }
  }
)

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    handleInputChange: (state, { payload }) => {
      const { name, value } = payload
      if (name === 'position') {
        state.job.position = value
      }
      if (name === 'company') {
        state.job.company = value
      }
      if (name === 'jobLocation') {
        state.job.jobLocation = value
      }
    },
    handleSelectChange: (state, { payload: { name, value } }) => {
      if (name === 'status') {
        state.job.status = value
      }
      if (name === 'jobType') {
        state.job.jobType = value
      }
    },
    clearValues: () => {
      return initialState
    },
  },
  extraReducers(builder) {
    builder
      .addCase(addJob.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addJob.fulfilled, (state) => {
        state.isLoading = false

        toast.success('Job added!')
      })
      .addCase(addJob.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
  },
})

export const { handleInputChange, handleSelectChange, clearValues } =
  jobSlice.actions
export default jobSlice.reducer