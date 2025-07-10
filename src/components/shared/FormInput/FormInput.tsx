import React from 'react'
import clsx from 'clsx'
import styles from './form-input.module.scss'

interface FormInputProps {
  label: string
  name: string
  type?: 'text' | 'email' | 'date' | 'select'
  placeholder?: string
  required?: boolean
  maxLength?: number
  className?: string
  options?: string[]
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
}) => {
  return (
    <label htmlFor={name} className={clsx(styles['label'], className)}>
      <div className={styles['wrapper']}>
        {label}
        {required && <span className={styles['required']}>*</span>}
      </div>

      {type === 'select' ? (
        <select
          id={name}
          name={name}
          required={required}
          className={styles['input']} 
        >
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
          className={styles['input']}
        />
      )}
    </label>
  )
}

export default FormInput
