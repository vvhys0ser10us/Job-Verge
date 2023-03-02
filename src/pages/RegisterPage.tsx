import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Logo, FormRow } from '../components'
import { toast } from 'react-toastify'
import { registerUser, loginUser } from '../features/user/userSlice'
import { useAppDispatch, useAppSelector } from '../utils/hooks'

type FormState = {
  name: string
  email: string
  password: string
  isMember: boolean
}

const initialState: FormState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

const RegisterPage = () => {
  const [value, setValue] = useState<FormState>(initialState)
  const { user, isLoading } = useAppSelector((store) => store.user)
  const dispatch = useAppDispatch()

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const { name, email, password, isMember } = value

    if (!email || !password || (!isMember && !name)) {
      toast.error('Please fill out all fields.')
      return
    }
    if (isMember) {
      dispatch(loginUser({ email, password }))
      return
    }
    dispatch(registerUser({ name, email, password }))
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }

  const toggleMember = () => {
    setValue({ ...value, isMember: !value.isMember })
  }

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{value.isMember ? 'Login' : 'Register'}</h3>

        {!value.isMember && (
          <FormRow
            type="name"
            name="name"
            value={value.name}
            handleChange={onChange}
          />
        )}

        <FormRow
          type="email"
          name="email"
          value={value.email}
          handleChange={onChange}
        />

        <FormRow
          type="password"
          name="password"
          value={value.password}
          handleChange={onChange}
        />

        <button type="submit" className="btn btn-block form-btn">
          submit
        </button>

        {value.isMember ? (
          <p>
            Not a member yet? <span onClick={toggleMember}>Register</span>
          </p>
        ) : (
          <p>
            Already a member? <span onClick={toggleMember}>Login</span>
          </p>
        )}
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-background-secondary);
  display: grid;
  place-items: center;

  h3 {
    text-align: center;
    margin-top: 2rem;
  }

  .form {
    border-top: 5px solid var(--clr-highlight-1);
    max-width: 400px;

    .form-btn {
      margin-top: 2rem;
    }

    p {
      color: var(--clr-main);
      text-align: center;
      letter-spacing: var(--letterSpacing);
      span {
        cursor: pointer;

        color: var(--clr-highlight-1);
        &:hover {
          color: var(--clr-highlight-2);
        }
      }
    }
  }
`

export default RegisterPage
