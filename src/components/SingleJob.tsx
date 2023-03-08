import styled from 'styled-components'
import { FaLocationArrow, FaCalendarAlt, FaBriefcase } from 'react-icons/fa'
import { GetJobType } from '../utils/types'
import moment from 'moment'
import { useAppDispatch } from '../utils/hooks'
import { deleteJob, setEditJob } from '../features/job/jobSlice'
import { Link } from 'react-router-dom'

const SingleJob = ({
  company,
  createdAt,
  jobLocation,
  jobType,
  position,
  status,
  _id,
}: GetJobType) => {
  const date = moment(createdAt).format('MMM Do, YYYY')
  const dispatch = useAppDispatch()

  return (
    <Wrapper>
      <header>
        <span className="company-icon">{company.slice(0, 1)}</span>
        <div className="job-title">
          <h5 className="position">{position}</h5>
          <p className="company">{company}</p>
        </div>
      </header>

      <div className="job-info">
        <div>
          <FaLocationArrow />
          <p>{jobLocation}</p>
        </div>
        <div>
          <FaCalendarAlt />
          <p>{date}</p>
        </div>
        <div>
          <FaBriefcase />
          <p>{jobType}</p>
        </div>
        <span className={`status ${status}`}>{status}</span>
      </div>

      <div className="btn-container">
        <Link
          to={'/add-job'}
          className="btn edit-btn"
          onClick={() =>
            dispatch(
              setEditJob({
                editJobId: _id,
                position,
                company,
                jobLocation,
                jobType,
                status,
              })
            )
          }
        >
          edit
        </Link>
        <button
          type="button"
          className="btn delete-btn"
          onClick={() => dispatch(deleteJob(_id))}
        >
          delete
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  background: var(--clr-background-primary);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-2);
  display: grid;
  grid-template-rows: 1fr auto;

  p {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }

  header {
    border-bottom: 2px solid var(--clr-background-secondary);
    padding: 1rem 2rem;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 2rem;
    .company-icon {
      font-size: 2rem;
      font-weight: 700;
      height: 4rem;
      width: 4rem;
      background: var(--clr-highlight-1);
      display: grid;
      place-items: center;
      border-radius: var(--borderRadius);
    }

    .position {
      margin: 0.5rem 0;
    }
  }

  .job-info {
    padding: 1rem 2rem;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;

    div {
      display: flex;
      align-items: center;
      column-gap: 1rem;
    }

    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 992px) {
      grid-template-columns: 1fr;
    }

    @media (min-width: 1120px) {
      grid-template-columns: 1fr 1fr;
    }

    .status {
      width: 100px;
      text-align: center;
      text-transform: capitalize;
      letter-spacing: var(--letterSpacing);
      padding: 0.25rem 0.5rem;
      border-radius: var(--borderRadius);
    }

    .interview {
      background: var(--clr-tertiary-1);
    }

    .declined {
      background: var(--clr-secondary);
    }

    .pending {
      background: var(--clr-highlight-2);
    }
  }

  .btn-container {
    padding: 1rem 2rem;
    display: flex;
    column-gap: 1rem;
    .edit-btn {
      background: var(--clr-tertiary-0);
      &:hover {
        background: var(--clr-tertiary-1);
      }
    }

    .delete-btn {
      background: var(--clr-highlight-0);
      &:hover {
        background: var(--clr-highlight-1);
      }
    }
  }
`

export default SingleJob
