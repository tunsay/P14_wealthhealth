import Select from 'react-select'

/**
 * SlideMenu component renders a custom select menu (dropdown) with options provided in the 'fields' array.
 *
 * @typedef {Object} Option
 * @property {string | number} value - The value associated with the option.
 * @property {string} label - The label or display text for the option.
 *
 * @property {Option[]} fields - An array of option objects representing the selectable options in the menu.
 * @property {function} handleChange - The callback function to handle the selection change.
 * @property {string} valueName - The name of the property in the option object representing the option value.
 * @property {string} labelName - The name of the property in the option object representing the option label.
 *
 * @param {Props} props - The object containing the component props.
 * @returns {JSX.Element} The JSX element containing the custom select menu.
 */
const SlideMenu = ({ fields, handleChange, valueName, labelName }) => {
  return (
    <Select
      getOptionLabel={(option) => option[labelName]}
      getOptionValue={(option) => option[valueName]}
      options={fields}
      onChange={handleChange}
      required
    />
  )
}

export default SlideMenu
