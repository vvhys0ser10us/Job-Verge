import { LandingPage, ErrorPage, Dashboard, RegisterPage } from './pages'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="landing" element={<LandingPage />}></Route>
        <Route path="register" element={<RegisterPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App
