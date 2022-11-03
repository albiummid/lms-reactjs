import React from 'react'
import { Toaster } from 'react-hot-toast'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <main className='bg-web_wash min-h-screen'>
      <Toaster position='top-center' reverseOrder={true} />
      <Navbar />
      <>{children}</>
    </main>
  )
}
