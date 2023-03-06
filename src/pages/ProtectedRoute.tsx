import { ReactElement } from 'react'
import { useAppSelector } from '../utils/hooks'
import { Navigate } from 'react-router-dom'

type ChildrenType = {
  children: JSX.Element
}

const ProtectedRoute = ({ children }: ChildrenType) => {
  const { user } = useAppSelector((state) => state.user)

  if (!user) {
    return <Navigate to="/landing" />
  }

  return children
}

export default ProtectedRoute
