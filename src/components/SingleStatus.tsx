import { ReactElement } from 'react'
import styled from 'styled-components'

type PropsType = {
  count: number
  text: string
  icon: ReactElement
  clr: string
  bcg: string
}

type StyledProps = {
  clr: string
  bcg: string
}

const SingleStatus = ({ count, text, icon, clr, bcg }: PropsType) => {
  return (
    <Wrapper clr={clr} bcg={bcg}>
      <div className="content-center">
        <h1>{count}</h1>
        <span>{icon}</span>
      </div>
      <p>{text}</p>
    </Wrapper>
  )
}

const Wrapper = styled.article<StyledProps>`
  background: var(--clr-background-primary);
  padding: 2rem;
  border-radius: var(--borderRadius);
  border-bottom: 5px solid var(${(props) => props.clr});

  .content-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    h1 {
      margin: 0;
      color: var(${(props) => props.clr});
    }

    span {
      height: 4rem;
      width: 4rem;
      display: grid;
      place-items: center;
      font-size: 2rem;
      border-radius: var(--borderRadius);
      color: var(${(props) => props.clr});
      background: var(${(props) => props.bcg});
    }
  }

  p {
    font-size: 1.25rem;
    color: var(--clr-main);
    margin: 0;
    letter-spacing: var(--letterSpacing);
  }
`

export default SingleStatus
