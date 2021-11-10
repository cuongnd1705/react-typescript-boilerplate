import * as React from 'react'
import { Navigate, RouteProps } from 'react-router-dom'

export interface PublicRouteProps extends RouteProps {
  children: JSX.Element
}

export function PublicRoute({ children }: PublicRouteProps) {
  const isLoggedIn = localStorage.getItem('token')

  return !isLoggedIn ? children : <Navigate to='/app' />
}
