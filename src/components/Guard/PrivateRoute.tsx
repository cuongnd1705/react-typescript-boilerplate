import * as React from 'react'
import { Navigate, RouteProps } from 'react-router-dom'

export interface PrivateRouteProps extends RouteProps {
  children: JSX.Element
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const isLoggedIn = localStorage.getItem('token')

  return isLoggedIn ? children : <Navigate to='/login' />
}
