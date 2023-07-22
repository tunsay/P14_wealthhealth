import './App.css'
/* router */
import { BrowserRouter, Route, Routes } from 'react-router-dom'
/* components */
import { ListEmployee } from './components/ListEmployee/ListEmployee'
import { CreateEmployee } from './components/CreateEmployee/CreateEmployee'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/list" element={<ListEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
