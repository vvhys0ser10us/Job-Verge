import FormRow from './FormRow'
import FormSelect from './FormSelect'
import { useAppSelector, useAppDispatch } from '../utils/hooks'
import {
  clearFilter,
  handleFilterChange,
  handleFilterSelect,
} from '../features/allJobs/allJobsSlice'
import { useMemo, useState } from 'react'

const SearchForm = () => {
  const {
    isLoading,
    searchFilter: { searchStatus, searchType, sort },
  } = useAppSelector((store) => store.allJobs)
  const [localSearch, setLocalSearch] = useState<string>('')

  const dispatch = useAppDispatch()

  const debounce = () => {
    let timeoutID: number
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocalSearch(e.target.value)
      clearTimeout(timeoutID)
      timeoutID = setTimeout(() => {
        dispatch(handleFilterChange(e.target.value))
      }, 1000)
    }
  }

  const optimizedDebounce = useMemo(() => debounce(), [])

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (isLoading) return
    dispatch(handleFilterSelect({ name: e.target.name, value: e.target.value }))
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    dispatch(clearFilter())
  }

  return (
    <section className="dashboard-section">
      <form className="form dashboard-form">
        <h2>search form</h2>
        <div className="form-group">
          <FormRow
            type="text"
            name="search"
            value={localSearch}
            handleChange={optimizedDebounce}
          />
          <FormSelect
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSelect}
            list={['all', 'interview', 'declined', 'pending']}
          />
          <FormSelect
            labelText="type"
            name="searchType"
            value={searchType}
            handleChange={handleSelect}
            list={['all', 'intership', 'full-time', 'part-time', 'remote']}
          />
          <FormSelect
            name="sort"
            value={sort}
            handleChange={handleSelect}
            list={['latest', 'oldest', 'a-z', 'z-a']}
          />

          <button
            type="submit"
            className="btn btn-block clear-btn"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
