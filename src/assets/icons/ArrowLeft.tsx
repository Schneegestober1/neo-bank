import { forwardRef, type Ref, type SVGProps } from 'react'

const ArrowLeftIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref: Ref<SVGSVGElement>) => (
    <>
      <svg
        width="0"
        height="0"
        style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
        aria-hidden="true"
        focusable="false"
      >
        <symbol id="arrow-left" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M25 17H9.84211V24.3914C9.84211 24.5845 9.59562 24.6655 9.48109 24.5101L1 13L9.48109 1.48994C9.59562 1.33452 9.84211 1.41552 9.84211 1.60858V9H25"
            stroke="currentColor"
          />
        </symbol>
      </svg>

      <svg
        width={25}
        height={26}
        viewBox="0 0 25 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <use href="#arrow-left" />
      </svg>
    </>
  )
)

export default ArrowLeftIcon
