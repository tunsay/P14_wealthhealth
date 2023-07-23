import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import Table from '../Table/Table'

export function ListEmployee() {
  const { employees } = useSelector((state) => state.user)

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
    <div id="employee-div" class="container">
      <h1>Current Employees</h1>
      <Link to={'/'}>View Current Employees</Link>

      <div>
        <Table columns={columns} data={employees} />
      </div>
    </div>
  )
}
