import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../utils/hooks'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'
import { handlePageNumber } from '../features/allJobs/allJobsSlice'

const PageButtons = () => {
  const { numOfPages, page } = useAppSelector((state) => state.allJobs)
  const dispatch = useAppDispatch()

  return (
    <Wrapper>
      <button
        className="btn page-btn"
        onClick={() => dispatch(handlePageNumber(page - 1))}
        disabled={page === 1}
      >
        <FaAngleDoubleLeft />
      </button>
      <div className="page-btns">
        {Array.from({ length: numOfPages }, (_, index) => {
          return index + 1
        }).map((num) => {
          return (
            <button
              key={num}
              className={page === num ? 'btn num-btn active' : 'btn num-btn'}
              onClick={() => dispatch(handlePageNumber(num))}
            >
              {num}
            </button>
          )
        })}
      </div>
      <button
        className="btn page-btn"
        onClick={() => dispatch(handlePageNumber(page + 1))}
        disabled={page === numOfPages}
      >
        <FaAngleDoubleRight />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 4rem;
  justify-content: end;
  height: 6rem;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  .btn {
    height: 40px;
  }

  .page-btns {
    border-radius: var(--borderRadius);
    background: var(--clr-background-primary);
  }

  .num-btn {
    color: var(--clr-highlight-1);
    width: 50px;
    background: transparent;
    border-color: transparent;
    font-weight: 700;
    border-radius: 0;
    box-shadow: none;
    border-radius: var(--borderRadius);
    &:hover {
      color: var(--clr-highlight-3);
    }
  }

  .active {
    color: var(--clr-main);
    background: var(--clr-highlight-1);
    &:hover {
      color: var(--clr-main);
    }
  }

  .page-btn {
    width: 70px;
    display: grid;
    place-items: center;
    background: var(--clr-background-primary);
    color: var(--clr-highlight-1);
    &:hover {
      color: var(--clr-highlight-3);
    }
  }
`

export default PageButtons
