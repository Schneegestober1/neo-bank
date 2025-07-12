import React from 'react'
import clsx from 'clsx'
import styles from './form-input.module.scss'
import type { FieldError } from 'react-hook-form'
import ErrorIcon from '../../../assets/icons/ErrorIcon'
import SuccessIcon from '../../../assets/icons/SuccessIcon'

interface FormInputProps {
  label: string
  name: string
  type?: 'text' | 'email' | 'date' | 'select'
  placeholder?: string
  required?: boolean
  maxLength?: number
  className?: string
  options?: string[]
  error?: FieldError
  isValid?: boolean
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  maxLength,
  className,
  options = [],
  error,
  isValid,
}) => {
  return (
    <label htmlFor={name} className={clsx(styles['label'], className)}>
      <div className={styles['wrapper']}>
        {label}
        {required && <span className={styles['required']}>*</span>}
      </div>

      <div className={styles['input-wrapper']}>
        {' '}
        {/* новый контейнер */}
        {type === 'select' ? (
          <select
            id={name}
            name={name}
            required={required}
            className={clsx(styles['input'], { [styles['input-error']]: error })}
          >
            <option value="" disabled></option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            required={required}
            maxLength={maxLength}
            className={clsx(styles['input'], { [styles['input-error']]: error })}
          />
        )}
        {error && <ErrorIcon className={styles['error-icon']} />}
        {!error && isValid && <SuccessIcon className={styles['success-icon']} />}
      </div>

      {error && <span className={styles['error-message']}>{error.message}</span>}
    </label>
  )
}

export default FormInput
