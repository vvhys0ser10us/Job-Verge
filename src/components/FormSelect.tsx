import { ChangeEvent } from 'react'

type PropsType = {
  name: string
  value: string
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void
  labelText?: string
  list: Array<string>
}

const FormSelect = ({
  labelText,
  name,
  value,
  handleChange,
  list,
}: PropsType) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        value={value}
        id={name}
        onChange={handleChange}
        className="form-select"
      >
        {list.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default FormSelect
