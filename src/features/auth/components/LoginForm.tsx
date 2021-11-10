import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from 'components/Common'
import { InputField } from 'components/Form'
import { LoginBody } from 'models'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup'

export interface LoginFormProps {
  initialValues?: any
  onSubmit?: (formValues: any) => void
  loading: boolean
}

export function LoginForm({ initialValues, onSubmit, loading }: LoginFormProps) {
  const { t } = useTranslation()

  const schema = yup.object().shape({
    username: yup.string().required(t('form.rules.required.pid')),
    password: yup
      .string()
      .required(t('form.rules.required.password'))
      .min(6, t('form.rules.min.password'))
      .max(10, t('form.rules.max.password')),
  })

  const { control, handleSubmit, trigger } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  })

  const handleFormSubmit = async (formValues: LoginBody) => {
    await onSubmit?.(formValues)
  }

  return (
    <form className='mt-6' onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <InputField
          name='username'
          control={control}
          type='text'
          id='username'
          placeholder={t('form.placeholder.username')}
        />
      </div>
      <div className='mt-4'>
        <InputField
          name='password'
          control={control}
          type='password'
          id='password'
          placeholder={t('form.placeholder.password')}
        />
      </div>

      <Button type='submit' label={t('button.login')} loading={loading} />
    </form>
  )
}
