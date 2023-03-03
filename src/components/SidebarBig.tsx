import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import NavLinks from './NavLinks'

const SidebarBig = () => {
  return (
    <Wrapper>
      <div className="sidebar-container show-sidebar">
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks></NavLinks>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  display: none;

  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);

    .sidebar-container {
      min-height: 100vh;
      height: 100%;
      width: 280px;
      margin-left: -280px;
      transition: var(--transition);
    }

    .content {
      position: sticky;
      top: 0;
    }

    .show-sidebar {
      margin-left: 0;
    }

    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
    }

    .nav-links {
      padding-top: 4rem;
      display: flex;
      flex-direction: column;
      row-gap: 1rem;
    }

    .nav-link {
      display: flex;
      align-items: center;
      color: var(--clr-main);
      padding: 1rem 0;
      padding-left: 4rem;
      text-transform: capitalize;
      transition: var(--transition);
    }

    .nav-link:hover {
      background: var(--clr-background-secondary);
      color: var(--clr-highlight-2);
      padding-left: 4.5rem;
    }
    .nav-link:hover .icon {
      color: var(--clr-highlight-2);
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
      transition: var(--transition);
    }

    .active {
      color: var(--clr-highlight-1);
    }
    .active .icon {
      color: var(--clr-highlight-1);
    }
  }
`

export default SidebarBig
