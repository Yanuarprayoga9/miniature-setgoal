import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import TestUpload from './pages/TestUpload'
export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>/</h1>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/uploadFile' element={<TestUpload/>} />
      </Routes>
    </BrowserRouter>
  )
}