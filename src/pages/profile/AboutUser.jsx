import React from 'react'
import { AiOutlineEdit } from 'react-icons/ai'

export default function AboutUser() {
  const FieldGroup = ({ name, children, value }) => {
    return (
      <div className='grid grid-cols-4'>
        <h2 className=' col-span-1'>{name} :</h2>
        <span className='col-span-3'>{value}</span>
      </div>
    )
  }

  return (
    <div className=' space-y-4 relative '>
      <AiOutlineEdit
        size={40}
        className='absolute right-0 top-0 bg-white border border-1 p-2 hover:text-red-400 duration-300 cursor-pointer rounded-md active:opacity-80 '
      />
      <section className=''>
        <h2 className='text-sm mb-4'>CONTACT INFORMATION</h2>
        <FieldGroup name={'Phone'} value={<span>+8801755977522</span>} />
        <FieldGroup name={'Address'} value={<span>Savar Dhaka</span>} />
        <FieldGroup name={'E-mail'} value={<span>albiummid@gmail.com</span>} />
        <FieldGroup name={'Site'} value={<span>albi.netlify.app</span>} />
      </section>

      <section>
        <h2>BASIC INFORMATION</h2>
        <FieldGroup name={'Birthday'} value={'6 August ,1996'} />
        <FieldGroup name={'Gender'} value={'Male'} />
      </section>
    </div>
  )
}
