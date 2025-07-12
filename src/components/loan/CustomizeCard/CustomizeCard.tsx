import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import Button from '../../shared/Button/Button'
import FormInput from '../../shared/FormInput/FormInput'
import styles from './customize-card.module.scss'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import type { CustomizeCardRef, FormValues } from './CustomizeCardTypes'
import { maxAmount, minAmount, validationSchema } from './validationSchema'

const CustomizeCard = forwardRef<CustomizeCardRef>((_, ref) => {
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
  const formRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value)
    setValue('amount', val, { shouldValidate: true, shouldDirty: true })
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

  const amountValue = Number(watchedFields.amount) || minAmount
  const percent = ((amountValue - minAmount) / (maxAmount - minAmount)) * 100

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

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true)

    try {
      const [day, month, year] = data.birthdate.split('-')
      const formattedDate = `${year}-${month}-${day}`

      const response = await fetch('http://localhost:8080/application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          birthdate: formattedDate,
          amount: Number(data.amount),
          term: Number(data.term.split(' ')[0]),
        }),
      })
      console.log(
        JSON.stringify({
          ...data,
          birthDate: formattedDate,
          amount: Number(data.amount),
          term: Number(data.term.split(' ')[0]),
        })
      )
      if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.statusText}`)
      }

      const result = await response.json()
      console.log('Ответ сервера:', result)
      reset({term: '6 months', amount: minAmount})
    } catch (error) {
      console.error('Ошибка при отправке:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useImperativeHandle(ref, () => ({
    scrollToForm: () => {
      formRef.current?.scrollIntoView({ behavior: 'smooth' })
    },
  }))

  return (
    <div className={styles['customize-card']} ref={formRef}>
      <div className={styles['customize-card__container']}>
        <div className={styles['customize-card__top']}>
          <div className={styles['customize-card__header']}>
            <div className={styles['customize-card__header-top']}>
              <h3 className={styles['customize-card__title']}>Customize your card</h3>
              <p className={styles['customize-card__step']}>Step 1 of 5</p>
            </div>

            <div className={styles['customize-card__amount-selector']}>
              <div className={styles['customize-card__amount-labels']}>
                <p className={styles['customize-card__label']}>Select amount</p>

                <input
                  type="text"
                  {...register('amount')}
                  value={watchedFields.amount ?? ''}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  className={styles['customize-card__amount-input']}
                />
              </div>

              <div className={styles['customize-card__slider']}>
                <input
                  type="range"
                  min={minAmount}
                  max={maxAmount}
                  step={1000}
                  value={amountValue}
                  onChange={handleSliderChange}
                  className={styles['customize-card__range-input']}
                  style={{
                    background: `linear-gradient(to right, #6b38f2 0%, #6b38f2 ${percent}%, #e0e6ed ${percent}%, #e0e6ed 100%)`,
                  }}
                />
              </div>

              <div className={styles['customize-card__amount-range']}>
                <span>{minAmount.toLocaleString('ru-RU')}</span>
                <span>{maxAmount.toLocaleString('ru-RU')}</span>
              </div>
            </div>
          </div>

          <div className={styles['customize-card__line']}></div>

          <div className={styles['customize-card__chosen-amount']}>
            <h4 className={styles['customize-card__chosen-title']}>You have chosen the amount</h4>
            <p className={styles['customize-card__chosen-sum']}>
              {amountValue.toLocaleString('ru-RU')}
            </p>
            <div className={styles['customize-card__chosen-sum-line']}></div>
          </div>
        </div>

        <form className={styles['customize-card__form']} onSubmit={handleSubmit(onSubmit)}>
          <h3 className={styles['customize-card__form-title']}>Contact Information</h3>
          <div className={styles['customize-card__grid']}>
            <FormInput
              label="Your last name"
              placeholder="For Example Doe"
              {...register('lastName')}
              error={errors.lastName}
              isValid={isFieldValid('lastName')}
              value={watchedFields.lastName ?? ''}
            />

            <FormInput
              label="Your first name"
              placeholder="For Example John"
              {...register('firstName')}
              error={errors.firstName}
              isValid={isFieldValid('firstName')}
              value={watchedFields.firstName ?? ''}
            />

            <FormInput
              label="Your patronymic"
              placeholder="For Example Victorovich"
              {...register('patronymic')}
              error={errors.patronymic}
              isValid={isFieldValid('patronymic')}
              value={watchedFields.patronymic ?? ''}
            />

            <FormInput
              label="Select term"
              {...register('term')}
              type="select"
              options={['6 months', '12 months', '18 months', '24 months']}
              error={errors.term}
              isValid={isFieldValid('term')}
              value={watchedFields.term ?? ''}
            />

            <FormInput
              label="Your email"
              placeholder="test@gmail.com"
              {...register('email')}
              error={errors.email}
              isValid={isFieldValid('email')}
              value={watchedFields.email ?? ''}
            />

            <FormInput
              label="Your date of birth"
              type="text"
              placeholder="DD-MM-YYYY"
              {...register('birthdate')}
              error={errors.birthdate}
              isValid={isFieldValid('birthdate')}
              value={watchedFields.birthdate ?? ''}
            />

            <FormInput
              label="Your passport series"
              placeholder="0000"
              maxLength={4}
              {...register('passportSeries')}
              error={errors.passportSeries}
              isValid={isFieldValid('passportSeries')}
              value={watchedFields.passportSeries ?? ''}
            />

            <FormInput
              label="Your passport number"
              placeholder="000000"
              maxLength={6}
              {...register('passportNumber')}
              error={errors.passportNumber}
              isValid={isFieldValid('passportNumber')}
              value={watchedFields.passportNumber ?? ''}
            />
          </div>

          <div className={styles['customize-card__btn-box']}>
            <Button className={styles['customize-card__btn-submit']} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Continue'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
})

export default CustomizeCard
