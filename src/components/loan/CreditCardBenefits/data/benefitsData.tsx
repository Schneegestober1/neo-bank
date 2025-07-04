import React from 'react'
import MoneyDuotoneIcon from '../../../../assets/icons/MoneyDuotoneIcon'
import CalendarDuotoneIcon from '../../../../assets/icons/CalendarDuotoneIcon'
import ClockDuotoneIcon from '../../../../assets/icons/ClockDuotoneIcon'
import BagDuotoneIcon from '../../../../assets/icons/BagDuotoneIcon'
import CreditCardDuotoneIcon from '../../../../assets/icons/CreditCardDuotoneIcon'

export type Benefit = {
  title: string
  text: string
  icon?: React.ReactNode
}

export const benefitsData: Benefit[] = [
  {
    title: 'Up to 50 000 ₽',
    text: 'Cash and transfers without commission and percent',
    icon: <MoneyDuotoneIcon />,
  },
  {
    title: 'Up to 160 days',
    text: 'Without percent on the loan',
    icon: <CalendarDuotoneIcon />,
  },
  {
    title: 'Free delivery',
    text: 'We will deliver your card by courier at a convenient place and time for you',
    icon: <ClockDuotoneIcon />,
  },
  {
    title: 'Up to 12 months',
    text: 'No percent. For equipment, clothes and other purchases in installments',
    icon: <BagDuotoneIcon />,
  },
  {
    title: 'Convenient deposit and withdrawal',
    text: 'At any ATM. Top up your credit card for free with cash or transfer from other cards',
    icon: <CreditCardDuotoneIcon />,
  },
]
