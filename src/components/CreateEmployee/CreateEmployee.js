import { Link } from 'react-router-dom'
import Form from '../Forms/Forms'

/**
 * CreateEmployee component renders a form to create a new employee.
 *
 * @returns {JSX.Element} The JSX element containing the form to create an employee.
 */
export function CreateEmployee() {
  return (
    <span>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to={'/list'}>View Current Employees</Link>
        <h2>Create Employee</h2>
        <Form />
      </div>
    </span>
  )
}
