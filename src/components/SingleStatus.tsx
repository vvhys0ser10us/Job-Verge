import { ReactElement } from 'react'
import styled from 'styled-components'

type PropsType = {
  count: number
  text: string
  icon: ReactElement
  clr: string
}

const SingleStatus = ({ count, text, icon, clr }: PropsType) => {
  return (
    <Wrapper className={clr}>
      <div className="content-center">
        <h1>{count}</h1>
        <span className={clr}>{icon}</span>
      </div>
      <p>{text}</p>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  background: var(--clr-background-primary);
  padding: 2rem;
  border-radius: var(--borderRadius);

  .content-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    h1 {
      margin: 0;
      color: inherit;
    }

    span {
      height: 4rem;
      width: 4rem;
      display: grid;
      place-items: center;
      font-size: 2rem;
      border-radius: var(--borderRadius);
      border: transparent;
    }
  }

  p {
    font-size: 1.25rem;
    color: var(--clr-main);
    margin: 0;
    letter-spacing: var(--letterSpacing);
  }

  .interview {
    color: var(--clr-tertiary-1);
    background: var(--clr-tertiary-3);
  }

  .declined {
    color: var(--clr-secondary);
    background: #dfe3e8;
  }

  .pending {
    color: var(--clr-highlight-1);
    background: var(--clr-highlight-3);
  }
`

export default SingleStatus
