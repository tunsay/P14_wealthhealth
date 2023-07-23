import DatePicker from 'react-datepicker'

/**
 * DateLayoutPicker component renders a date picker input field.
 *
 * @param {object} param0 - The object containing the component props.
 * @param {string} param0.name - The name attribute for the date picker input.
 * @param {date} param0.selected - The value representing the selected date for the date picker.
 * @param {function} param0.onChange - The callback function to handle date selection changes.
 * @returns {JSX.Element} The JSX element containing the date picker input field.
 */
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
