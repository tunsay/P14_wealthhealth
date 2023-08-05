import './App.css'
/* router */
import { HashRouter, Route, Routes } from 'react-router-dom'
/* components */
import { ListEmployee } from './components/ListEmployee/ListEmployee'
import { CreateEmployee } from './components/CreateEmployee/CreateEmployee'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/list" element={<ListEmployee />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
