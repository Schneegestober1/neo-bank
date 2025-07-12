export type CustomizeCardRef = {
  scrollToForm: () => void
}

export type FormValues = {
  amount: number
  lastName: string
  firstName: string
  patronymic?: string
  term: string
  email: string
  birthdate: string
  passportSeries: string
  passportNumber: string
}