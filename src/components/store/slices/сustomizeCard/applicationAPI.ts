import type { FormValues } from "../../../loan/CustomizeCard/CustomizeCardTypes"

export async function postApplication(data: FormValues) {
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

  console.log(data)

  if (!response.ok) {
    throw new Error(`Ошибка сервера: ${response.statusText}`)
  }

  return await response.json()
}