import React, { useRef, useState } from 'react'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import { useClickAway } from 'react-use'
export default function OptionButton({
  options = [
    {
      title: 'Edit Post',
      icon: <AiOutlineEdit />,
      action: () => {
        console.log('Editing...')
      },
    },
    {
      title: 'Delete Post',
      icon: <AiOutlineDelete />,
      action: () => {
        console.log('Deleting...')
      },
    },
  ],
}) {
  const [clicked, setClicked] = useState(false)
  const optionsRef = useRef(null)
  useClickAway(optionsRef, () => {
    setClicked(false)
  })

  return (
    <div ref={optionsRef} className='relative group'>
      <BsThreeDots
        onClick={() => {
          setClicked((prv) => !prv)
        }}
        size={40}
        className='hover:bg-web_wash rounded-full p-2 cursor-pointer '
      />
      <div
        className={`absolute right-0 top-12 shadow-3xl rounded-lg whitespace-nowrap p-2 bg-white min-w-fit z-[100]  ${
          clicked ? '' : 'hidden'
        }`}
      >
        {options.map((opn, key) => {
          return (
            <button
              key={key}
              onClick={() => {
                setClicked(false)
                opn.action()
              }}
              className='p-2 w-full hover:bg-web_wash rounded-md flex gap-2 items-center'
            >
              {opn?.icon ? <span>{opn.icon}</span> : null}
              <span>{opn.title}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
