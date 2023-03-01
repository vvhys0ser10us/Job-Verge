import logo from '../assets/images/logo.png'
import main from '../assets/images/main.svg'
import styled from 'styled-components'

const LandingPage = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="logo" className="logo" />
        <h4>Job Verge</h4>
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit et qui facilis beatae a ab totam earum autem, dolorem
            rem.
          </p>
          <button className="btn btn-hero">Login / Register</button>
        </div>

        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
    column-gap: 1rem;

    img {
      height: 3rem;
    }

    h4 {
      margin-bottom: 0;
    }
  }

  .page {
    height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }

  h1 span {
    color: var(--clr-highlight-1);
  }

  .main-img {
    display: none;
  }

  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }

    .main-img {
      display: block;
    }
  }
`

export default LandingPage
