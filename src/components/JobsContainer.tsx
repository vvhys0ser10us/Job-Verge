import styled from 'styled-components'
import SingleJob from './SingleJob'
import { useAppSelector } from '../utils/hooks'
import noJobImage from '../assets/images/nodisplay.svg'

const JobsContainer = () => {
  const { isLoading, jobs } = useAppSelector((state) => state.allJobs)

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
      <h4>{jobs.length} jobs found</h4>
      <div className="jobs">
        <SingleJob />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section``

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
