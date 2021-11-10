import { Loading, NotFound } from 'components/Common'
import { PrivateRoute, PublicRoute } from 'components/Guard'
import { LoginPage } from 'features/auth/pages/LoginPage'
import * as React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

export interface RouterProps {}

const AuthLayout = React.lazy(() => import('components/Layout/AuthLayout'))
const MainLayout = React.lazy(() => import('components/Layout/MainLayout'))

export default function Router(props: RouterProps) {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path='/'
            element={
              <PublicRoute>
                <Navigate to='/login' />
              </PublicRoute>
            }
          />

          <Route
            path='/'
            element={
              <PublicRoute>
                <AuthLayout />
              </PublicRoute>
            }
          >
            <Route path='/login' element={<LoginPage />} />
          </Route>

          <Route
            path='/app/*'
            element={
              <PrivateRoute>
                <MainLayout />
              </PrivateRoute>
            }
          />

          <Route
            path='*'
            element={
              <PublicRoute>
                <NotFound />
              </PublicRoute>
            }
          />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  )
}
