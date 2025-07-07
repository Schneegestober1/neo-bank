import { forwardRef, type Ref, type SVGProps } from 'react'

const ArrowUpIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref: Ref<SVGSVGElement>) => (
    <>
      <svg
        width="0"
        height="0"
        style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
        aria-hidden="true"
        focusable="false"
      >
        <symbol
          id="arrow-up"
          viewBox="0 0 14 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 8L7 2L1 8"
            stroke="currentColor"
            strokeWidth="2"
          />
        </symbol>
      </svg>

      <svg
        width={14}
        height={9}
        viewBox="0 0 14 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <use href="#arrow-up" />
      </svg>
    </>
  )
)

export default ArrowUpIcon
