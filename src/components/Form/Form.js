import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import departments from '../../data/departmentList'
import states from '../../data/statesList'
import { addEmployee } from '../../services/reducers'
// import DateLayoutPicker from '../DatePicker/DateLayoutPicker'
import SlideMenu from '../SlideMenu/SlideMenu'
import CustomModal from '../Modal/Modal'
import { DateLayoutPicker } from 'tunsay_date_picker'
// import mockData from '../../_mock/mock'

// Component
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

  const { employees } = useSelector((state) => state.user)
  console.log(employees)

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
