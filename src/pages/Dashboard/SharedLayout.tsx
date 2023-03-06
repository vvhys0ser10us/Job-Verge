import { SidebarBig, Navbar, SidebarSm } from '../../components'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const SharedLayout = () => {
  return (
    <Wrapper className="full-page">
      <SidebarBig></SidebarBig>
      <SidebarSm></SidebarSm>
      <div>
        <Navbar></Navbar>
        <div className="dashboard-page">
          <Outlet></Outlet>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .dashboard-page {
    background: var(--clr-background-secondary);
    min-height: calc(100vh - var(--nav-height));
    padding: 2rem 0;
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: auto 1fr;
  }
`

export default SharedLayout
