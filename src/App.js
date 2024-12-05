import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import NotFound from './pages/NotFound'
import Wrapped from './pages/Wrapped'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/wrapped' element={<Wrapped/>}/>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
