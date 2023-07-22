import { Link } from 'react-router-dom'
import Form from '../Form/Form'

export function CreateEmployee() {
  return (
    <html>
      <div class="title">
        <h1>HRnet</h1>
      </div>
      <div class="container">
        <Link to={'/list'}>View Current Employees</Link>
        <h2>Create Employee</h2>
        <Form />
      </div>
    </html>
  )
}
