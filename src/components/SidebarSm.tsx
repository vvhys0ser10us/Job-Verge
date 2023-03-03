import React from 'react'
import styled from 'styled-components'

const SidebarSm = () => {
  return <Wrapper>SidebarSm</Wrapper>
}

const Wrapper = styled.aside`
  display: none;

  @media (min-width: 992px) {
    display: none;
  }
`

export default SidebarSm
