import styled from 'styled-components'
import { FaLocationArrow, FaCalendarAlt, FaBriefcase } from 'react-icons/fa'

const SingleJob = () => {
  return (
    <Wrapper>
      <header>
        <span className="company-icon"></span>
        <div className="job-title">
          <h4 className="position"></h4>
          <p className="company"></p>
        </div>
      </header>

      <div className="job-info">
        <h5>
          <FaLocationArrow />
        </h5>
        <h5>
          <FaCalendarAlt />
        </h5>
        <h5>
          <FaBriefcase />
        </h5>
        <span className="status"></span>
      </div>

      <div className="btn-container">
        <button className="btn">edit</button>
        <button className="btn">delete</button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article``

export default SingleJob
