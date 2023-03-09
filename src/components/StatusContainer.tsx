import styled from 'styled-components'
import SingleStatus from './SingleStatus'
import { useAppSelector } from '../utils/hooks'
import { FaSpinner, FaCalendarCheck, FaHeartBroken } from 'react-icons/fa'

const StatusContainer = () => {
  const { statusCount } = useAppSelector((state) => state.allJobs)

  return (
    <Wrapper>
      <SingleStatus
        count={statusCount.pending}
        icon={<FaSpinner />}
        text="Pending Applications"
        clr="pending"
      />
      <SingleStatus
        count={statusCount.interview}
        icon={<FaCalendarCheck />}
        text="Interviews Scheduled"
        clr="interview"
      />
      <SingleStatus
        count={statusCount.declined}
        icon={<FaHeartBroken />}
        text="Jobs Declined"
        clr="declined"
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  row-gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }

  @media (min-width: 1120px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .interview {
    border-bottom: 5px solid var(--clr-tertiary-2);
  }

  .declined {
    border-bottom: 5px solid var(--clr-secondary);
  }

  .pending {
    border-bottom: 5px solid var(--clr-highlight-2);
  }
`

export default StatusContainer
