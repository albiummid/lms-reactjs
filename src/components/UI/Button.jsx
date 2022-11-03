import React from 'react'

export default function Button({
  children,
  className,
  icon,
  variant,
  outline,
  ...rest
}) {
  const buttonTheme = {
    violet: 'text-white bg-violet-600  ring-violet-200',
    red: 'text-white bg-red-600 ring-red-200',
    green: 'text-white bg-green-600 ring-green-200',
    blue: 'text-white bg-blue-600 ring-blue-200',
    teal: 'text-white bg-teal-600 ring-teal-200',
  }
  const outlineButtonTheme = {
    violet: 'text-violet-400 border border-violet-400',
    green: 'text-green-500 border border-green-500',
    red: 'text-red-500 border border-red-500',
    blue: 'text-blue-500 border border-blue-500',
    teal: 'text-teal-500 border border-teal-500',
  }
  return (
    <button
      className={`flex shadow-md items-center space-x-2 py-2 h-fit px-4 rounded-md opacity-90 hover:opacity-100 scale-105 active:scale-100 active:opacity-80 hover:shadow-3xl  ${
        outline
          ? outlineButtonTheme[variant]
          : buttonTheme[variant] + ` active:ring-4`
      }   duration-200  my-4  ${className} `}
      {...rest}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </button>
  )
}
