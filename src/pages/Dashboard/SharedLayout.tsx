import React from 'react'
import { SidebarBig, Navbar, SidebarSm } from '../../components'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const SharedLayout = () => {
  return (
    <Wrapper className="full-page">
      <SidebarBig></SidebarBig>
      <SidebarSm></SidebarSm>
      <Navbar></Navbar>
      <div className="dashboard-page">
        <Outlet></Outlet>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main``

export default SharedLayout
