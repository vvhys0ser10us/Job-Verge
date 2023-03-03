import React from 'react'
import styled from 'styled-components'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import Logo from './Logo'
import { useAppSelector } from '../utils/hooks'

const Navbar = () => {
  const { user } = useAppSelector((state) => state.user)

  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn">
          <FaAlignLeft />
        </button>
        <div className="logo-container">
          <Logo />
        </div>

        <h3 className="logo-text">dashboard</h3>

        <div className="btn-container">
          <button type="button" className="btn">
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>

          <div className="dropdown show-dropdown">
            <button type="button" className="dropdown-btn">
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  height: var(--nav-height);
  background: var(--clr-background-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);

  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }

  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--clr-highlight-1);
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: var(--transition);
    &:hover {
      color: var(--clr-highlight-2);
    }
  }

  .logo-container {
    .logo {
      height: 2.5rem;
    }
    h4 {
      font-size: 1.5rem;
    }
  }

  .btn-container {
    position: relative;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
  }

  .logo-text {
    display: none;
    margin: 0;
  }

  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--clr-highlight-1);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
    transition: var(--transition);
    &:hover {
      background: var(--clr-highlight-2);
    }
  }

  .show-dropdown {
    visibility: visible;
  }

  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--clr-main);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }

  @media (min-width: 992px) {
    position: sticky;
    top: 0;

    .logo-container {
      display: none;
    }

    .logo-text {
      display: block;
    }

    .nav-center {
      width: 90%;
    }
  }
`
export default Navbar
