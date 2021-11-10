import * as React from 'react'
import { Control, useController } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  control: Control<any>
  label?: string
}
export function InputField({
  id,
  name,
  control,
  label,
  placeholder,
  size,
  type,
  ...inputProps
}: InputFieldProps) {
  const { t } = useTranslation()

  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({ name, control })

  return (
    <>
      <label className='block text-gray-700' htmlFor={id}>
        {label}
      </label>
      <input
        className={`w-full px-4 py-3 rounded bg-gray-50 my-2 border focus:bg-white focus:outline-none
        ${invalid ? 'focus:border-red-500' : 'focus:border-secondary-500'}`}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        {...inputProps}
      />
      <span className='text-red-500 text-xs'>{error?.message}</span>
    </>
  )
}
