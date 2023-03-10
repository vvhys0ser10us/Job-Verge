import styled from 'styled-components'
import SingleStatus from './SingleStatus'
import { useAppSelector } from '../utils/hooks'
import { FaSpinner, FaCalendarCheck, FaHeartBroken } from 'react-icons/fa'

const StatusContainer = () => {
  const { statusCount } = useAppSelector((state) => state.allJobs)

  return (
    <Wrapper className="dashboard-section">
      <SingleStatus
        count={statusCount.pending}
        icon={<FaSpinner />}
        text="Pending Applications"
        clr="--clr-highlight-1"
        bcg="--clr-highlight-3"
      />
      <SingleStatus
        count={statusCount.interview}
        icon={<FaCalendarCheck />}
        text="Interviews Scheduled"
        clr="--clr-tertiary-1"
        bcg="--clr-tertiary-3"
      />
      <SingleStatus
        count={statusCount.declined}
        icon={<FaHeartBroken />}
        text="Jobs Declined"
        clr="--clr-secondary"
        bcg="--clr-secondary-3"
      />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  row-gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }

  @media (min-width: 1120px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export default StatusContainer
