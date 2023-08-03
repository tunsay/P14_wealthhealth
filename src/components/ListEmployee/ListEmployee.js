import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import Table from '../Table/Table'

/**
 * ListEmployee component displays a table listing the current employees' details.
 *
 * @typedef {Object} EmployeeData
 * @property {string} firstName - The first name of the employee.
 * @property {string} lastName - The last name of the employee.
 * @property {string} street - The street address of the employee.
 * @property {string} city - The city where the employee lives.
 * @property {string} state - The state where the employee lives.
 * @property {string} zipCode - The ZIP code of the employee's address.
 * @property {string} department - The department where the employee belongs.
 * @property {string} dateofbirth - The date of birth of the employee.
 * @property {string} startDate - The start date of employment for the employee.
 *
 * @property {Array<EmployeeData>} employees - The array of employee data objects fetched from the Redux store.
 *
 * @returns {JSX.Element} The JSX element containing the table listing the current employees.
 */
export function ListEmployee() {
  const { employees } = useSelector((state) => state.user)
  const test = useSelector((state) => state)
  console.log(test)

  const columns = useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      {
        Header: 'Street',
        accessor: 'street',
      },
      {
        Header: 'City',
        accessor: 'city',
      },
      {
        Header: 'State',
        accessor: 'state',
      },
      {
        Header: 'ZipCode',
        accessor: 'zipCode',
      },
      {
        Header: 'Department',
        accessor: 'department',
      },
      {
        Header: 'Date of Brith',
        accessor: 'dateofbirth',
      },
      {
        Header: 'Start Date',
        accessor: 'startDate',
      },
    ],
    []
  )

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <Link to={'/'}>View Current Employees</Link>

      <div>
        <Table columns={columns} data={employees} />
      </div>
    </div>
  )
}
