import { useAppSelector } from '../utils/hooks'
import image from '../assets/images/nodisplay.svg'
import styled from 'styled-components'
import BarChart from './BarChart'
import AreaChart from './AreaChart'
import { useState } from 'react'

const ChartContainer = () => {
  const { data, isLoading } = useAppSelector((state) => state.allJobs)
  const [barType, setBarType] = useState<boolean>(true)

  if (isLoading) {
    return (
      <Wrapper className="dashboard-section">
        <div className="loading loading-center"></div>
      </Wrapper>
    )
  }

  if (!data.length) {
    return (
      <Wrapper>
        <img className="img" src={image} alt="image" />
      </Wrapper>
    )
  }

  return (
    <Wrapper className="dashboard-section">
      <h5>Monthly Applications</h5>
      <span onClick={() => setBarType(!barType)}>
        {barType ? 'Bar Chart' : 'Area Chart'}
      </span>
      {barType ? <BarChart /> : <AreaChart />}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 4rem;
  text-align: center;

  span {
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
    font-size: 1.25rem;
    color: var(--clr-highlight-1);
  }

  .img {
    display: none;
  }

  @media (min-width: 992px) {
    .img {
      display: block;
      margin: 0 auto;
      height: 500px;
      width: 500px;
      object-fit: fill;
    }
  }
`

export default ChartContainer
