import React, { useEffect } from 'react'
import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

export default function Collapse({
  heading = 'Heading albi ummid tanvir',
  active,
  children,
  handleClose,
  onClick,
  ...rest
}) {
  const [open, setOpen] = useState(active)
  useEffect(() => {
    if (active) {
      setOpen(active)
    } else {
      setOpen(false)
    }
  }, [active])

  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
        onClick(e)
      }}
      {...rest}
      className='w-full'
    >
      <div
        onClick={() => {
          setOpen((prv) => !prv)
        }}
        className={` flex justify-between items-center gap-2 px-4 py-2 rounded-md hover:bg-green-300 select-none cursor-pointer w-full border ${
          open ? 'bg-green-300 rounded-b-none ' : 'bg-white'
        }`}
      >
        {typeof heading === 'string' ? (
          <p className=' truncate'>{heading}</p>
        ) : (
          <>{heading}</>
        )}
        <AiOutlinePlus
          className={` cursor-pointer duration-100 ${open ? 'rotate-45' : ''}`}
        />
      </div>
      {open && (
        <div
          className={`rounded-md  rounded-t-none  duration-500 border-2 border-t-0 p-4 bg-white`}
        >
          {children}
        </div>
      )}
    </div>
  )
}
