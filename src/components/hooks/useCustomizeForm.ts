import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import type { FormValues } from '../loan/CustomizeCard/CustomizeCardTypes'
import { maxAmount, minAmount, validationSchema } from '../loan/CustomizeCard/validationSchema'

export function useCustomizeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, touchedFields },
    watch,
    setValue,
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: { term: '6 months', amount: minAmount },
    mode: 'onChange',
  })

  const watchedFields = watch()

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('amount', Number(e.target.value), { shouldValidate: true, shouldDirty: true })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = Number.parseInt(e.target.value.replace(/\D/g, ''))
    setValue('amount', rawVal, { shouldValidate: true, shouldDirty: true })
  }

  const handleInputBlur = () => {
    let numVal = Number(watchedFields.amount)
    if (!numVal || numVal < minAmount) numVal = minAmount
    if (numVal > maxAmount) numVal = maxAmount
    setValue('amount', numVal, { shouldValidate: true, shouldDirty: true })
  }

  const isFieldValid = (fieldName: keyof FormValues) => {
    const value = watchedFields[fieldName]
    const isTouchedOrDirty = dirtyFields[fieldName] || touchedFields[fieldName]
    return (
      !errors[fieldName] &&
      isTouchedOrDirty &&
      value !== undefined &&
      (typeof value !== 'string' || value.trim() !== '')
    )
  }

  return {
    register,
    handleSubmit,
    errors,
    watchedFields,
    reset,
    handleSliderChange,
    handleInputChange,
    handleInputBlur,
    isFieldValid,
  }
}
