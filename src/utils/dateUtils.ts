export function formatDate(timeStamp: number | null): string | null {
  if (!timeStamp) return null

  const date = new Date(timeStamp)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()

  return `MSC ${day}.${month}.${year}`
}
