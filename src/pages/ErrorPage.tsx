import styled from 'styled-components'
import { Link } from 'react-router-dom'
import errorImg from '../assets/images/404.svg'

const ErrorPage = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <h2>
          404 <br />
          Page not found
        </h2>
        <Link to="/" className="btn btn-hipster btn-error">
          Back Home
        </Link>
        <img className="img" src={errorImg} alt="image" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  text-align: center;

  div {
    width: 400px;
    margin: 0 auto;
    padding-top: 10rem;
    h2 {
      color: var(--clr-tertiary-1);
      margin-bottom: 1rem;
    }
  }

  .btn-error {
    font-size: 1.25rem;
    padding: 0.5rem 1.25rem;
    margin-bottom: 1rem;
  }
`

export default ErrorPage
