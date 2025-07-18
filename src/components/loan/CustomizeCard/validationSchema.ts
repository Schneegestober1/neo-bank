import * as yup from 'yup'

export const minAmount = 150_000
export const maxAmount = 600_000

export const validationSchema = yup.object().shape({
  amount: yup
    .number()
    .typeError('Amount must be a number')
    .min(minAmount, `Minimum amount is ${minAmount.toLocaleString('ru-RU')}`)
    .max(maxAmount, `Maximum amount is ${maxAmount.toLocaleString('ru-RU')}`)
    .required('Amount is required'),
  lastName: yup.string().trim().required('Last name is required'),
  firstName: yup.string().trim().required('First name is required'),
  patronymic: yup.string().trim().notRequired(),
  term: yup.string().required('Term is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  birthdate: yup
    .string()
    .required('Date of birth is required')
    .matches(/^\d{2}-\d{2}-\d{4}$/, 'Enter date in format DD-MM-YYYY')
    .test('is-18+', 'You must be at least 18 years old', (value) => {
      if (!value) return false

      const [day, month, year] = value.split('-')
      const birthdate = new Date(`${year}-${month}-${day}`)
      if (isNaN(birthdate.getTime())) return false

      const today = new Date()
      const age = today.getFullYear() - birthdate.getFullYear()
      const m = today.getMonth() - birthdate.getMonth()
      const isBeforeBirthday = m < 0 || (m === 0 && today.getDate() < birthdate.getDate())

      return age > 18 || (age === 18 && !isBeforeBirthday)
    }),

  passportSeries: yup
    .string()
    .matches(/^\d{4}$/, 'Must be 4 digits')
    .required('Passport series is required'),
  passportNumber: yup
    .string()
    .matches(/^\d{6}$/, 'Must be 6 digits')
    .required('Passport number is required'),
})
