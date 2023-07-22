import Select from 'react-select'

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
