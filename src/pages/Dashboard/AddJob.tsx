import { useState } from 'react'
import styled from 'styled-components'
import { FormRow, FormSelect } from '../../components'
import { Job } from '../../utils/types'
import { useAppSelector } from '../../utils/hooks'

const AddJob = () => {
  const { isLoading } = useAppSelector((state) => state.job)

  const [values, setValues] = useState<Job>({
    position: '',
    company: '',
    jobLocation: '',
    status: 'pending',
    jobType: 'full-time',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {}

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  return (
    <Wrapper>
      <form className="form dashboard-form">
        <h2>add job</h2>

        <div className="form-group">
          <FormRow
            type="text"
            name="position"
            value={values.position}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="company"
            value={values.company}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="jobLocation"
            value={values.jobLocation}
            handleChange={handleChange}
            labelText="job location"
          />

          <FormSelect
            name="status"
            value={values.status}
            handleChange={handleSelect}
            list={['interview', 'declined', 'pending']}
          />

          <FormSelect
            name="jobType"
            labelText="job type"
            value={values.jobType}
            handleChange={handleSelect}
            list={['intership', 'full-time', 'part-time', 'remote']}
          />

          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => console.log('clear values')}
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
  width: 90%;
  margin: 0 auto;

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
