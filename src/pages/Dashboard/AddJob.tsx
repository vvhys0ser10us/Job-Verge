import { useState } from 'react'
import styled from 'styled-components'
import { FormRow, FormSelect } from '../../components'
import { useAppSelector, useAppDispatch } from '../../utils/hooks'
import { toast } from 'react-toastify'
import {
  handleInputChange,
  handleSelectChange,
  clearValues,
  addJob,
} from '../../features/job/jobSlice'

const AddJob = () => {
  const {
    isLoading,
    job: { company, jobLocation, jobType, position, status },
    isEditing,
    editJobId,
  } = useAppSelector((state) => state.job)

  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(handleInputChange({ name, value }))
  }

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(handleSelectChange({ name, value }))
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    if (!position || !company || !jobLocation) {
      toast.error('Please fill out all fields.')
      return
    }
    dispatch(addJob({ company, jobLocation, jobType, position, status }))
  }

  return (
    <Wrapper className="dashboard-section">
      <form className="form dashboard-form">
        <h2>add job</h2>

        <div className="form-group">
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleChange}
            labelText="job location"
          />

          <FormSelect
            name="status"
            value={status}
            handleChange={handleSelect}
            list={['interview', 'declined', 'pending']}
          />

          <FormSelect
            name="jobType"
            labelText="job type"
            value={jobType}
            handleChange={handleSelect}
            list={['intership', 'full-time', 'part-time', 'remote']}
          />

          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .btn-container {
    display: flex;
    column-gap: 1rem;
    align-self: flex-end;
    .clear-btn {
      background: var(--clr-highlight-2);
      &:hover {
        background: var(--clr-highlight-1);
      }
    }
  }
`

export default AddJob
