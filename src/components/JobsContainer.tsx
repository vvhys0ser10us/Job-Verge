import styled from 'styled-components'
import SingleJob from './SingleJob'
import { useAppSelector, useAppDispatch } from '../utils/hooks'
import noJobImage from '../assets/images/nodisplay.svg'
import { useEffect } from 'react'
import { getAllJobs } from '../features/allJobs/allJobsSlice'
import PageButtons from './PageButtons'

const JobsContainer = () => {
  const { isLoading, jobs, totalJobs, page, searchFilter, numOfPages } =
    useAppSelector((state) => state.allJobs)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllJobs())
  }, [page, searchFilter])

  if (isLoading) {
    return (
      <Container className="dashboard-section">
        <div className="loading loading-center"></div>
      </Container>
    )
  }

  if (!jobs.length) {
    return (
      <Container className="dashboard-section">
        <h3>no jobs to display...</h3>
        <img src={noJobImage} alt="image" className="img" />
      </Container>
    )
  }

  return (
    <Wrapper className="dashboard-section">
      <h4>{totalJobs} jobs found</h4>
      <div className="jobs">
        {jobs.map((job) => {
          return <SingleJob key={job._id} {...job} />
        })}
      </div>
      {numOfPages > 1 && <PageButtons />}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .jobs {
    display: grid;
    gap: 2rem 2rem;
  }

  @media (min-width: 1120px) {
    .jobs {
      grid-template-columns: 1fr 1fr;
    }
  }
`

const Container = styled.section`
  img {
    display: none;
  }

  @media (min-width: 992px) {
    img {
      display: block;
      height: 300px;
      width: 300px;
      object-fit: fill;
      margin: 0 auto;
    }
  }
`

export default JobsContainer
