import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { LoginForm } from '../components/LoginForm'

export interface LoginPageProps {}

export function LoginPage(props: LoginPageProps) {
  const { t } = useTranslation()
  const [loading, setLoading] = React.useState<boolean>(false)

  const handleLoginFormSubmit = () => {}

  return (
    <>
      <div className='w-full'>
        <h1 className='text-xl md:text-4xl font-bold uppercase text-center text-primary-500'>
          {t('title.login')}
        </h1>

        <LoginForm onSubmit={handleLoginFormSubmit} loading={loading} />
      </div>
    </>
  )
}
