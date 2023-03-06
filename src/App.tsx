import { LandingPage, ErrorPage, RegisterPage, ProtectedRoute } from './pages'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import {
  SharedLayout,
  Stats,
  AllJobs,
  AddJob,
  Profile,
} from './pages/Dashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs></AllJobs>} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="landing" element={<LandingPage />}></Route>
        <Route path="register" element={<RegisterPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <ToastContainer position="top-center" theme="dark" autoClose={3000} />
    </Router>
  )
}

export default App
