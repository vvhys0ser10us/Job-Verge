import { useState } from 'react'
import { FormRow } from '../../components'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'
import { toast } from 'react-toastify'
import { updateUser } from '../../features/user/userSlice'
import { UpdateUser } from '../../utils/types'

const Profile = () => {
  const { user, isLoading } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()

  const [values, setValues] = useState<UpdateUser>({
    name: user?.name || '',
    email: user?.email || '',
    lastName: user?.lastName || '',
    location: user?.location || '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const { name, email, lastName, location } = values
    if (!name || !email || !lastName || !location) {
      toast.error('please fill out all fields')
      return
    }
    dispatch(updateUser({ name, email, lastName, location }))
  }

  return (
    <section className="dashboard-section">
      <form className="form dashboard-form" onSubmit={handleSubmit}>
        <h2>profile</h2>

        <div className="form-group">
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          ></FormRow>
          <FormRow
            type="text"
            name="lastName"
            value={values.lastName}
            labelText="last name"
            handleChange={handleChange}
          ></FormRow>
          <FormRow
            type="email"
            name="email"
            value={values.email}
            handleChange={handleChange}
          ></FormRow>
          <FormRow
            type="text"
            name="location"
            value={values.location}
            handleChange={handleChange}
          ></FormRow>

          <button type="submit" className="btn btn-block" disabled={isLoading}>
            save changes
          </button>
        </div>
      </form>
    </section>
  )
}

export default Profile
