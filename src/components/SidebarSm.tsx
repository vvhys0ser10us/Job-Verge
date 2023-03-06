import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../utils/hooks'
import Logo from './Logo'
import NavLinks from './NavLinks'
import { FaTimes } from 'react-icons/fa'
import { toggleSidebar } from '../features/user/userSlice'

const SidebarSm = () => {
  const { isSidebarOpen } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen
            ? 'sidebar-container show-sidebar-sm'
            : 'sidebar-container'
        }
      >
        <div className="content">
          <button
            className="close-btn"
            onClick={() => dispatch(toggleSidebar())}
          >
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
  }

  .content {
    margin: 1rem auto;
    background: var(--clr-background-primary);
    width: 80%;
    height: 80%;
    border-radius: var(--borderRadius);
    position: relative;
  }

  header {
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 5rem;
  }

  .close-btn {
    position: absolute;
    top: 2rem;
    right: 2rem;
    cursor: pointer;
    background: transparent;
    color: var(--clr-highlight-1);
    border: transparent;
    font-size: 2rem;
    transition: var(--transition);
    &:hover {
      color: var(--clr-highlight-2);
      transform: scale(1.1);
    }
  }

  .nav-links {
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }

  .nav-link {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--clr-main);
    padding: 1rem 0;
    text-transform: capitalize;
    transition: var(--transition);
  }

  .nav-link:hover {
    background: var(--clr-background-secondary);
    color: var(--clr-highlight-2);
  }

  .nav-link:hover .icon {
    color: var(--clr-highlight-2);
    transform: scale(1.2);
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

  .show-sidebar-sm {
    z-index: 99;
    opacity: 1;
  }

  @media (min-width: 992px) {
    display: none;
  }
`

export default SidebarSm
