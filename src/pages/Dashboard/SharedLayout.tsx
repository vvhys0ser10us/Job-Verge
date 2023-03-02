import React from 'react'
import { Sidebar, Navbar } from '../../components'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const SharedLayout = () => {
  return (
    <Wrapper className="full-page">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Outlet></Outlet>
    </Wrapper>
  )
}

const Wrapper = styled.main``

export default SharedLayout
