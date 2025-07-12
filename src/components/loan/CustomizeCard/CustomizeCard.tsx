import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import Button from '../../shared/Button/Button'
import FormInput from '../../shared/FormInput/FormInput'
import styles from './customize-card.module.scss'
import * as yup from 'yup'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

export type CustomizeCardRef = {
  scrollToForm: () => void
}

type FormValues = {
  lastName: string
  firstName: string
  patronymic?: string | null
  term: string
  email: string
  birthDate: string
  passportSeries: string
  passportNumber: string
}

const validationSchema = yup.object().shape({
  lastName: yup.string().trim().required('Last name is required'),
  firstName: yup.string().trim().required('First name is required'),
  patronymic: yup.string().trim().nullable().notRequired(),
  term: yup.string().required('Term is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  birthDate: yup
    .date()
    .typeError('Enter a valid date')
    .max(new Date(new Date().setFullYear(new Date().getFullYear() - 18)), 'You must be 18+')
    .required('Date of birth is required'),
  passportSeries: yup
    .string()
    .matches(/^\d{4}$/, 'Must be 4 digits')
    .required('Passport series is required'),
  passportNumber: yup
    .string()
    .matches(/^\d{6}$/, 'Must be 6 digits')
    .required('Passport number is required'),
})

const CustomizeCard = forwardRef<CustomizeCardRef>((_, ref) => {
  const [isLoading, setIsLoading] = useState(false)
  const [value, setValue] = useState(150_000)
  const min = 150_000
  const max = 600_000
  const percent = ((value - min) / (max - min)) * 100

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, touchedFields },
    watch,
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: { term: '6 months' },
    mode: 'onChange',
  })

  const watchedFields = watch()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const finalData = {
      ...data,
      amount: value,
    }

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      console.log('Submitted:', finalData)
    }, 2000)
  }

  const formRef = useRef<HTMLDivElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value))
  }

  useImperativeHandle(ref, () => ({
    scrollToForm: () => {
      formRef.current?.scrollIntoView({ behavior: 'smooth' })
    },
  }))

  
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
                <p className={styles['customize-card__selected-amount']}>
                  {value.toLocaleString('ru-RU')}
                </p>
              </div>

              <div className={styles['customize-card__slider']}>
                <input
                  type="range"
                  min={min}
                  max={max}
                  step={1000}
                  value={value}
                  onChange={handleChange}
                  className={styles['customize-card__range-input']}
                  style={{
                    background: `linear-gradient(to right, #6b38f2 0%, #6b38f2 ${percent}%, #e0e6ed ${percent}%, #e0e6ed 100%)`,
                  }}
                />
              </div>

              <div className={styles['customize-card__amount-range']}>
                <span>{min.toLocaleString('ru-RU')}</span>
                <span>{max.toLocaleString('ru-RU')}</span>
              </div>
            </div>
          </div>

          <div className={styles['customize-card__line']}></div>

          <div className={styles['customize-card__chosen-amount']}>
            <h4 className={styles['customize-card__chosen-title']}>You have chosen the amount</h4>
            <p className={styles['customize-card__chosen-sum']}>{value.toLocaleString('ru-RU')}</p>
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
              {...register('birthDate')}
              type="date"
              error={errors.birthDate}
              isValid={isFieldValid('birthDate')}
              value={watchedFields.birthDate ?? ''}
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
