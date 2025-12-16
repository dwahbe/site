'use client'

import { useEffect, useRef, type CSSProperties } from 'react'

export function Signature() {
  const lettersRef = useRef<(SVGTSpanElement | null)[]>([])

  useEffect(() => {
    lettersRef.current.forEach((el) => {
      if (!el) return
      const length = el.getComputedTextLength()
      el.style.setProperty('--dash', length.toString())
    })
  }, [])

  return (
    <svg className="signature" viewBox="0 0 500 80" aria-hidden="true">
      <text x="0" y="60" fontSize="80">
        {Array.from('Dylan Wahbe').map((letter, index) => (
          <tspan
            key={index}
            ref={(el) => { lettersRef.current[index] = el }}
            className="signature-letter"
            style={{ '--index': index } as CSSProperties}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </tspan>
        ))}
      </text>
    </svg>
  )
}
