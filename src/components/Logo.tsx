import logo from '../assets/images/logo.png'
import styled from 'styled-components'

const Logo = () => {
  return (
    <Wrapper>
      <img src={logo} alt="logo" className="logo" />
      <h4>Job Verge</h4>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;

  .logo {
    height: 3rem;
  }

  h4 {
    margin-bottom: 0;
  }
`

export default Logo
