import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Homepage from './components/Homepage'
import ReportSubmitted from './components/ReportSubmitted'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/success' element={<ReportSubmitted />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
