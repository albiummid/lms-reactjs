import React from 'react'

export default function Section({ children, className, ...rest }) {
  return (
    <section
      className={`shadow-3xl bg-white hover:shadow-4xl duration-300 ${className}`}
      {...rest}
    >
      {children}
    </section>
  )
}
