import { createSlice } from '@reduxjs/toolkit'
import { Job } from '../../utils/types'
import { createAppAsyncThunk } from '../../utils/hooks'
import customFetch, { checkUnauthorizedResponse } from '../../utils/axios'
import { toast } from 'react-toastify'
import { getAllJobs, hideLoading, showLoading } from '../allJobs/allJobsSlice'

// jobSlice state type
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

type AddJobThunkType = {
  job: Job
}

export const addJob = createAppAsyncThunk<AddJobThunkType, Job>(
  'job/addJob',
  async (job, thunkAPI) => {
    try {
      const resp = await customFetch.post<AddJobThunkType>('/jobs', job)
      thunkAPI.dispatch(clearValues())
      return resp.data
    } catch (error) {
      return checkUnauthorizedResponse(error, thunkAPI)
    }
  }
)

type MsgThunkType = {
  msg: string
}

export const deleteJob = createAppAsyncThunk<MsgThunkType, string>(
  'job/deleteJob',
  async (jobId, thunkAPI) => {
    thunkAPI.dispatch(showLoading())
    try {
      const resp = await customFetch.delete<MsgThunkType>(`jobs/${jobId}`)
      thunkAPI.dispatch(getAllJobs())
      return resp.data
    } catch (error) {
      thunkAPI.dispatch(hideLoading())
      return checkUnauthorizedResponse(error, thunkAPI)
    }
  }
)

type EditJobThunkPrama = {
  jobId: string
  job: Job
}

type EditJobThunkType = {
  updatedJob: Job
}

export const editJob = createAppAsyncThunk<EditJobThunkType, EditJobThunkPrama>(
  'job/editJob',
  async ({ jobId, job }, thunkAPI) => {
    try {
      const resp = await customFetch.patch<EditJobThunkType>(
        `/jobs/${jobId}`,
        job
      )
      thunkAPI.dispatch(clearValues())
      return resp.data
    } catch (error) {
      return checkUnauthorizedResponse(error, thunkAPI)
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
    setEditJob: (state, { payload }) => {
      const { editJobId, position, company, jobLocation, jobType, status } =
        payload

      const job: Job = { position, company, jobLocation, jobType, status }
      return { ...state, isEditing: true, job, editJobId }
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
      .addCase(deleteJob.fulfilled, (state) => {
        toast.success('Success! Job deleted.')
      })
      .addCase(deleteJob.rejected, (state, { payload }) => {
        toast.error(payload)
      })
      .addCase(editJob.pending, (state) => {
        state.isLoading = true
      })
      .addCase(editJob.fulfilled, (state) => {
        state.isLoading = false
        toast.success('Job updated!')
      })
      .addCase(editJob.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
  },
})

export const {
  handleInputChange,
  handleSelectChange,
  clearValues,
  setEditJob,
} = jobSlice.actions
export default jobSlice.reducer
