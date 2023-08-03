//import React component
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Select from 'react-select'
import DatePicker from 'react-datepicker'

//Import datas
import departments from '../../data/departmentList'
import states from '../../data/statesList'
import { addEmployee } from '../../features/userSlice'

//Import my own Package component
import { ModalComponent } from 'tunsay-modal'
import 'tunsay-modal/dist/index.css'

//Import the mock data
import mockData from '../../_mock/mock'

/**
 * Form component for employee data entry and submission.
 *
 * @returns {JSX.Element} The JSX element containing the form for employee data entry.
 */
export const Form = () => {
  // Redux dispatch hook
  const dispatch = useDispatch()
  // State for form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateofbirth: null,
    startDate: null,
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
  })

  //The state of the modal for success message and other function to update the modal state.
  const [show, setShow] = useState(false)

  // Function to open the modal.
  const handleOpenModal = () => {
    setShow(true)
  }

  // Function to close the modal.
  const handleCloseModal = () => {
    setShow(false)
  }

  // The function to handle form field changes.
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // The function to handle state selection changes.
  const handleStateChange = (e) => {
    setFormData({ ...formData, state: e.name })
  }

  // The function to handle department selection changes.
  const handleDepartmentChange = (e) => {
    setFormData({ ...formData, department: e.value })
  }

  // The function to handle date of birth changes
  const handleDateChange = (date) => {
    setFormData({ ...formData, dateofbirth: date })
  }

  // The function to handle start date changes.
  const handleStartDateChange = (date) => {
    setFormData({ ...formData, startDate: date })
  }

  // The function to add mock data.
  function addMock(e) {
    e.preventDefault()
    e.stopPropagation()
    dispatch(addEmployee(mockData))
    handleOpenModal()
  }

  // The function to handle form submission and employee addition.
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      dateofbirth: formData.dateofbirth.toLocaleDateString('fr-FR'),
      startDate: formData.startDate.toLocaleDateString('fr-FR'),
      street: formData.street,
      city: formData.city,
      state: formData.state,
      zipCode: formData.zipCode,
      department: formData.department,
    }
    // Dispatching the 'addEmployee' action with employee data
    dispatch(addEmployee(data))
    // Opening the modal after successful form submission.
    handleOpenModal()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="dateofbirth">Date of Birth:</label>
        <DatePicker
          id={'dateofbirth'}
          name={'dateofbirth'}
          selected={formData.dateofbirth}
          onChange={handleDateChange}
          required
        />
      </div>
      <div>
        <label htmlFor="startDate">Start Date:</label>
        <DatePicker
          id={'startDate'}
          name={'startDate'}
          selected={formData.startDate}
          onChange={handleStartDateChange}
          required
        />
      </div>
      <fieldset className="adress">
        <legend>Adress</legend>
        <div>
          <label htmlFor="street">Street:</label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="state">State:</label>
          <Select
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.abbreviation}
            options={states}
            onChange={handleStateChange}
            required
          />
        </div>
        <div>
          <label htmlFor="zipCode">Zip Code:</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
        </div>
      </fieldset>
      <div>
        <label htmlFor="department">Department:</label>
        <Select
          options={departments}
          onChange={handleDepartmentChange}
          required
        />
      </div>
      <button className="save-button" type="submit">
        Save
      </button>
      <button className="add-mock" onClick={(e) => addMock(e)}>
        Add mock data
      </button>
      <ModalComponent
        isOpen={show}
        onClose={handleCloseModal}
        content="L'employé a été ajouté."
      />
    </form>
  )
}

export default Form
