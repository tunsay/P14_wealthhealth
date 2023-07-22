import DatePicker from 'react-datepicker'

const DateLayoutPicker = ({ name, selected, onChange }) => {
  return (
    <DatePicker
      id={name}
      name={name}
      selected={selected}
      onChange={onChange}
      required
    />
  )
}

export default DateLayoutPicker
