import type { RefObject } from 'react'

export const useSliderControls = (
  ref: RefObject<HTMLElement | null>,
  scrollAmount: number = 500
) => {
  const scrollNext = () => {
    if (ref.current) ref.current.scrollLeft += scrollAmount
  }

  const scrollToStart = () => {
    if (ref.current) ref.current.scrollLeft = 0
  }

  return { scrollNext, scrollToStart }
}
