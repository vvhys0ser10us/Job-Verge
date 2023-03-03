import React from 'react'
import styled from 'styled-components'

const SidebarBig = () => {
  return <Wrapper>SidebarBig</Wrapper>
}

const Wrapper = styled.aside`
  display: none;

  @media (min-width: 992px) {
    display: block;
  }
`

export default SidebarBig
