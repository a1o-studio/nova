'use client'

import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  className?: string
  appName: string
}

export function Button({ children, className }: ButtonProps) {
  return (
    <button
      type="button"
      className={className}
    >
      {children}
    </button>
  )
}
