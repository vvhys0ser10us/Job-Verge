import { LandingPage, ErrorPage, Dashboard, RegisterPage } from './pages'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="landing" element={<LandingPage />}></Route>
        <Route path="register" element={<RegisterPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <ToastContainer position="top-center" theme="dark" autoClose={3000} />
    </Router>
  )
}

export default App
