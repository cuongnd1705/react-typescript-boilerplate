import { loginBackground } from 'config/images'
import * as React from 'react'
import { Outlet } from 'react-router-dom'

export interface AuthLayoutProps {}

export default function AuthLayout(props: AuthLayoutProps) {
  return (
    <div className='flex flex-col md:flex-row h-screen items-center'>
      <div className='bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen'>
        <img src={loginBackground} alt='' className='w-full h-full object-cover' />
      </div>

      <div
        className='bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
    flex items-center flex-col justify-center'
      >
        <Outlet />
      </div>
    </div>
  )
}
