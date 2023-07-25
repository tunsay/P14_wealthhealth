import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { useSelector } from 'react-redux'
import departments from '../../data/departmentList'
import states from '../../data/statesList'
import { addEmployee } from '../../services/reducers'
import DateLayoutPicker from '../DatePicker/DateLayoutPicker'
// import { DateLayoutPicker } from '@tunsay/tunsay_peuimport'
import SlideMenu from '../SlideMenu/SlideMenu'
import CustomModal from '../Modal/Modal'

// import mockData from '../../_mock/mock'

/**
 * Form component renders a form to add a new employee.
 *
 * @typedef {Object} FormData
 * @property {string} firstName - The first name of the employee.
 * @property {string} lastName - The last name of the employee.
 * @property {Date | null} dateofbirth - The date of birth of the employee.
 * @property {Date | null} startDate - The start date of employment for the employee.
 * @property {string} street - The street address of the employee.
 * @property {string} city - The city where the employee lives.
 * @property {string} state - The state where the employee lives (selected using a custom 'SlideMenu' component).
 * @property {string} zipCode - The ZIP code of the employee's address.
 * @property {string} department - The department where the employee belongs (selected using a custom 'SlideMenu' component).
 *
 * @property {FormData} formData - The object containing the form data state.
 * @property {function} setFormData - The function to update the form data state.
 * @property {boolean} modalIsOpen - The state of the modal for success message display.
 * @property {function} setModalIsOpen - The function to update the modal state.
 * @property {function} handleOpenModal - The function to open the success message modal.
 * @property {function} handleCloseModal - The function to close the success message modal.
 * @property {Array} employees - The array containing the list of employees from the Redux store.
 * @property {function} handleChange - The function to handle form field changes.
 * @property {function} handleStateChange - The function to handle state selection changes.
 * @property {function} handleDepartmentChange - The function to handle department selection changes.
 * @property {function} handleDateChange - The function to handle date of birth changes.
 * @property {function} handleStartDateChange - The function to handle start date changes.
 * @property {function} handleSubmit - The function to handle form submission and employee addition.
 *
 * @returns {JSX.Element} The JSX element containing the form to add a new employee.
 */
export const Form = () => {
  const dispatch = useDispatch()
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

  //modal parameter
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleOpenModal = () => {
    setModalIsOpen(true)
  }

  const handleCloseModal = () => {
    setModalIsOpen(false)
  }

  // useEffect(() => {
  //   dispatch(addEmployee(mockData))
  // }, [dispatch])

  // const { employees } = useSelector((state) => state.user)
  // console.log(employees)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleStateChange = (e) => {
    setFormData({ ...formData, state: e.name })
  }

  const handleDepartmentChange = (e) => {
    setFormData({ ...formData, department: e.value })
  }

  const handleDateChange = (date) => {
    setFormData({ ...formData, dateofbirth: date })
  }

  const handleStartDateChange = (date) => {
    setFormData({ ...formData, startDate: date })
  }

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
    //It will add the employee
    dispatch(addEmployee(data))
    //It will open the modal
    dispatch(handleOpenModal)
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
        <DateLayoutPicker
          name="dateofbirth"
          selected={formData.dateofbirth}
          onChange={handleDateChange}
        />
      </div>
      <div>
        <label htmlFor="startDate">Start Date:</label>
        <DateLayoutPicker
          name="startDate"
          selected={formData.startDate}
          onChange={handleStartDateChange}
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
          {/* <Select
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.abbreviation}
            options={states}
            // defaultValue={states[0]}
            onChange={handleStateChange}
          /> */}
          <SlideMenu
            fields={states}
            handleChange={handleStateChange}
            valueName={'abbreviation'}
            labelName={'name'}
          ></SlideMenu>
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
        <SlideMenu
          fields={departments}
          handleChange={handleDepartmentChange}
          valueName={'value'}
          labelName={'label'}
        ></SlideMenu>
      </div>
      <button className="save-button" type="submit">
        Save
      </button>
      <CustomModal
        isOpen={modalIsOpen}
        onClose={handleCloseModal}
        content={<p>L'employée a été ajouté !</p>}
      />
    </form>
  )
}

export default Form