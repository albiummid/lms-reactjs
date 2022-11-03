import React from 'react'

export default function SectionDivider({ title, className }) {
  return (
    <div className='my-4 flex '>
      <span className='w-fit text-lg font-semibold'>{title}</span>
      {/* <h1 className=' w-full  justify-items-end bg-gray-400 mt-6 ml-1 h-[1px]' /> */}
    </div>
  )
}
