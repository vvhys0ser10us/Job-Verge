import FormRow from './FormRow'
import FormSelect from './FormSelect'
import { useAppSelector, useAppDispatch } from '../utils/hooks'

const SearchForm = () => {
  const {
    isLoading,
    searchFilter: { search, searchStatus, searchType, sort },
  } = useAppSelector((store) => store.allJobs)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {}

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {}

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  return (
    <section className="dashboard-section">
      <form className="form dashboard-form">
        <h2>search form</h2>
        <div className="form-group">
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleChange}
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
