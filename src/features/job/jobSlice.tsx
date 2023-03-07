import { createSlice } from '@reduxjs/toolkit'
import { Job } from '../../utils/types'

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

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {},
})

export default jobSlice.reducer
