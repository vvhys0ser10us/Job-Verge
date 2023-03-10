import React from 'react'
import links from '../utils/links'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

type PropType = {
  toggle?: () => void
}

const NavLinks = ({ toggle }: PropType) => {
  return (
    <Wrapper className="nav-links">
      {links.map((link) => {
        const { text, path, id, icon } = link
        return (
          <NavLink
            to={path}
            className={({ isActive }) => {
              return isActive ? 'nav-link active' : 'nav-link'
            }}
            key={id}
            onClick={toggle}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .active {
    color: var(--clr-highlight-1);
  }
`

export default NavLinks
